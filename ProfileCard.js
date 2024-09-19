const hiddenCard=document.querySelector(".hidden-card");
const overlay=document.querySelector(".overlay");

// fuction to open modal;
function openModal(){
    console.log('You have open the hidden card')
    hiddenCard.classList.add("active");
    overlay.classList.add("overlay-active");
};

//fuction to close modal

function closeModal(){
    hiddenCard.classList.remove("active");
    overlay.classList.remove("overlay-active");
};