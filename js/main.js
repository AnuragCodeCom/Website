function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


var loader = document.getElementById("preload")
window.addEventListener("load" , async function(){
    this.document.body.style.background = "#000"
    // await sleep(1000);
    document.body.style.background = "#000"
    loader.style.background = "none"
    loader.addEventListener("transitionend" , function(){
        document.body.style.background = "#000"
        document.body.removeChild(loader)
        document.body.style.filter = "blue(0px)"
    })
})