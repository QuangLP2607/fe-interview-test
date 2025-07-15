export interface PostPayload {
  title: string;
  description: string;
  tags: string[];
}

export interface PostResponse {
  id: string;
  title: string;
  description: string;
  tags: string[] | string;
}

export interface GetPostsResponse {
  posts: PostResponse[];
  total_page?: number;
}
