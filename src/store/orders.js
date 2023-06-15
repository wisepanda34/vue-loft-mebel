
const orders={
    namespaced: true,
   state(){
       const ordersStorage = JSON.parse(localStorage.getItem('ordersStorage')) || []
       return{
           orders: ordersStorage,
           order:[],
       }
   },
   getters:{
        getOrders:state=>state.orders
   },
   actions:{
        addNewOrder({commit,state}, payload){
            commit('ADD_NEW_ORDER',payload)
        },
       addProductsFromCart({commit,state},payload){
            commit('ADD_PRODUCTS_FROM_CART',payload)
       }
   },
   mutations:{
       ADD_NEW_ORDER(state, payload){
         const orderId = Date.now()
          function check(){
               let sum = 0
               state.order.forEach((item)=>{
                   sum += item.amount * item.price
               })
                return sum
           }
         const orderTotalCost = check()

           let orderUnion = [state.order,payload,orderId,orderTotalCost]
           state.orders=[...state.orders,orderUnion]
           localStorage.setItem('ordersStorage', JSON.stringify(state.orders))
           state.order = []
       },
       ADD_PRODUCTS_FROM_CART(state,payload){
           state.order = payload
       }
   }
}
export  default orders