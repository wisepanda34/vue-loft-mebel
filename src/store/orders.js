
const orders={
    namespaced: true,
   state(){
       const ordersStorage = JSON.parse(localStorage.getItem('ordersStorage')) || []
       return{
           orders: ordersStorage,
       }
   },
   getters:{
        getOrders:state=>state.orders
   },
   actions:{
        addNewOrder({commit,state}, payload){
            commit('ADD_NEW_ORDER',payload)
        },
   },
   mutations:{
       ADD_NEW_ORDER(state, payload){
           state.orders.push(payload)
           localStorage.setItem('ordersStorage', JSON.stringify(state.orders))
       },
   }
}
export  default orders