import axios from "axios";
import { baseUrl } from "../../api";

export const getRecipeList = (search) => {
  try {
    const response = axios.get(
      `${baseUrl}/api/json/v1/1/filter.php?a=${search}`
    );
    return response;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};

export const getMealDetail = (search) => {
  try {
    const response = axios.get(
      `${baseUrl}/api/json/v1/1/lookup.php?i=${search}`
    );
    return response;
  } catch (error) {
    console.log("error", error);
    return error.message;
  }
};
