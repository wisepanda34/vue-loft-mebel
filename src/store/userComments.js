
const userComments = {
    namespaced: true,
    state(){
        return{
            userComments:[],
            apiComments:[]
        }

    },
    getters:{
        getComments: state=>[...state.userComments,...state.apiComments]
    },
    actions:{
        addUserComment({commit,state}, payload){
            commit('ADD_USER_COMMENT', payload)
        },
        addApiComments({commit,state}, payload){
            commit('ADD_API_COMMENTS', payload)
        }
    },
    mutations:{
        ADD_USER_COMMENT(state,payload){
            state.userComments = [payload,...state.userComments]
        },
        ADD_API_COMMENTS(state,payload){
            state.apiComments = [...state.apiComments,...payload]
        }
    }
}
export default userComments