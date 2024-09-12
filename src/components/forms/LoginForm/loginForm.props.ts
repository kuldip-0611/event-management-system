export interface LoginFormFields {
  code: string
  role: string
}

export interface LoginFormProps {
  handleLogin: (values: LoginFormFields) => void
  loading: boolean
}
