function change(color){
    let font = document.getElementById("color");
    let background_color =  document.getElementById("bgcolor");
    let icon_col_1 = document.getElementById('icon-1')
    let icon_col_2 = document.getElementById('icon-2')
    let icon_col_3 = document.getElementById('icon-3')
    font.style.color = color;
    background_color.style.backgroundColor = color;
    icon_col_1.style.color = color;
    icon_col_2.style.color = color;
    icon_col_3.style.color = color;
    
}



document.querySelector(".first-image").addEventListener("click", function(){
    document.getElementById("imageid").src = "images/purple.png"
})

document.querySelector(".second-image").addEventListener("click", function(){
    document.getElementById("imageid").src = "images/orange.png"
})
document.querySelector(".third-image").addEventListener("click", function(){
    document.getElementById("imageid").src = "images/green.png"
})
document.querySelector("#first-image").addEventListener("click", function(){
    document.getElementById("imageid").src = "images/purple.png"
    document.querySelector(".orange").style.height = "7px"
    document.querySelector(".orange").style.width = "7px"
    document.querySelector(".red").style.height = "10px"
    document.querySelector(".red").style.width = "10px"
    document.querySelector(".green").style.height = "5px"
    document.querySelector(".green").style.width = "5px"
})

document.querySelector("#second-image").addEventListener("click", function(){
    document.getElementById("imageid").src = "images/orange.png"
    document.querySelector(".orange").style.height = "10px"
    document.querySelector(".orange").style.width = "10px"
    document.querySelector(".red").style.height = "5px"
    document.querySelector(".red").style.width = "5px"
    document.querySelector(".green").style.height = "7px"
    document.querySelector(".green").style.width = "7px"

})
document.querySelector("#third-image").addEventListener("click", function(){
    document.getElementById("imageid").src = "images/green.png"
    document.querySelector(".orange").style.height = "5px"
    document.querySelector(".orange").style.width = "5px"
    document.querySelector(".red").style.height = "7px"
    document.querySelector(".red").style.width = "7px"
    document.querySelector(".green").style.height = "10px"
    document.querySelector(".green").style.width = "10px"
})
document.querySelector("#show-contact").addEventListener("click",function(){
    document.querySelector(".popup").style.visibility = "visible";
    document.querySelector(".popup").classList.add("active");
    
});

document.querySelector(".popup .close-btn").addEventListener("click",function(){
    console.log("clicked add");
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".popup").style.visibility = "hidden";
});

document.querySelector(".connect").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
    document.querySelector(".popup").style.visibility = "hidden";
});

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}


document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{
  
  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }

});
