import appServiceInstance from "./instance";

const getPost = async () => {
  return appServiceInstance({
    url: `https://dummyapi.io/data/v1/post?page=1&limit=10`,
    method: "GET",
  });
};

const createPost = async (payload: any) => {
  return appServiceInstance({
    url: "https://dummyapi.io/data/v1//post/create",
    method: "POST",
    data: payload,
  });
};

const deletePost = async (id: any) => {
  return appServiceInstance({
    url: `https://dummyapi.io/data/v1/post/${id}`,
    method: "DELETE",
  });
};
export default {
  getPost,
  deletePost,
  createPost,
};
