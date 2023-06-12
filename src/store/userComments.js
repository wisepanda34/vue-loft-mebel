
const userComments = {
    namespaced: true,
    state(){
        return{
            userComments:[],
            comment:{}
        }

    },
    getters:{
        getUserComments: state=>state.userComments
    },
    actions:{
        addComment({commit,state}, payload){
            commit('ADD_TO_COMMENTS', payload)
        }
    },
    mutations:{
        ADD_TO_COMMENTS(state,payload){
            state.comment = payload
            state.userComments = [...state.userComments, state.comment]
            console.log(state.userComments)
        }
    }
}
export default userComments