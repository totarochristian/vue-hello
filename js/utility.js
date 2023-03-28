/**
 * Function used to update the image showed (as active) in the slider.
 */
function UpdateSlideShowed(){
    document.getElementById("sliderImg").setAttribute("src","./assets/img/"+sliderImages[sliderCurrentIndex].img);
    document.getElementById("sliderTitle").innerText = sliderImages[sliderCurrentIndex].title;
    UpdatePreviewSlideShowed();
}

/**
 * Function used to update the preview slide image showed
 */
function UpdatePreviewSlideShowed(){
    document.getElementById("previewImg_"+sliderPrevIndex).classList.remove("activeImage");
    document.getElementById("previewImg_"+sliderCurrentIndex).classList.add("activeImage");
}

/**
 * Function used to decrease the index of the active image in the slider, and when arrive to 0 go to the last image of the array.
 */
function PrevSlide(){
    sliderPrevIndex = sliderCurrentIndex;
    if(sliderCurrentIndex>0)
        sliderCurrentIndex--;
    else
        sliderCurrentIndex = sliderImages.length-1;
    UpdateSlideShowed();
}

/**
 * Function used to increase the index of the active image in the slider, and when arrive to the last element go to the first image of the array.
 */
function NextSlide(){
    sliderPrevIndex = sliderCurrentIndex;
    if(sliderCurrentIndex<(sliderImages.length-1))
        sliderCurrentIndex++;
    else
        sliderCurrentIndex = 0;
    UpdateSlideShowed();
}

/**
 * Function used to add the preview images to the preview container
 */
function AddPreviewImages(){
    const preview = document.getElementsByClassName("preview")[0];
    for(let i=0; i<sliderImages.length; i++){
        preview.innerHTML += '<div id="previewImg_'+i+'" class="imgCont"><img src="./assets/img/'+sliderImages[i].img+'" alt="Immagine '+i+' della preview"></div>';
        document.getElementById("previewImg_"+i).style.height = ""+(100/sliderImages.length)+"%";
    }
}

/**
 * Function used to scroll up and down the carousel images using the wheel of the mouse
 * @param {*} event Event wheel that call the function
 */
function MouseWheelScroll(event){
    const delta = Math.sign(event.deltaY);
    if(delta==1)
        NextSlide();
    else if(delta==-1)
        PrevSlide();
}

/** Function used to start the auto scroll of the images of the carousel */
function StartAutoCarousel(){
    intervalSlider = setInterval(NextSlide, 3000);
}

/** Function used to stop the auto scroll of the images of the carousel */
function StopAutoCarousel(){
    clearInterval(intervalSlider);
}