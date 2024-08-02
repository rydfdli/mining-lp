import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400"] });

const formatCaption = (caption) => {
    const words = caption.split(" ");
    const formattedWords = words.map((word, index) => {
      if(words.length > 1) {
        if (index === words.length - 1) {
          return `<span class="text-green-500">${word}</span>`;
        } else {
          return word;
        }
      }
      return word;
    });
    return formattedWords.join(" ");
  };

const Header = ({ caption }) => {
  const formattedCaption = formatCaption(caption);
  return (
    <h1 className={`text-5xl ${playfair.className} mb-7`} dangerouslySetInnerHTML={{ __html: formattedCaption }}>
    </h1>
  );
};

export default Header
