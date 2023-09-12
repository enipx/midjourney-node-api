import { variantHandler, streamVariantHandler } from "../controller/variant";
import type { Router } from "express";

export default (router: Router) => {
  const getRoute = (route = "") => {
    return `/variant${route}`;
  };

  router.post(getRoute(""), variantHandler);
  router.post(getRoute("/stream"), streamVariantHandler);
};
