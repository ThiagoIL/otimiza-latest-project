# Deploy — Otimiza+

Este projeto pode ser publicado de duas formas:

1. **Servidor Node (recomendado)** — via EasyPanel usando Nixpacks ou Buildpacks. Builda e
   roda o app automaticamente, servindo o `dist/` com fallback de rotas (SPA).
2. **Servidor estático** — Apache ou Nginx servindo apenas os arquivos gerados pelo
   `npm run build` (sem Node rodando em produção).

Nos dois casos, as rotas do React Router (`/lp/bi`, `/servicos/:slug`,
`/obrigado-whatsapp` etc.) exigem que o servidor devolva `index.html` para qualquer
caminho que não seja um arquivo real — isso já está configurado em todos os cenários
abaixo.

---

## 1. EasyPanel (Nixpacks ou Buildpacks)

O projeto já inclui os arquivos que o EasyPanel precisa para detectar e buildar
automaticamente:

- `nixpacks.toml` — define instalação (`npm ci`), build (`npm run build`) e start
  (`npm run start`)
- `Procfile` — fallback para builders baseados em Buildpacks (`web: npm run start`)
- `package.json` → script `start` já configurado (`NODE_ENV=production tsx server.ts`)

### Passo a passo no EasyPanel

1. Crie um novo serviço → **App** → aponte para este repositório (Git) ou faça upload do
   zip do projeto.
2. Em **Build Method**, escolha **Nixpacks** (ou **Buildpacks**, ambos funcionam — os
   dois arquivos de config estão presentes).
3. Não é necessário configurar comando de build/start manualmente — o EasyPanel vai ler
   o `nixpacks.toml`/`Procfile` automaticamente. Se quiser sobrescrever, use:
   - **Build command:** `npm run build`
   - **Start command:** `npm run start`
4. **Porta:** o servidor lê a variável `PORT` automaticamente (padrão 3000 se não
   definida). Configure a porta no EasyPanel conforme o padrão da plataforma — não
   precisa mexer no código.
5. Variáveis de ambiente: se for usar a integração com Gemini (`@google/genai`, hoje não
   utilizada nas páginas), configure `GEMINI_API_KEY`. Para o site institucional em si,
   nenhuma variável é obrigatória.
6. Deploy. O EasyPanel vai rodar `npm ci` → `npm run build` → `npm run start`.

O servidor (`server.ts`) serve o conteúdo de `dist/` e devolve `index.html` para
qualquer rota desconhecida, garantindo que `/lp/bi` e as demais páginas funcionem
normalmente ao acessar a URL direto (não só navegando pelo menu).

---

## 2. Servidor estático (Apache ou Nginx)

Se preferir hospedar sem Node em produção (ex: hospedagem compartilhada, cPanel, VPS
com Apache/Nginx já configurado), gere o build estático e publique só os arquivos:

```bash
npm install
npm run build
```

Isso cria a pasta `dist/` — é o conteúdo dessa pasta (e só ele) que vai pro servidor.

### Apache

Copie o conteúdo de `dist/` para o document root (ex: `/var/www/html`). O arquivo
`.htaccess` já está incluído dentro de `dist/` (o Vite copia automaticamente a partir de
`public/.htaccess`) e cuida de:
- Redirecionar qualquer rota para `index.html` (fallback do React Router)
- Tipo MIME correto para os vídeos do hero (`.mp4`, `.webm`)
- Cache de assets estáticos e compressão gzip

Só confirme que o Apache tem os módulos habilitados:
```bash
sudo a2enmod rewrite expires deflate mime
sudo systemctl restart apache2
```

### Nginx

Nginx não lê `.htaccess` — use o arquivo de referência em
[`deploy/nginx.conf.example`](./deploy/nginx.conf.example):

```bash
npm run build
# copie dist/ para o servidor, ex:
scp -r dist/* usuario@servidor:/var/www/otimiza

# no servidor:
sudo cp deploy/nginx.conf.example /etc/nginx/sites-available/otimiza.conf
# edite server_name e root conforme seu domínio/caminho
sudo ln -s /etc/nginx/sites-available/otimiza.conf /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

---

## Checklist pós-deploy

- [ ] Acessar `/` e `/lp/bi` diretamente pela URL (não só clicando em links) — confirma
      que o fallback de SPA está funcionando
- [ ] Testar o botão de WhatsApp (deve passar por `/obrigado-whatsapp` e redirecionar)
- [ ] Conferir se os vídeos do hero (`/video/hero-dashboard-loop.mp4`/`.webm`) carregam
      sem erro 404 — dependem do tipo MIME configurado acima
- [ ] Confirmar HTTPS ativo (obrigatório pro Google Ads aprovar os anúncios apontando
      pra essas URLs)
