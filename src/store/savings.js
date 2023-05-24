const savings ={
    namespaced:true,
    state(){
        return{
            savings: [
            {
                subtitle: 'Time.',
                descr: 'We will accept your application as soon as possible. If necessary. We will select for you worthy options according to the specified criteria.'
            },
            {
                subtitle: 'Forces.',
                descr: 'We will buy in bulk or order at the factory, saving you from long discussions of the order with the contractor. We supervise all stages of work on	order.'
            },
            {
                subtitle: 'Money.',
                descr: 'You will definitely buy furniture cheaper than retail.'
            }
        ]
        }
    },
    getters:{
        getSaving: state=>state.savings
    },
    actions: {},
    mutations: {}
}

export default savings