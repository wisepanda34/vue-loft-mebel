

const cartList = {
    namespaced:true,
    state(){
        return{
            cartList:[]
        }
    },
    getters:{
        getCartList: state=>state.cartList
    },
    actions: {
        //это логика вызова мутации 'ADD_TO_CART' из компонента
        addToCart({ commit,state }, card) {
            commit('ADD_TO_CART', card);
        },
        removeFromCart({ commit }, cardId) {
            commit('REMOVE_FROM_CART', cardId);
        }
    },
    mutations: {
        //это логика самой мутации
        ADD_TO_CART(state, card) {
            // const existingCard = state.cartList.find(item => item.id === card.id);
            // if (existingCard){
            //     return
            // }
            state.cartList.push(card);
        },
        REMOVE_FROM_CART(state, cardId) {
            state.cartList = state.cartList.filter(item => item.id !== cardId);
        }
    }
}


export default  cartList