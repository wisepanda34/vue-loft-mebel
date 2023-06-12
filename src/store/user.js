
const user={
    namespaced:true,
    state(){
        return{
            userData:{
                name: '',
                surname: '',
                email: '',
                phone:'',
                city:'',
                street:'',
                house:'',
                flat:''
            }
        }
    },
    getters:{
       getUserData: state=>state.userData
    },
    actions:{
        async updateUserData({commit}, payload) {
            await new Promise(resolve => {
                setTimeout(()=>{
                    resolve()
                },2000)
            })
            commit('SET_USER_DATA', payload);
        }
    },
    mutations:{
        SET_USER_DATA(state, payload) {
           state.userData = payload;
        }
    }
}
export  default user