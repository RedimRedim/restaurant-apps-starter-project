import { index } from "../views/pages/index.js";
import { restDetail } from "../views/pages/restdetail.js";
import { restFavorite } from "../views/pages/restfavorite.js";

export const routes = {
  '/': index,
  '/rest-detail/:id': restDetail,
  '/rest-favorite': restFavorite,
};
