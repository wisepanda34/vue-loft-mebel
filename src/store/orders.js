
const orders={
    namespaced: true,
   state(){
       return{
           orders: []
       }
   },
   getters:{
        getOrders:state=>state.orders
   },
   actions:{
        addNewOrder({commit,state}, payload){
            commit('ADD_NEW_ORDER',payload)
            console.log(payload)
        }
   },
   mutations:{
       ADD_NEW_ORDER(state, payload){
           state.orders=[...state.orders,payload]
       }
   }
}
export  default orders