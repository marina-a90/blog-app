import { httpService } from "./HttpService";

class PostsService {
  getAllPosts() {
    return httpService.get(`/posts?filter={"include":["comments"]}`);
  }

  getPost(id) {
    return httpService.getID(`/posts/${id}?filter={"include":["comments"]}`);
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

  addComment(postId, comment) {
    return httpService.postComment(`/posts/${postId}/comments`, comment);
  }
}

export const postsService = new PostsService();
