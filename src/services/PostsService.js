import { httpService } from "./HttpService";

class PostsService {
  getAllPosts() {
    return httpService.get("/posts");
  }

  getPost(id) {
    return httpService.getID(`/posts/${id}`);
  }

  addNewPost(post) {
    return httpService.post("/posts", post);
  }
}

export const postsService = new PostsService();
