//storageMixin.js
export default {
    methods: {
        getStorage() {
            return JSON.parse(localStorage.getItem('userDataStorage'));
        },
    },
};




