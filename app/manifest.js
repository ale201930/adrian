export default function manifest() {
  return {
    name: "Sistema de Inventario",
    short_name: "Inventario",
    description: "Sistema cronológico de control de inventarios, entradas, salidas, deudas y abonos.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#6366f1",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      }
    ]
  };
}
