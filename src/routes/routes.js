import { home } from "../pages/home.js";
import { restDetail } from "../pages/restdetail.js";
import { restFavorite } from "../pages/restfavorite.js";

export const routes = {
  "/": home,
  "/favorite": restFavorite,
  "/detail/:id": restDetail,
};
