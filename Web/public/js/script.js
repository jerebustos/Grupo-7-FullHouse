document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){

   const moveContent= document.getElementById("move-content");
   if (moveContent) {
    moveContent.classList.toggle('move-container-all')
   }
    document.getElementById("show-menu").classList.toggle('show-lateral');
}

