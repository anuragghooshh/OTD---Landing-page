const ham:HTMLIFrameElement = document.getElementById("ham") as HTMLIFrameElement;

const toggleNav = () =>{
    const hiddenNav = document.getElementById("hiddenNav");
    hiddenNav?.classList.toggle("active");
}

ham?.addEventListener("click",()=>{
    toggleNav();
})
