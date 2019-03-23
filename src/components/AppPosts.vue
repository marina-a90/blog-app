<template>
    <div>
        <h1>Posts</h1>
        <div class="container" v-for="post in posts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.createdAt | diffForHumans }}</p>
            <p>There are {{ post.comments.length }} comments for this post</p>
            <router-link :to="`/posts/${post.id}`">View post</router-link>
            <div><button><router-link :to="`/edit/${post.id}`">Edit</router-link></button></div>
            <div><button @click="deletePost(post.id)">Delete</button></div>
            <hr>
        </div>
    </div>
</template>

<script>
import { postsService } from "../services/PostsService";
import { formatDate } from "../mixins/DateMixin";

export default {
  props: ["comments"],

  mixins: [formatDate],

  data() {
    return {
      postId: this.$route.params.id,
      posts: [],
    };
  },

  async created() {
    try {
      const { data } = await postsService.getAllPosts();
      this.posts = data;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    deletePost(id) {
      postsService.delete(id);
      location.reload();
    }
  }
};
</script>

<style>
</style>
