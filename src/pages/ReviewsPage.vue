<template>
  <section class="reviews">
    <div class="container">
      <h5 class="reviews__writeTitle" @click="writeComment">Write comment</h5>
      <div v-show="isWriteCommentOpen" class="reviews__writeComment">
        <form
            class="reviews__form"
            @submit="handleSubmitComment"
        >

          <input v-model="userValue"
                 class="reviews__form_input"
                 placeholder="username"
                 name='user_comment'
                 required/>

          <textarea v-model="textValue"
                    class="reviews__form_textarea"
                    placeholder="comment"
                    name='text_comment'
                    style="height: 80px"
                    required minLength="5" maxLength="300"/>
          <div class="reviews__form_buttons">
            <my-button class="reviews__form_submit" type="submit">Submit</my-button>
            <my-button class="reviews__form_cancel" type="button" @click="cancelComment">Cancel</my-button>
          </div>
        </form>
      </div>

      <div class="reviews__wrapper">

        <h3 class="reviews__title center">OUR CLIENTS COMMENTS</h3>
        <div class="reviews__comments" v-if="!isPostsLoading" v-for="comment in allComments" :key="comment.id">
          <div class="reviews__user"><span>client:</span> {{comment.user.username}}</div>
          <div class="reviews__text"><span>review:</span> {{comment.body}}</div>
        </div>
        <div class="center" v-else>Loading...</div>
        <div class="reviews__more center" @click="loadMoreComments">
          <span>Show more comments</span>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ReviewsPage",
  components: {MyButton, MyInput},
  data(){
    return{
      allComments:[],
      isPostsLoading: false,
      page: 1,
      limit: 10,
      userValue:'',
      textValue:'',
      isWriteCommentOpen: false,
    }
  },
  mounted() {
    this.fetchGetComments();
  },
  computed:{
    ...mapGetters({
      userComments: 'userComments/getUserComments'
    }),
//todo: add  userComments to allComments
  },
  methods:{
    async fetchGetComments () {
      try {
        this.isPostsLoading=true
        const res = await fetch(`https://dummyjson.com/comments?limit=${this.limit}&skip=${(this.page-1)*this.limit}&select=body,postId`,{
        });
        const newComments = await res.json();
        console.log('newComments:',newComments)
        // this.allComments = this.allComments.concat(newComments.comments)
        this.allComments = [...this.allComments,...newComments.comments]
        console.log(this.allComments)
      } catch (error) {
        console.log(error);
      }finally {
        this.isPostsLoading=false
      }
    },
    loadMoreComments(){
      this.page++
      this.fetchGetComments()
    },
    writeComment(){
      this.isWriteCommentOpen = true
    },
    cancelComment(){
      this.isWriteCommentOpen = false
    },
    ...mapActions({
      addCommentToUserComments:'userComments/addComment'
    }),
    handleSubmitComment(event){
      event.preventDefault();
      const id = Date.now()
      const username = event.target.elements.user_comment.value
      const body = event.target.elements.text_comment.value
      const newUserComment={id,username,body}
      this.addCommentToUserComments(newUserComment)
      this.userValue = ''
      this.textValue = ''
      this.isWriteCommentOpen = false
    },
  }
}
</script>

<style lang="scss" scoped>
.reviews{
  &__writeTitle{
    width: 90%;
    margin: 10px auto;
    color: #366a7a;
    cursor: pointer;
    text-decoration: underline;
    &:hover{
      color: #4199b4;
    }
  }
  &__writeComment{
    width: 90%;
    padding: 10px;
    margin: 10px auto;
    border: solid 1px #366a7a;
    background: #e0eaec;
    cursor: pointer;
    text-align: start;

  }
  &__form{
    display: flex;
    flex-direction: column;
    gap: 15px;
    &_input,&_textarea{
      outline: none;
      height: 40px;
      padding: 10px;
      text-decoration: none;
      resize: none;
      &::-webkit-input-placeholder{
        text-decoration: none;
        //text-overflow: clip;
      }
    }
    &_buttons{
      display: flex;
      gap: 20px;
    }
    &_submit{
      width: 100px;
    }
    &_cancel{
      width: 100px;
    }
  }
  &__wrapper{
    padding: 30px 0;
  }

  &__title{
    color: #4c6062;
    margin-bottom: 30px;
    justify-self: start;
  }
  &__comments{
    width: 90%;
    padding: 10px;
    margin: 10px auto;
    border: solid 1px #366a7a;
    background: #e0eaec;
    span{
      color: #366a7a;
      font-weight: 700;
    }
  }
  &__more{
    padding: 10px 0;
    font-size: 16px;
    color: #366a7a;
    cursor: pointer;
    text-decoration: underline;
    &:hover{
      color: #4199b4;
    }
  }
}
@media (max-width: 767px) {
  .reviews{
    &__comments{
      font-size: 12px;
    }
    &__title{
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
}
</style>