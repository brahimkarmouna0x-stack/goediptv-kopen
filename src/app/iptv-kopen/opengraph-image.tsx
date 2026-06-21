import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "IPTV kopen in Nederland — goediptv-kopen";

export default function Image() {
  return renderOgImage({
    eyebrow: "IPTV kopen",
    title: "IPTV kopen in Nederland",
    subtitle: "Veilig bestellen, directe activering en stream binnen 5 minuten.",
  });
}
