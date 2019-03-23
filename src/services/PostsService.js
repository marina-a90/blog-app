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

  edit(post) {
    return httpService.edit(`/posts/${post.id}`, post);
  }

  delete(id) {
    return httpService.delete(`/posts/${id}`);
  }
}

export const postsService = new PostsService();
