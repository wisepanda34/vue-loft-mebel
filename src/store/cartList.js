
const cartList = {
    namespaced:true,
    state(){
        const cartListData = JSON.parse(localStorage.getItem('cartListStorage')) || []
        return{
            cartList: cartListData,
        }
    },
    getters:{
        getCartList: state=>state.cartList,
        getTotalSum: state => {
            return state.cartList.reduce((total, item) => {
                return total + item.price * item.amount;
            }, 0);
        },
        //количество всех элементов заказа
        getTotalElements: state=>{
            return state.cartList.reduce((count,item)=>{
                return count + item.amount;
            },0)
        },
        //количество позиций товаров
        getCountNameOfProduct: state=>{
           return state.cartList.length
        }
    },
    actions: {
        //это логика вызова мутации 'ADD_TO_CART' из компонента
        addToCart({ commit,state }, card) {
            commit('ADD_TO_CART', card);
            localStorage.setItem('cartListStorage', JSON.stringify(state.cartList))

        },
        removeFromCart({ commit }, cardId) {
            commit('REMOVE_FROM_CART', cardId);

        },
        incrementQuantity({commit},itemId) {
            commit('INCREMENT_ONE_PIECE',itemId)
            console.log('INCREMENT_ONE_PIECE')
            // localStorage.setItem('cartListStorage', JSON.stringify(state.cartList))

        },
        decrementQuantity({commit},itemId) {
           commit('DECREMENT_ONE_PIECE',itemId)
            // localStorage.setItem('cartListStorage', JSON.stringify(state.cartList))

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
            localStorage.setItem('cartListStorage', JSON.stringify(state.cartList))

        },
        INCREMENT_ONE_PIECE(state,itemId){
            const product = state.cartList.find(item => item.id === itemId)
            if(product) product.amount++
            localStorage.setItem('cartListStorage', JSON.stringify(state.cartList))

        },
        DECREMENT_ONE_PIECE(state,itemId){
            const product = state.cartList.find(item => item.id == itemId)
            if(product && product.amount>1) {
                product.amount--
            }else{
                state.cartList=state.cartList.filter(item=>item.id !==itemId)
            }
            localStorage.setItem('cartListStorage', JSON.stringify(state.cartList))

        }
    }
}


export default  cartList