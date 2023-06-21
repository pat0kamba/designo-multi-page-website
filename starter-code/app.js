let toggle = localStorage.getItem("state");
// grab the menu button
const menu_box = document.querySelector(".menu");
const menu_btn = document.querySelector(".menu-btn");
const close_btn = document.querySelector(".close-btn");

// get the nav links container
const links = document.querySelector(".navlinks");

const close_w = ()=>{
    localStorage.setItem("state", "closed");
    close_btn.style.display = "none";
    menu_btn.style.display="block";
    links.style.display="none";
}

const open_w = ()=>{
    localStorage.setItem("state", "opened");
    close_btn.style.display = "block";
    menu_btn.style.display="none";
    links.style.display="flex";

}

if(toggle === "opened")
{
    close_w();
}

menu_box.addEventListener("click", ()=>{
    toggle = localStorage.getItem("state");
    if(toggle !== "opened")
    {
        open_w();
    }
    else
    {
        close_w();
    }
})