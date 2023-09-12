import { imagineHandler, streamImagineHandler } from "../controller/imagine";
import type { Router } from "express";

export default (router: Router) => {
  const getRoute = (route = "") => {
    return `/imagine${route}`;
  };

  router.post(getRoute(""), imagineHandler);

  router.post(getRoute("/stream"), streamImagineHandler);
};
