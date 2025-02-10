const contactUsForm = document.querySelector(".contact-us-form")
const maskForm = document.querySelector(".mask-form")

function buttonClicked(){
    contactUsForm.style.left = "50%"
    contactUsForm.style.transform = "translateX(-50%)"
    maskForm.style.visibility = "visible"
}

function clickedMask(){
contactUsForm.style.left = "-235px"
contactUsForm.style.transform = "translateX(0)"
maskForm.style.visibility = "hidden"
}