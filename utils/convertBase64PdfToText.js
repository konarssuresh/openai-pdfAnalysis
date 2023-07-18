import atob from "atob";
import pdfjsLib from "pdfjs-dist";

async function convertBase64PDFToText(base64PDF) {
  const pdfData = atob(base64PDF);
  const loadingTask = pdfjsLib.getDocument({ data: pdfData });
  try {
    const pdf = await loadingTask.promise;
    const numPages = pdf.numPages;
    const pageTexts = [];
    for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item) => item.str).join(" ");
      pageTexts.push(pageText);
    }
    const combinedText = pageTexts.join(" ");
    return combinedText;
  } catch (e) {
    console.log(e);
    console.log("error occured");
  }
}

export default convertBase64PDFToText;
