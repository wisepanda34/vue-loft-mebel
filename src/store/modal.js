const modal = {
    namespaced: true,
    state(){
        return{
            isVoiceModalOpen: false
        }
    },
    getters:{
        getIsVoiceModalOpen: state=>state.isVoiceModalOpen
    },
    actions:{
        openVoiceModal({commit}){
            commit('SET_MODAL_OPEN',true)
        },
        closeVoiceModal({commit}){
            commit('SET_MODAL_OPEN',false)
        }
    },
    mutations:{
        SET_MODAL_OPEN(state,isOpen){
            state.isVoiceModalOpen=isOpen
        }
    }
}
export default modal