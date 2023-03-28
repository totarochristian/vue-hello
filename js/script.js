const { createApp } = Vue;
const app = createApp({
    data() {
        return{
            title: 'Vue hello',
            imageSrc: './images/bonfire.jpg',
            imageAlt: 'falò'
        }
    }
}).mount('#app');