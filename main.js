let currentind = 0;
let image = document.querySelector(".landing .image");
let img = document.querySelector(".landing .image img");
let description = document.querySelector(".discreption");
let descriptionTi = document.querySelector(".discreption span");
let descriptionTe = document.querySelector(".discreption p");
let  info = document.querySelector(".info");
let  infoFs = document.querySelectorAll(".info span")[0];
let  infoSs = document.querySelectorAll(".info span")[1];
let  infoD1 = document.querySelectorAll(".info .date span")[0];
let  infoD2 = document.querySelectorAll(".info .date span")[2];
let  forward = document.querySelectorAll("footer .container i")[1];
let  backward = document.querySelectorAll("footer .container i")[0];
let  shad_1 = document.querySelector(".shadow-1");
let  shad_2 = document.querySelector(".shadow-2");
// 
// the object which hav the information
let information = {
    // the pattern
    //[image src,disc title,disc text,info first span,info secound span,info date1,info date1]
    roma:["images/posters-colisee-serie-de-grands-monuments-italien.jpg.jpg","Roma","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi sit laudantium eum quibusdam dolor? Sunt ad error magni quia impedit","span for info","Roma","01","01" ],
    china:["images/the-great-wall-of-china.jpg","China","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi sit laudantium eum quibusdam dolor? Sunt ad error magni quia impedit","span for info","CHINA","02","02"],
    othman:["images/pngtree-an-old-ship-sailing-in-rough-water-picture-image_2664590.jpg","Othman","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi sit laudantium eum quibusdam dolor? Sunt ad error magni quia impedit","span for info","OTHMAN","03","03"],
    yegrec:["images/4783160968_a0f75d4875_b_580900.jpg","Yegrec","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi sit laudantium eum quibusdam dolor? Sunt ad error magni quia impedit","span for info","YEGREC","04","04"],
    arab:["images/23.jpg","Arab","Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi sit laudantium eum quibusdam dolor? Sunt ad error magni quia impedit","span for info","ARAB","05","05"],
}
let types = Array.from(Object.keys(information));
let currentSub = information[types[currentind]];
// 


// function to insert all the data
function insert (){
        if(currentind>types.length-1){
        currentind=0;
    }
        if(currentind<0){
        currentind=types.length-1;
    }
    currentSub = information[types[currentind]];
    img.src = currentSub[0];
    descriptionTi.textContent = currentSub[1];
    descriptionTe.textContent = currentSub[2];
    infoFs.textContent = currentSub[3];
    infoSs.textContent = currentSub[4];
    infoD1.textContent = currentSub[5];
    infoD2.textContent = currentSub[6];
    shad_1.id = `sh-${currentind+1}`;
    shad_2.id = `sh-${currentind+1}`;
}


// format opneing the page
window.onload = function(){
    
    setTimeout(function(){
        image.classList.remove("hid");
        description.classList.remove("hid");
        info.classList.remove("hid");
        descriptionTi.classList.remove("hid");
        descriptionTe.classList.remove("hid");
        insert();
    },100)
}


// forward btn
forward.addEventListener("click",function(){
    currentind++;
    if(currentind>types.length-1){
        currentind=0;
    }
    currentSub = information[types[currentind]];
    image.classList.add("hid");
    description.classList.add("hid");
    descriptionTi.classList.add("hid");
    descriptionTe.classList.add("hid");
    info.classList.add("hid");
    setTimeout(function(){
        image.classList.remove("hid");
        description.classList.remove("hid");
        info.classList.remove("hid");
        descriptionTi.classList.remove("hid");
        descriptionTe.classList.remove("hid");
        insert();
    },1100)
});


// backward btn
backward.addEventListener("click",function(){
    currentind--;
    if(currentind<0){
        currentind=types.length-1;
    }
    currentSub = information[types[currentind]];
    image.classList.add("hid");
    description.classList.add("hid");
    descriptionTi.classList.add("hid");
    descriptionTe.classList.add("hid");
    info.classList.add("hid");
    setTimeout(function(){
        image.classList.remove("hid");
        description.classList.remove("hid");
        info.classList.remove("hid");
        descriptionTi.classList.remove("hid");
        descriptionTe.classList.remove("hid");
        insert();
    },1100)
});


// 
// 
// formating the minu
document.querySelector(".minu").addEventListener("click",function(){
    document.querySelector(".minu").classList.toggle("open");
    document.querySelector(".options").classList.toggle("open");
    document.querySelector(".lya").classList.toggle("open");
    document.querySelector(".contact").classList.remove("open")
    document.querySelector(".navigation").classList.remove("open")
    document.querySelector(".icon").classList.remove("open")


})

// 
// formating the contact
document.querySelector(".contact").addEventListener("click",function(){
    document.querySelector(".contact").classList.toggle("open")
})
// formating the logo
document.querySelector(".icon").addEventListener("click",function(){
    document.querySelector(".icon").classList.toggle("open")
    document.querySelector(".navigation").classList.toggle("open")
})




