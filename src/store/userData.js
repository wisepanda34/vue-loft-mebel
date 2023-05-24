
const userData={
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
    action:{},
    mutations:{}
}
export  default userData