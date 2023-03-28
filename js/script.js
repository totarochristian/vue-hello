/*
---------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------   Main Goal   ------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
Given an array containing a list of five images, create a carousel like in the screenshot attached.
---------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------   Milestones   ------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
MILESTONE 1
First, let's create the static markup: build the container and insert a large image in the center: we will thus have the 
basic structure and styles ready to be able to focus only on the logical aspect.

MILESTONE 2
Now let's remove all the static markup and insert all the images dynamically using the provided array and a simple for 
loop concatenating a template literal.
All images will be hidden, except the first one, which will have a specific class that will make it visible.
At the end of this phase we will end up with the same slider drawn up in milestone 1, but built dynamically through 
JavaScript.

MILESTONE 3
When the user clicks on the arrows, the program will change the active image, which will therefore be displayed in place 
of the previous one.
---------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------   Bonus   --------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
BONUS 1:
Add the carousel infinite loop. That is, if the first image is active and the user clicks the arrow to go to the previous 
image, the last image in the array will appear and vice versa.

BONUS 2:
Add the display of all thumbnails to the right of the active large image, as in the proposed screenshot. All thumbnails 
will have a dark opacity layer, except for the one corresponding to the active image, which will instead have a colored 
border.
By clicking the arrows, in addition to changing the active image, you can manage the change of the active thumbnail.
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------   Tips   --------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
Before you start coding:
Let us not be intimidated by the apparent complexity of the exercise, but let us analyze first, as we always have, 
what could await us. We completed the HTML and CSS session a few days ago, if we don't remember something, let's go over 
some topics. However, let's not dedicate more than half an hour to the review, so as not to lose sight of the focus of 
the exercise.

Tips of the day:
1. Let's build a static version of the carousel containing only an image. We will comment (obscure) some elements of 
this static version at the appropriate moment in order to be able to reproduce them dynamically in js. We can then use 
them as "templates".
2. We always write our algorithm in Italian first by points to understand what we want to do
3. At the right time (ihihhi it's up to you to figure out which one) answer this question: "How many cycles are needed?"
---------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------   Program steps   ----------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
- Define basic html to show a single image and the basic elements
- Define the style of basic html
- Define the array with the images
- Define the index of the element to show as start
- Define function to update the image showed in the carousel
- Define function to decrease the slider index and show the new image in the slider (previous image respect the one showed)
- Define function to increase the slider index and show the new image in the slider (next image respect the one showed)
- Add event listeners to the buttons and connect them to the functions to increase and decrease the index of the slider
- Make the loop between last and first images
- Define a right container where define a preview of the images
- Define function to add preview images to the preview container
- Define function to call the update of the active image in the preview container
- Apply the two new functions to make the scroll of the images in the preview (+ style effects to change the brightness 
  and the bordr of the active img of the preview).
- Move the arrows in the preview instead of the slider
---------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------   My bonus   -------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
- Make the scroll of the images in the carousel by the mouse wheel scroll
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------
*/
const sliderImages = [
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
];
let sliderCurrentIndex = 0;
let sliderPrevIndex = 0;
let intervalSlider;

AddPreviewImages();
UpdateSlideShowed();

document.getElementById("btnPrev").addEventListener("click",PrevSlide);
document.getElementById("btnNext").addEventListener("click",NextSlide);

document.getElementById("carousel").addEventListener("wheel", MouseWheelScroll,{passive: true});

window.addEventListener("load",StartAutoCarousel);
document.getElementById("carousel").addEventListener("mouseout",StartAutoCarousel);
document.getElementById("carousel").addEventListener("mouseover",StopAutoCarousel);