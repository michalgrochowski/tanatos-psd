var modal = document.getElementById("modal");
var modalContent = document.getElementById("modalContent");
var close = document.getElementById("close");
var menuButton = document.getElementById("openModal");
var menuItem = document.getElementsByClassName("menuItem");
var i;

for (i = 0; i < menuItem.length; i++) {
    menuItem[i].addEventListener("click", function(){
    modal.style.display = "none";
    })
};

menuButton.addEventListener("click", function(){
     modal.style.display = "flex";
     modalContent.style.display = "flex";
});

close.addEventListener("click", function(){
     modal.style.display = "none";
});

window.addEventListener("click", function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    };
});