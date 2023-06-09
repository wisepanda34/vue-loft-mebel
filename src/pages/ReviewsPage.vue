<template>
  <section class="reviews">
    <div class="container">
      <div class="reviews__wrapper">
        <h3 class="reviews__title center">OUR CLIENTS COMMENTS</h3>
        <div class="reviews__comments" v-for="comment in posts.comments" :key="comment.id">
          <div class="reviews__user"><span>client:</span> {{comment.user.username}}</div>
          <div class="reviews__text"><span>review:</span> {{comment.body}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ReviewsPage",
  data(){
    return{
      posts:[]
    }
  },
  mounted() {
    const fetchData=async()=> {
      try {
        const res = await fetch('https://dummyjson.com/comments?limit=10&skip=10&select=body,postId');
          this.posts = await res.json();
        console.log(this.posts)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }
}
</script>

<style lang="scss" scoped>
.reviews{
  &__wrapper{
    padding: 30px 0;
  }
  &__title{
    color: #4c6062;
    margin-bottom: 30px;
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