import apiPath from '../api/api_path'
import axios from 'axios'
import { toast } from 'react-toastify'

export async function LoginPage(body) {
  try {
    const res = await axios.post(apiPath.BASE_URL + apiPath.LOGIN, body)
    // console.log(res)
    return {
      data: res.data,
    }
    // console.log('data')
  } catch (error) {
    toast.error('Network error.')
  }
}
