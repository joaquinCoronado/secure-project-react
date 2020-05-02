export const saveToken = token => {
  localStorage.setItem("JWT_TOKEN", token);
};

export const isAuth = () => {
  let token = localStorage.getItem("JWT_TOKEN");
  return token ? true : false;
};

export const getToken = () => {
  let token = localStorage.getItem("JWT_TOKEN");
  console.log(token);
  return token;
};

export const logOut = () => {
  localStorage.clear();
};
