<template>
    <div>
        <h1>Add post</h1>
        <form @submit.prevent="onSubmit">
            <div>Title: <input type="text" v-model="post.title" placeholder="title" 
            required minlength="2"/></div>

            <div>Text: <input type="text" v-model="post.text" placeholder="text" 
            required maxlength="300"/></div>

            <div><button type="submit">Add post</button></div>
            <div><button @click.prevent="resetForm">Reset</button></div>
        </form>

    </div>
</template>

<script>
import { postsService } from "../services/PostsService";

export default {
  props: ["posts"],
  data() {
    return {
      post: {
        title: "",
        text: ""
      }
    };
  },
  created() {
    this.$route.params.id &&
      postsService.getPost(this.$route.params.id).then(response => {
        this.post = response.data;
      });
  },
  methods: {
    onSubmit() {
      if (this.post.id) {
        this.editPost();
      } else {
        this.addPost();
      }
    },
    addPost() {
      postsService.addNewPost(this.post);
      this.$router.push("/posts");
    },
    async editPost() {
      try {
        const { data } = await postsService.edit(this.post);
        this.posts = data;
        this.$router.push("/posts");
      } catch (error) {
        console.log(error);
      }
    },
    resetForm() {
      this.post.title = "";
      this.post.text = "";
    }
  }
};
</script>

<style>
</style>
