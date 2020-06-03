export function clearToken() {
  return localStorage.removeItem("userName");
}

export function getTokenUser() {
  return localStorage.getItem("userName");
}

export function setTokenUser(userName: string) {
  return localStorage.setItem("userName", userName);
}
