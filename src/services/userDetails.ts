import appServiceInstance from "./instance";

const createUser = async (payload:any) => {
  return appServiceInstance({
    url: `https://dummyapi.io/data/v1/user/create`,
    method: "POST",
    data: payload,
  });
};

const getUser = async () => {
  return appServiceInstance({
    url: `https://dummyapi.io/data/v1/user?page=1&limit=10`,
    method: "GET",
  });
};

const deleteUser = async (id:any) => {
  return appServiceInstance({
    url: `https://dummyapi.io/user/${id}`,
    method: "DELETE",
  });
};


export default {
  getUser,
  deleteUser,
  createUser
};
