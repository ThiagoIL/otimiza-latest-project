import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // API Route to read partners automatically
  app.get("/api/partners", (req, res) => {
    const partnersDir = path.join(process.cwd(), "public", "image", "partners");
    
    try {
      if (!fs.existsSync(partnersDir)) {
        return res.json([]);
      }

      const files = fs.readdirSync(partnersDir);
      const partners = files
        .filter(file => /\.(png|jpe?g|svg|webp)$/i.test(file))
        .map((file, index) => ({
          id: String(index + 1),
          name: file.split(".")[0],
          logo: `/image/partners/${file}`
        }));

      res.json(partners);
    } catch (error) {
      console.error("Error reading partners directory:", error);
      res.status(500).json({ error: "Failed to read partners" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
