const { createApp } = Vue;
const app = createApp({
    data() {
        return{
            title: 'Vue hello',
            imageName: 'bonfire.jpg'
        }
    }
}).mount('#app');