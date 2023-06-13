
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
            // state.comment = payload
            state.userComments = [payload,...state.userComments]
            console.log(state.userComments)
        },
        ADD_API_COMMENTS(state,payload){
            // state.comment = payload
            state.apiComments = [...state.apiComments,...payload]
            console.log(state.userComments)
        }
    }
}
export default userComments