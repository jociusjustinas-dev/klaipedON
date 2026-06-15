import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        apie: "apie/index.html",
        atraskDviraciu: "atrask/dviraciu/index.html",
        gyvenk: "gyvenk/index.html",
        naujienos: "naujienos/index.html",
        naujiena: "naujienos/carmina-burana/index.html",
        praneskiteApieRengini: "praneskite-apie-rengini/index.html",
        renginiai: "renginiai/index.html",
        parodos: "renginiai/parodos/index.html",
        renginys: "renginiai/kamaniu-silelis/index.html",
      },
    },
  },
  plugins: [tailwindcss()],
});
