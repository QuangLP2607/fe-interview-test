import apiClient from "./apiClient";

interface LoginPayload {
  username: string;
}

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

const login = (payload: LoginPayload) => {
  return apiClient.post<AuthResponse>("/auth/login", payload);
};

const logout = () => {
  return apiClient.delete("/auth/logout");
};

export default { login, logout };
