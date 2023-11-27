// Side Menu Toggel
let body = document.querySelector("body")
let SideMenu = document.querySelector(".SideMenu")
let ToggelBtn = document.querySelector(".ToggelBtn");

body.style.paddingLeft = "150px";
SideMenu.style.left = "0px"

ToggelBtn.addEventListener("click", (e) => {

    e.preventDefault()
    if (body.style.paddingLeft == "150px" && SideMenu.style.left == "0px") {
        body.style.paddingLeft = "30px";
        SideMenu.style.left = "-250px";
    } else {
        body.style.paddingLeft = "150px";
        SideMenu.style.left = "0px";
    }
})

//User DropDown
let uDD = document.querySelector(".userDropDown")
let uDDO = document.querySelector(".userDropDownOption")

uDD.addEventListener("click", () => {
    uDDO.classList.toggle("show")
})
window.addEventListener('click', (e) => {
    if (!e.target.closest('.header_right')) {
        uDDO.classList.remove("show");
    }
})

// Side Menu Toggel Responsive
if (window.matchMedia('screen and (max-width: 767px)').matches) {
    let Hidebtn = document.querySelector(".Hidebtn")
    body.style.paddingLeft = "10px";
    SideMenu.style.left = "-250px"

    ToggelBtn.addEventListener("click", (e) => {

        e.preventDefault()
        if (body.style.paddingLeft == "10px" && SideMenu.style.left == "-250px") {
            body.style.paddingLeft = "10px";
            SideMenu.style.left = "0px";
        } else {
            body.style.paddingLeft = "10px";
            SideMenu.style.left = "0px";
        }
    })

    Hidebtn.addEventListener("click", () => {
        SideMenu.style.left = "-250px";
    })
}

// Input Type File
var inputs = document.querySelectorAll('.file-input')

for (var i = 0, len = inputs.length; i < len; i++) {
    customInput(inputs[i])
}

function customInput(el) {
    const fileInput = el.querySelector('[type="file"]')
    const label = el.querySelector('[data-js-label]')

    fileInput.onchange =
        fileInput.onmouseout = function() {
            if (!fileInput.value) return

            var value = fileInput.value.replace(/^.*[\\\/]/, '')
            el.className += ' -chosen'
            label.innerText = value
        }
}