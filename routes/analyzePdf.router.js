import express from "express";
import { body } from "express-validator";
import { analyzePdf } from "../controller/analyzePdf.controller.js";

const analyzePdfRouter = express.Router();

analyzePdfRouter.post(
  "/analyzePdf",
  [
    body("document").not().isEmpty().withMessage("document cannot be empty"),
    body("query").not().isEmpty().withMessage("query cannot be empty"),
    body("summary").not().isEmpty().withMessage("summary cannot be empty"),
  ],
  analyzePdf
);

export default analyzePdfRouter;
