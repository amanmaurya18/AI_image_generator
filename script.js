let mouseX=0;
let mouseY=0;
let flashlight=document.querySelector('#flashlight')

const isTorchDevice=()=>{
    try {
        document.createEvent("TorchEvent")
        return true
    } catch (e) {
        return false
    }
}

function getMousePosition(e){
    mouseX=!isTorchDevice() ? e.pageX : e.touches[0].pageX
    mouseY=!isTorchDevice() ? e.pageY : e.touches[0].pageY

    flashlight.style.setProperty("--Xpos",mouseX + "px")
    flashlight.style.setProperty("--Ypos",mouseY + "px")
}

document.addEventListener("mousemove",getMousePosition)
document.addEventListener("touchmove",getMousePosition)