import { openDB } from "idb";
import { CONFIG } from "../globals/config.js";
import { hideLoading, showLoading } from "../utils/loading.js";
const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(db) {
    db.createObjectStore(OBJECT_STORE_NAME, { keyPath: "id" });
  },
});

export const FavoriteRestIdb = {
  async getRestaurant(id) {
    showLoading();
    try {
      return (await dbPromise).get(OBJECT_STORE_NAME, id);
    } catch (error) {
      console.error("ERROR getting restaurant", error);
    } finally {
      hideLoading();
    }
  },

  async getAllRestaurants() {
    showLoading();
    try {
      return (await dbPromise).getAll(OBJECT_STORE_NAME);
    } catch (error) {
      console.error("ERROR getting all restaurants", error);
    } finally {
      hideLoading();
    }
  },

  async addRestaurant(restaurant) {
    showLoading();
    try {
      return (await dbPromise).put(OBJECT_STORE_NAME, restaurant);
    } catch (error) {
      console.error("ERROR adding restaurant", error);
    } finally {
      hideLoading();
    }
  },

  async delRestaurant(id) {
    showLoading();
    try {
      return (await dbPromise).delete(OBJECT_STORE_NAME, id);
    } catch (error) {
      console.error("ERROR deleting restaurant", error);
    } finally {
      hideLoading();
    }
  },

  async isFavorite(id) {
    showLoading();
    try {
      const favoriteRestaurant = await FavoriteRestIdb.getAllRestaurants();

      return favoriteRestaurant.some((restaurant) => restaurant.id == id);
    } catch (error) {
      console.error("Error getting favorite", error);
    } finally {
      hideLoading();
    }
  },
};
