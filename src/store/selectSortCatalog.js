

const selectSortCatalog={
   namespaced:true,
   state(){
       return{
           selectSortCatalog:[
               {value:'popular', name:'by popularity'},
               {value:'descending', name:'descending price'},
               {value:'ascending', name:'ascending price'},
           ]
       }
   } ,
    getters:{
       getSelectSort:state=>state.selectSortCatalog
    }
}

export default selectSortCatalog