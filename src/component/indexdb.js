import { openDB } from "idb";
import { CONFIG } from "../globals/config.js";

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(db) {
    db.createObjectStore(OBJECT_STORE_NAME, { keyPath: "id" });
  },
});

export const FavoriteRestIdb = {
  async getRestaurant(id) {
    try {
      return (await dbPromise).get(OBJECT_STORE_NAME, id);
    } catch (error) {
      console.error("ERROR getting restaurant", error);
    }
  },

  async getAllRestaurants() {
    try {
      return (await dbPromise).getAll(OBJECT_STORE_NAME);
    } catch (error) {
      console.error("ERROR getting all restaurants", error);
    }
  },

  async addRestaurant(restaurant) {
    try {
      return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
    } catch (error) {
      console.error("ERROR adding restaurant", error);
    }
  },

  async delRestaurant(id) {
    try {
      return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    } catch (error) {
      console.log("ERROR deleting restaurant", error);
    }
  },

  async isFavorite(id) {
    const favoriteRestaurant = await FavoriteRestIdb.getAllRestaurants();

    return favoriteRestaurant.some((restaurant) => restaurant.id == id);
  },
};
