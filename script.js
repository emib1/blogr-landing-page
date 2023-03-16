const hamburgerMenu = document.querySelector(".open"),
closeMenu = document.querySelector(".close"),
mainUl = document.querySelector(".main-ul");
closeMenu.classList.add("hide");
mainUl.classList.add("hide");


hamburgerMenu.addEventListener("click", ()=>{
    mainUl.classList.remove("hide");
    closeMenu.classList.remove("hide");
    hamburgerMenu.classList.add("hide");
});

closeMenu.addEventListener("click", ()=>{
    closeMenu.classList.add("hide");
    mainUl.classList.add("hide");
    hamburgerMenu.classList.remove("hide");
})

/*********  ul related js  ********* */

const liElementImg = document.querySelectorAll(".main-ul li img"),
liUlList = document.querySelectorAll(".main-ul ul");
liElementImg.forEach((liImg)=>{
    liImg.classList.add("scale");

})

liUlList.forEach((liElem)=>{
    liElem.classList.add("hide");

})

for(let i = 0; i < liElementImg.length; i++){
    liElementImg[i].addEventListener('click', () => {
        liElementImg[i].classList.toggle("scale");
        liUlList[i].classList.toggle("hide");
    });
 }

 /********* desktop********* */
 const desktopElemenImg = document.querySelectorAll(".desktop-nav ul img"),
  desktopList = document.querySelectorAll(".des-main-ul");

 desktopElemenImg.forEach((desktopImg)=>{
    desktopImg.classList.add("scale");

});

desktopList.forEach((desktopListElem)=>{
    desktopListElem.classList.add("hide");

})

for(let i = 0; i < desktopElemenImg.length; i++){
    desktopElemenImg[i].addEventListener('click', () => {
        desktopElemenImg[i].classList.toggle("scale");
        desktopList[i].classList.toggle("hide");
    });
 }




