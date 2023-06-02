
const cartList = {
    namespaced:true,
    state(){
        return{
            cartList:[],

        }
    },
    getters:{
        getCartList: state=>state.cartList,
        getTotalSum: state => {
            return state.cartList.reduce((total, item) => {
                return total + item.price * item.amount;
            }, 0);
        },
        getCountOfProducts: state=>{
            return state.cartList.reduce((count,item)=>{
                return count + item.amount;
            },0)
        }
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
        ADD_TO_CART(state, payload) {
            const productIdx = state.cartList.findIndex((item) => item.id === payload.id)
            // console.log(productIdx)
            const productsCopy = [...state.cartList]

            let product = {
                // id: payload.id,
                ...payload,
                amount: 1,
                // info: payload
            }

            if (productIdx > -1) {
                const amount = productsCopy[productIdx].amount + 1
                // console.log(amount)
                product = {...product, amount}
                productsCopy.splice(productIdx, 1, product)
                state.cartList = productsCopy
                return
            }
            state.cartList = [...state.cartList, product]
        },
        REMOVE_FROM_CART(state, cardId) {
            state.cartList = state.cartList.filter(item => item.id !== cardId);
        }
    }
}


export default  cartList