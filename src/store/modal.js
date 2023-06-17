const modal = {
    namespaced: true,
    state(){
        return{
            modalTexts: '',
        }
    },
    getters:{
        getModalText: state=>state.modalTexts
    },
    actions:{
        openVoiceModal({commit},payload){
            commit('SET_MODAL_TEXTS', payload)
        },
        closeVoiceModal({commit}){
            commit('SET_MODAL_TEXTS','')
        }
    },
    mutations:{
        SET_MODAL_TEXTS(state, modalTexts) {
            state.modalTexts = modalTexts;
            setTimeout(() => {
                state.modalTexts = '';
            }, 600);
        }
    }
}
export default modal