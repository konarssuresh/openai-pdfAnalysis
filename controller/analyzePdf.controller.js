import { validationResult } from "express-validator";
import convertBase64PDFToText from "../utils/convertBase64PdfToText.js";
import analysePdf from "../utils/analysePdf.js";

export const analyzePdf = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ errors: errors.array().map(({ msg }) => msg) });
  }
  try {
    const text = await convertBase64PDFToText(req.body.document);
    const response = await analysePdf(text, req.body.query, req.body.summary);
    res.status(200).json({ result: `${response}` });
  } catch (e) {
    console.log("error occored in analyzepdf ");
    console.log(e);
    next();
  }
};
