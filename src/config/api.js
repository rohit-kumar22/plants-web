const API_BASE_URL = process.env.REACT_APP_API_URL;

export const API = {
  COUNTRIES_LIST: `${API_BASE_URL}/countries`,
  PRODUCTS_LIST: "https://fakestoreapi.com/products",
};

export const REQUEST_OPTIONS = {
  headers: {
    "X-CSCAPI-KEY": process.env.REACT_APP_API_KEY,
  },
};
