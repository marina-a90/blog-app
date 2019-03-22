<template>
    <div>
        <h1>Posts</h1>
        <div class="container" v-for="post in posts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <router-link :to="`/posts/${post.id}`">View post</router-link>
        </div>
    </div>
</template>

<script>
import { postsService } from "../services/PostsService";

export default {
  data() {
    return {
      posts: []
    };
  },

  async created() {
    try {
      const { data } = await postsService.getAllPosts();
      this.posts = data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style>
</style>
