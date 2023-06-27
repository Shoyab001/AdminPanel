import apiPath from '../api/api_path'
import makeTheApiCall from '../../src/api/axios.config'

export async function getTypeDropdown() {
  let options = {
    url: apiPath.BASE_URL + apiPath.TypeDropdown,
    method: 'GET',
  }
  const res = await makeTheApiCall(options)

  return res.data
}

export async function list(content) {
  let options = {
    url: apiPath.BASE_URL + apiPath.USERS_LIST,
    method: 'post',
    data: content,
  }
  const res = await makeTheApiCall(options)

  return res
}

export async function getmastertablelist(body) {
  let options = {
    url: apiPath.BASE_URL + apiPath.MasterTableList,
    method: "POST",
    data: body,
  };
  const res = await makeTheApiCall(options);

  return res.data;
}
