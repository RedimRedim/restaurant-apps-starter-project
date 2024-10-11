import { index } from "../pages/index.js";
import { restDetail } from "../pages/restdetail.js";
import { restFavorite } from "../pages/restfavorite.js";

export const routes = {
  "/": index,
  "/rest-detail/:id": restDetail,
  "/rest-favorite": restFavorite,
};
