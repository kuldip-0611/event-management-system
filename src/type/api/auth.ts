export interface LoginParams {
  code: string
  role: string
}
export interface LoginResponse {
  data: {
    user: UserResponse
  }
  token: string
  status: boolean
}
export interface User {
  id: number | string
  role: string
  token: string
}
export interface ApiResponse {
  status: boolean
}
export interface UserResponse {
  _id: string
  role: string
}
