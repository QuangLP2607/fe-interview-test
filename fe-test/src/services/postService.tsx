import apiClient from "./apiClient";
import type {
  PostPayload,
  PostResponse,
  GetPostsResponse,
} from "@mytypes/post";

const getTags = () => {
  return apiClient.get<string[]>("/posts/tags");
};

const getPosts = (params?: {
  page?: string;
  title?: string;
  tags?: string;
}) => {
  return apiClient.get<GetPostsResponse>("/posts", { params });
};

const createPost = (payload: PostPayload) => {
  return apiClient.post<PostResponse>("/posts", payload);
};

const updatePost = (id: string, payload: PostPayload) => {
  return apiClient.patch<PostResponse>(`/posts/${id}`, payload);
};
const deletePost = (id: string) => {
  return apiClient.delete(`/posts/${id}`);
};

export default { getTags, getPosts, createPost, updatePost, deletePost };
