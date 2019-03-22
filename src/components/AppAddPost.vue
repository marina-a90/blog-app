<template>
    <div>
        <h1>Add post</h1>
        <form>
            <div>Title: <input type="text" v-model="post.title" placeholder="title"/></div>
            <div>Text: <input type="text" v-model="post.text" placeholder="text"/></div>

            <div><button @click="addPost">Add post</button></div>
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
  methods: {
    addPost() {
      postsService.addNewPost(this.post);
      this.$router.push("/posts");
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
