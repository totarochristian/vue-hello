const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      title: "Carosello di immagini",
      sliderTitle: '',
      sliderImage: '',
      sliderAlt: '',
      sliderCurrentIndex: 0,
      sliderPrevIndex: 0,
      intervalSlider: [],
      sliderImages: [
        {
          img: "01.webp",
          title: "Spiderman",
          class: 'imgCont'
        },
        {
          img: "02.webp",
          title: "Ratchet & Clank",
          class: 'imgCont'
        },
        {
          img: "03.webp",
          title: "Bad guys",
          class: 'imgCont'
        },
        {
          img: "04.webp",
          title: "Gatto senza stivali",
          class: 'imgCont'
        },
        {
          img: "05.webp",
          title: "Avengers",
          class: 'imgCont'
        },
        {
          img: "collina.jpg",
          title: "Collina con vista su Sassuolo",
          class: 'imgCont'
        },
        {
          img: "fuoco.jpg",
          title: "Fuoco scoppiettante",
          class: 'imgCont'
        },
        {
          img: "mare.jpg",
          title: "Vista su Porto Ottiolu",
          class: 'imgCont'
        },
        {
          img: "paesaggio.jpg",
          title: "Vista dal Colle di San Maffeo",
          class: 'imgCont'
        },
        {
          img: "paesaggio_notturno.jpg",
          title: "Vista sulla Sassuolo notturna",
          class: 'imgCont'
        },
        {
          img: "panchina.jpg",
          title: "Parco in Via delle Cave",
          class: 'imgCont'
        }
      ]
    };
  },
  methods: {
    UpdatePreviewSlideShowed() {
      this.sliderImages[this.sliderPrevIndex].class = "imgCont";
      this.sliderImages[this.sliderCurrentIndex].class = "imgCont activeImage";
    },
    UpdateSlideShowed() {
        this.sliderImage = "./assets/img/" + this.sliderImages[this.sliderCurrentIndex].img;
        this.sliderTitle = this.sliderImages[this.sliderCurrentIndex].title;
        this.sliderAlt = 'Tema della foto: ' + this.sliderImages[this.sliderCurrentIndex].title;
        this.UpdatePreviewSlideShowed();
    },
    PrevSlide() {
      this.sliderPrevIndex = this.sliderCurrentIndex;
      if (this.sliderCurrentIndex > 0) this.sliderCurrentIndex--;
      else this.sliderCurrentIndex = this.sliderImages.length - 1;
      this.UpdateSlideShowed();
    },
    NextSlide() {
      this.sliderPrevIndex = this.sliderCurrentIndex;
      if (this.sliderCurrentIndex < this.sliderImages.length - 1)
        this.sliderCurrentIndex++;
      else this.sliderCurrentIndex = 0;
      this.UpdateSlideShowed();
    },
    MouseWheelScroll(event) {
      const delta = Math.sign(event.deltaY);
      if (delta == 1) NextSlide();
      else if (delta == -1) PrevSlide();
    },
    StartAutoCarousel() {
      this.intervalSlider = setInterval(this.NextSlide, 3000);
    },
    StopAutoCarousel() {
      clearInterval(this.intervalSlider);
    }
  },
  mounted() {
    this.UpdateSlideShowed();
    document.getElementById("btnPrev").addEventListener("click",this.PrevSlide);
    document.getElementById("btnNext").addEventListener("click",this.NextSlide);

    document.getElementById("carousel").addEventListener("wheel", this.MouseWheelScroll,{passive: true});

    window.addEventListener("load",this.StartAutoCarousel);
    document.getElementById("carousel").addEventListener("mouseout",this.StartAutoCarousel);
    document.getElementById("carousel").addEventListener("mouseover",this.StopAutoCarousel);
  },
}).mount("#app");
