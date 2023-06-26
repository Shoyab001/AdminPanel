import apipath from "../api/api-path";
import makeTheApiCall from "../api/axios.config";

export async function getUsersDetails(slug) {
  let options = {
    url: apipath.BASE_URL + apipath.GET_USERS + "/" + slug,
    method: "GET",
  };
  const res = await makeTheApiCall(options);

  return res.data;
}

//
