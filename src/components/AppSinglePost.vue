<template>
    <div>
        <div>single post</div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.createdAt }}</p>
        <p>{{ post.text }}</p>
    </div>
</template>

<script>
import { postsService } from "../services/PostsService";

export default {

  data() {
    return {
      postId: this.$route.params.id,
      post: {}
    };
  },

  async created() {
    try {
      const { data } = await postsService.getPost(this.postId);
      this.post = data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style>
</style>
