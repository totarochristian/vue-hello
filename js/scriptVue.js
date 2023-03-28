const { createApp } = Vue;
const app = createApp({
    data() {
        return{
            title: 'Carosello di immagini',
            imageSrc: './images/bonfire.jpg',
            imageAlt: 'falò'
        }
    }
}).mount('#app');