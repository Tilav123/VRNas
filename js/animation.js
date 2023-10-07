let counter = 1
let counter_element = doc.querySelector('.counter')
function int(end, word, elem) {
    let inter = setInterval(() => {
        counter++
        if (counter <= end) {
            elem.innerHTML = counter + word
        } else {
            clearInterval(inter)
        }
    }, 100);
}
int(32, "K", counter_element)
let part_9 = doc.querySelector('.part9')
let elipse = doc.querySelectorAll('.elipse')
window.addEventListener("scroll", () => {
    let header = doc.querySelector('.header-after')
    let head = doc.querySelector('.header')
    let scpos = window.scrollY
    if (scpos > (part_9.offsetTop - 250)) {
        for (let item of elipse) {
            item.classList.add('key')
            item.children[0].classList.add('key2')
        }
    }
    if (scpos > 100) {
        header.style.opacity = "100%"
        head.style.height = "65px"
    } else {
        header.style.opacity = "0%"
        head.style.height = "105px"
    }
})
// 
let anim_tx = doc.querySelectorAll(".anim-tx")
for (let item of anim_tx) {
    item.onclick = () => {
        if (item.nextElementSibling.nextElementSibling.className != "description pale-grey-text descript") {
            item.nextElementSibling.nextElementSibling.classList.add("descript")
            item.children[0].style.transform = "rotate(180deg)"
        } else {
            item.nextElementSibling.nextElementSibling.classList.remove("descript")
            item.children[0].style.transform = "rotate(0deg)"
        }
    }
}


// part7
let clients = doc.querySelectorAll('.client')
let container = doc.querySelector('.container')
let cly = null
for (let i = 0; i < clients.length; i++) {
    clients[i].onclick = () => {
        if (doc.body.offsetWidth < 1450) {
            let ofl = (clients[i].offsetLeft / container.offsetWidth) * 100
            if (doc.body.offsetWidth < 700) {
                if (ofl > 40) {
                    clients[i].classList.add('lefts')
                }
            } else {
                if (ofl > 70) {
                    clients[i].classList.add('lefts')
                }
            }
        }
        if (cly != null) {
            cly.classList.remove("turnon")
            cly.parentNode.classList.remove('lefts')
        }
        clients[i].children[1].classList.add("turnon")
        if (cly == clients[i].children[1]) {
            clients[i].children[1].classList.remove("turnon")
            clients[i].classList.remove('lefts')
            cly = clients[i].children[1]
            cly = null
        } else {
            clients[i].children[1].classList.add("turnon")
            cly = clients[i].children[1]
        }
    }
}
if (doc.body.clientWidth > 700) {
    clients[2].click() 
}
// Bureger menu
let burger = doc.querySelector('.burger')
let menu = doc.querySelector('.menu')
let cheese = 0
burger.onclick = () => {
    cheese += 1
    if (cheese % 2 != 0) {
        menu.classList.add('men')
        burger.children[0].classList.add('see1')
        burger.children[1].classList.add('see2')
        burger.children[2].classList.add('see3')
    } else {
        menu.classList.remove('men')
        burger.children[0].classList.remove('see1')
        burger.children[1].classList.remove('see2')
        burger.children[2].classList.remove('see3')
    }
}