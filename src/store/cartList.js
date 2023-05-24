

const cartList = {
    namespaced:true,
    state(){
        return{
            cartList:[
                {
                    id: 'qw1',
                    titleCard: "Valencia Beige",
                    category: "bar stool",
                    img: '/images/img/bookcase-Beige.jpg',
                    price: 28,
                    width: 42,
                    deep: 42,
                    height: 65,
                    like: false
                },
                {
                    id: 'qw2',
                    titleCard: "Tolics-2 white Gloss",
                    category: "bar stool",
                    img: '/images/img/chair-white-Gloss.jpg',
                    price: 35,
                    width: 43,
                    deep: 43,
                    height: 77,
                    like: false
                },
                {
                    id: 'qw3',
                    titleCard: "Dins Velwet yellow",
                    category: "sofa",
                    img: '/images/img/sofa-yellow.jpg',
                    price: 529,
                    width: 2100,
                    deep: 1600,
                    height: 45,
                    like: false
                },
            ]
        }
    },
    getters:{
        getCartList: state=>state.cartList
    },
    actions: {},
    mutations: {}
}


export default  cartList