// Raw paragraph of text
const paragraph = `
JavaScript is a popular programming language. It is used for web development,
mobile applications, and server-side programming. Learning JavaScript opens up
many career opportunities.
`;

// Extract metadata
const characterCount = paragraph.length;
const wordCount = paragraph.trim().split(/\s+/).length;
const sentenceCount = paragraph.split(/[.!?]+/).filter(sentence => sentence.trim() !== "").length;

const words = paragraph
  .toLowerCase()
  .match(/\b[a-z]+\b/g);

const uniqueWords = [...new Set(words)];

const metadata = {
  characterCount,
  wordCount,
  sentenceCount,
  uniqueWordCount: uniqueWords.length,
  uniqueWords
};

console.log(metadata);