const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      title: "Carosello di immagini",
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
      document
        .getElementById("previewImg_" + this.sliderPrevIndex)
        .classList.remove("activeImage");
      document
        .getElementById("previewImg_" + this.sliderCurrentIndex)
        .classList.add("activeImage");
    },
    UpdateSlideShowed() {
      document
        .getElementById("sliderImg")
        .setAttribute(
          "src",
          "./assets/img/" + this.sliderImages[this.sliderCurrentIndex].img
        );
      document.getElementById("sliderTitle").innerText =
        this.sliderImages[this.sliderCurrentIndex].title;
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
    AddPreviewImages() {
      const preview = document.getElementsByClassName("preview")[0];
      for (let i = 0; i < this.sliderImages.length; i++) {
        preview.innerHTML +=
          '<div id="previewImg_' +
          i +
          '" class="imgCont"><img src="./assets/img/' +
          this.sliderImages[i].img +
          '" alt="Immagine ' +
          i +
          ' della preview"></div>';
        document.getElementById("previewImg_" + i).style.height =
          "" + 100 / this.sliderImages.length + "%";
      }
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
    this.AddPreviewImages();
    this.UpdateSlideShowed();
  },
}).mount("#app");
