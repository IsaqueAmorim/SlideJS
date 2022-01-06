
// MANUAL SLIDE
function contador(x){
    const img = document.querySelector("img");
    const image = document.querySelectorAll('button')
    const calc = x* -100;
    img.style.marginLeft = calc+"%";

    if(img.style.marginLeft == "0%"){
        image[0].classList.add("active")
    }else{
        image[0].classList.remove("active")
    }
    if(img.style.marginLeft == "-100%"){
        image[1].classList.add("active")
    }else{
        image[1].classList.remove("active")
    }
    if(img.style.marginLeft == "-200%"){
        image[2].classList.add("active")
    }else{
        image[2].classList.remove("active")
    }
    if(img.style.marginLeft == "-300%"){
        image[3].classList.add("active")
    }else{
        image[3].classList.remove("active")
    }
}contador(0);

// SLIDE AUTO
let contadorT = 0;

setInterval(()=>{
 contadorT = contadorT +1;

if(contadorT == 4){
    contadorT =0;
}
function automat(x){
    const img = document.querySelector("img");
    const image = document.querySelectorAll('button')
    const calc = x* -100;
    img.style.marginLeft = calc+"%";

    if(img.style.marginLeft == "0%"){
        image[0].classList.add("active")
    }else{
        image[0].classList.remove("active")
    }
    if(img.style.marginLeft == "-100%"){
        image[1].classList.add("active")
    }else{
        image[1].classList.remove("active")
    }
    if(img.style.marginLeft == "-200%"){
        image[2].classList.add("active")
    }else{
        image[2].classList.remove("active")
    }
    if(img.style.marginLeft == "-300%"){
        image[3].classList.add("active")
    }else{
        image[3].classList.remove("active")
    }
}automat(contadorT);
},4000)

