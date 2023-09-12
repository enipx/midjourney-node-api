import { upscaleHandler, streamUpscaleHandler } from "../controller/upscale";
import type { Router } from "express";

export default (router: Router) => {
  const getRoute = (route = "") => {
    return `/upscale${route}`;
  };

  router.post(getRoute(""), upscaleHandler);
  router.post(getRoute("/stream"), streamUpscaleHandler);
};
