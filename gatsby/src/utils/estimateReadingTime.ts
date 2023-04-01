export function estimateReadingTime(post: any): number {
  // Average reading speed in words per minute
  const wordsPerMinute = 200;

  const text = getPortableTextContent(post._rawBody);

  // Split the text into words
  const words = text.split(/\s+/);

  // Count the number of words
  const numWords = words.length;
  // Calculate estimated reading time in minutes
  const readingTime = Math.ceil(numWords / wordsPerMinute);

  return readingTime;
}

function getPortableTextContent(portableText: any): string {
  let text = "";
  portableText.forEach((block: any) => {
    if (block._type === "block") {
      text += block.children.map((child: any) => child.text).join(" ");
    } else if (block._type === "array") {
      text += getPortableTextContent(block.children);
    }
  });
  return text;
}
