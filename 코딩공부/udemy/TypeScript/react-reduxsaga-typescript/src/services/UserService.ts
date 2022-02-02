import axios from "axios"
import { LoginReqType } from "../types"

const USER_API_URL = "https://api.marktube.tv/v1/me"

export default class UserService {
  public static async login(reqData: LoginReqType): Promise<String> {
    const respone = await axios.post(USER_API_URL, reqData)

    return respone.data.token
  }

  public static async logout(token: string): Promise<void> {
    await axios.delete(USER_API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    })
  }
}
