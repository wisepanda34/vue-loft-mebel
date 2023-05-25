
const clients={
    namespaced:true,
    state() {
        return {
            newClients: []
        };
    },
    actions: {
        addNewClient({ commit,state }, newClient) {
            commit('ADD_NEW_CLIENT', newClient);
        },
    },
    mutations: {
        ADD_NEW_CLIENT(state,client){
            state.newClients.push(client)
        }
    }
}
export default clients