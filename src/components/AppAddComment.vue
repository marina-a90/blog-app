<template>
    <div>
        <h4>Add comment</h4>
        <form @submit.prevent="addComment">

            <div>Your comment: <input type="text" 
            v-model="comment.text" 
            placeholder="comment" 
            required minlength="2"/></div>

            <div><button type="submit">Add comment</button></div>
            <hr>
        </form>
    </div>
</template>

<script>
import { postsService } from "../services/PostsService";

export default {

  data() {
    return {
      postId: this.$route.params.id,
      comments: [],
      comment: {
        text: ""
      }
    };
  },

  methods: {
    addComment(postId, comment) {
        postsService.addComment(this.postId, this.comment);
        this.$router.go()
    }
  }, 

}
</script>

<style>

</style>
