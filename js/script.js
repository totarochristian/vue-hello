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
          title: "Spiderman"
        },
        {
          img: "02.webp",
          title: "Ratchet & Clank"
        },
        {
          img: "03.webp",
          title: "Bad guys"
        },
        {
          img: "04.webp",
          title: "Gatto senza stivali"
        },
        {
          img: "05.webp",
          title: "Avengers"
        },
        {
          img: "collina.jpg",
          title: "Collina con vista su Sassuolo"
        },
        {
          img: "fuoco.jpg",
          title: "Fuoco scoppiettante"
        },
        {
          img: "mare.jpg",
          title: "Vista su Porto Ottiolu"
        },
        {
          img: "paesaggio.jpg",
          title: "Vista dal Colle di San Maffeo"
        },
        {
          img: "paesaggio_notturno.jpg",
          title: "Vista sulla Sassuolo notturna"
        },
        {
          img: "panchina.jpg",
          title: "Parco in Via delle Cave"
        }
      ]
    };
  },
  methods: {
    UpdatePreviewSlideShowed() {
      document.getElementById("previewImg_" + this.sliderPrevIndex).classList.remove("activeImage");
      document.getElementById("previewImg_" + this.sliderCurrentIndex).classList.add("activeImage");
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
