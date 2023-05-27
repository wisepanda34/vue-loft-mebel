<template>
  <section class='profile'>
    <div class='container'>
      <div class='profile__wrapper'>

        <div class='profile__personal '>
          <h4>Personal data</h4>
          <form
              @submit.prevent="handleSubmit"
              class='profile__form'
              :class="{
                'disabled_class': loading
              }"
          >
            <div class="profile__personal-grid">
              <div class='profile__personal-grid-name' >
                <label for='input_name'>Name
                  <my-input name='input_name' v-model="userData.name" />
                </label>
              </div>

              <div class='profile__personal-grid-mail'>
                <label for='input_mail'>email
                  <my-input type='email' name='input_mail' v-model="userData.email" />
                </label>
              </div>

              <div class='profile__personal-grid-surname'>
                <label for='input_surname'>Surname
                  <my-input name='input_surname' v-model="userData.surname" />
                </label>
              </div>

              <div class='profile__personal-grid-phone' >
                <label for='input_phone'>phone
                  <my-input type='tel' name='input_phone' v-model="userData.phone"/>
                </label>
              </div>

              <div class='profile__personal-grid-city'>
                <label for='input_city'>city
                  <my-input name='input_city' v-model="userData.city"/>
                </label>
              </div>

              <div class='profile__personal-grid-street'>
                <label for='input_street'>street
                  <my-input name='input_street' v-model="userData.street"/>
                </label>
              </div>

              <div class='profile__personal-grid-build'>
                <label for='input_build'>build
                  <my-input name='input_house' v-model="userData.house"/>
                </label>
              </div>

              <div class='profile__personal-grid-apart'>
                <label for='input_apart'>apart
                  <my-input name='input_flat' v-model="userData.flat"/>
                </label>
              </div>

            </div>

            <my-button
                type="submit"
                class='profile__personal-btn'
                :disabled="loading"
            >Change</my-button>
          </form>

        </div>

        <div class='profile__orders'>
          <h4>My orders</h4>

          <div class='profile__orders-grid'>
            <div class='profile__orders-grid-product'>
              product
            </div>
            <div class='profile__orders-grid-price'>
              price
            </div>
            <div class='profile__orders-grid-date'>
              date
            </div>
            <div class='profile__orders-grid-status'>
              status
            </div>
          </div>

          <a class='profile__orders-btn' href='#'>See all</a>


        </div>


      </div>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import MyInput from "@/components/UI/MyInput.vue";
import MyButton from "@/components/UI/MyButton.vue";
export default {
name: "Profile",
  components:{MyButton, MyInput},
  data(){
    return {
      userData:{
          name: '',
          surname: '',
          email: '',
          phone:'',
          city:'',
          street:'',
          house:'',
          flat:''
      },
      loading: false
    }
  },
  computed:{
  ...mapGetters({
      getUserData:'user/getUserData'
    })
  },
  mounted() {
    this.userData = this.getUserData
  },
  methods:{
    ...mapActions({
      updateUserData: 'user/updateUserData'
    }),
    async handleSubmit () {
      if (this.loading) return
      console.log('submit')
      this.loading = true
      try {
        await this.updateUserData(this.userData)
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.profile{
  &__wrapper{
    display: flex;
    grid-gap: 4%;

    h4{
      font-size: 16px;
      line-height: 1.2;
      color: #414141;
      text-align: left;
    }
  }
  &__personal{
    flex: 0 1 46%;
    padding-bottom: 5%;


    &-grid{
      display: grid;
      grid-template-columns:0.6fr 0.4fr 1fr;
      column-gap:10px;
      row-gap: 10px;

      label{
        display: block;
        font-size: 12px;
        line-height: 1.2;
        color: #969696;
        text-align: left;
      }
      input{
        width: 100%;
        height: 38px;
        color: #686868;
        border: none;
      }
      &-name{
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 2;
      }
      &-mail{
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 2;
      }
      &-surname{
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 3;
      }
      &-phone{
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 3;
      }
      &-city{
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 4;
      }
      &-street{
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 4;
        grid-row-end: 5;
      }
      &-build{
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 5;
        grid-row-end: 6;
      }
      &-apart{
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 5;
        grid-row-end: 6;
      }

    }
    &-btn{
      width: 101px;
      height: 40px;
      display: block;
      margin: 20px 0 0 auto;
    }
  }

  &__orders{
    flex: 0 1 50%;
    padding-bottom: 20px;
    &-grid{
      display: grid;
      grid-template-columns: 4fr 1fr 1fr 1fr;
      grid-template-rows: 40px auto;
      grid-auto-rows: auto;
      border-collapse: collapse;

      div{
        border: 1px solid rgba(243, 243, 243, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        line-height: 147.69%;
        color: #686868;

      }

      &-product{
        // grid-column: 1/2;

      }
    }
    &-btn{
      display: block;
      font-size: 12px;
      line-height: 14px;
      color: #245462;
      margin-top: 20px;
      text-align: end;
      &:hover{
        color: #4bbbdd;
      }
    }
  }
}

.disabled_class {
  opacity: 0.5;
}
@media (max-width: 992px) {
  .profile{
    &__wrapper{
      flex-direction: column;
    }
  }
}
@media (max-width: 575px){
  .profile{
    &__personal{
      width: 100%;

      &-grid{
        display: grid;
        grid-template-columns:1fr 1fr;
        column-gap:10px;
        row-gap: 10px;

        &-name{
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 1;
          grid-row-end: 2;
        }
        &-surname{
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 2;
          grid-row-end: 3;
        }
        &-mail{
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 3;
          grid-row-end: 4;
        }
        &-phone{
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 4;
          grid-row-end: 5;
        }
        &-city{
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 5;
          grid-row-end: 6;
        }
        &-street{
          grid-column-start: 1;
          grid-column-end: 3;
          grid-row-start: 6;
          grid-row-end: 7;
        }
        &-build{
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 7;
          grid-row-end: 8;
        }
        &-apart{
          grid-column-start: 2;
          grid-column-end: 3;
          grid-row-start: 7;
          grid-row-end: 8;
        }

      }
      &-btn{
        width: 101px;
        height: 40px;
        display: block;
        margin: 20px 0 0 auto;
      }
    }

    &__orders{
      flex: 0 1 50%;
      &-grid{
        display: grid;
        grid-template-columns: 4fr 1fr 1fr 1fr;
        grid-template-rows: 40px auto;
        grid-auto-rows: auto;
        border-collapse: collapse;

        div{
          border: 1px solid rgba(243, 243, 243, 1);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          line-height: 147.69%;
          color: #686868;

        }

        &-product{
          // grid-column: 1/2;

        }
      }
      &-btn{
        display: block;
        font-size: 12px;
        line-height: 14px;
        color: #245462;
        margin-top: 20px;
        text-align: end;
        &:hover{
          color: #4bbbdd;
        }
      }
    }
  }
}
</style>