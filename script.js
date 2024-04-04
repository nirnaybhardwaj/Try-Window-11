let taskbar = document.getElementsByClassName("taskbar")[0]
let taskmenu = document.getElementsByClassName("taskmenu")[0]


taskbar.addEventListener("click", ()=>{
    if(taskmenu.style.bottom == "50px"){
        taskmenu.style.bottom = "-655px"
    }
    else{
        taskmenu.style.bottom = "50px"
    }
})
