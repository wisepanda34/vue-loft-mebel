const favorites={
    namespaced:true,
   state(){
       return{
           favorites:[]
       };
   },
    getters:{
        getFavorites: state=>state.favorites
    },
    actions:{
        addToFavorites({commit, state}, newFavorite){
            commit('ADD_NEW_FAVORITE',newFavorite)
        },
        removeFromFavorites({commit, state},card){
            commit('REMOVE_FROM_FAVORITES',card)
        }
    },
    mutations:{
        ADD_NEW_FAVORITE(state,newFavorite){
            state.favorites.push(newFavorite);
        },
        REMOVE_FROM_FAVORITES(state, card) {
            const index = state.favorites.findIndex(
                (favorite) => favorite.id === card.id
            );
            if (index !== -1) {
                state.favorites.splice(index, 1);
            }
        }
    }
}
export default favorites