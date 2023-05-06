const sidebar = document.querySelector(".sidebar");
const menuIcon = document.querySelector(".hamburgericon");

function openSidebar(){
   if(sidebar.style.display === "none"){
    sidebar.style.display = "block";
   }

   else{
    sidebar.style.display = "none";
   }
}

menuIcon.addEventListener("click", openSidebar);