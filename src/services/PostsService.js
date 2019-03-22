import { httpService } from "./HttpService";

class PostsService {
  getAllPosts() {
    return httpService.get("/posts");
  }
}

export const postsService = new PostsService();
