import type { Router } from "express";
import express from "express";
import imagineRouter from "./imagine";
import upscaleRouter from "./upscale";
import variantRouter from "./variant";

const router = express.Router();

export default (): Router => {
  imagineRouter(router);
  upscaleRouter(router);
  variantRouter(router);

  return router;
};
