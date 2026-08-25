import { weddingSvg } from "@/assets/weddingText";

const WeddingText = () => {
  return <div className="wedding-text" dangerouslySetInnerHTML={{ __html: weddingSvg }} />;
};

export default WeddingText;
