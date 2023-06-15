
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
            console.log('ADD_NEW_ORDER payload:' ,payload)
        },
       addProductsFromCart({commit,state},payload){
            commit('ADD_PRODUCTS_FROM_CART',payload)

       }
   },
   mutations:{
       ADD_NEW_ORDER(state, payload){
           const orderId = Date.now()
           let orderUnion = [state.order,payload,orderId]
           state.orders=[...state.orders,orderUnion]
           console.log('payload',payload)
           console.log('state.order',state.order)
           console.log('orderUnion',orderUnion)
           console.log('state.orders',state.orders)
           localStorage.setItem('ordersStorage', JSON.stringify(state.orders))
           state.order = []
       },
       ADD_PRODUCTS_FROM_CART(state,payload){
           // state.order = Object.values(payload)
           state.order = payload
           // console.log('payload',payload)
           // console.log('state',state)
           console.log('state.order',state.order)
           // console.log('...state.order',...state.order)
           // console.log('state.order',Object.values(state.order))
       }
   }
}
export  default orders