function makeEle() {
    let hEle = document.createElement('h1')
    hEle.textContent="A headline"
    let body = document.querySelector("body")
    body.appendChild(hEle)
}
makeEle()