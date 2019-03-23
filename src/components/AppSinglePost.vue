<template>
    <div>
        <h1>{{ post.title }}</h1>
        <p>{{ post.createdAt | formatDate }}</p>
        <p>{{ post.text }}</p>
        <hr>

        <AppAddComment :comments="comments"></AppAddComment>

        <p v-if="post.comments">There are {{ post.comments.length }} comments for this post</p>

        <div>
            <div class="container" v-for="comment in post.comments" :key="comment.id">
                <h3>{{ comment.text }}</h3>
                <hr>
            </div>
        </div>
      
    </div>
</template>

<script>
import { postsService } from "../services/PostsService";
import AppAddComment from "./AppAddComment";
import { formatDate } from "../mixins/DateMixin";

export default {

  components: {
      AppAddComment
  },

  props: ["comments"],

  mixins: [formatDate],

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
  }, 
  
};
</script>

<style>
</style>
