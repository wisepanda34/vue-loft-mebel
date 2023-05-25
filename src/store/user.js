
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
                    console.log('data updated on server')
                },2000)
            })
            commit('SET_USER_DATA', payload);
        }
    },
    mutations:{
        SET_USER_DATA(state, payload) {
            console.log('SET_USER_DATA')
           state.userData = payload;
        }
    }
}
export  default user