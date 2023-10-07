AOS.init();
let doc = document
let poster = doc.querySelector('.poster')
let video = doc.querySelector('video')
poster.onclick = () => {
    poster.style.display = "none"
    video.play()
}
