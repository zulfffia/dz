const buttons = document.getElementsByClassName('button')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = (e) => {
        document. body.style.background = e. target.innerText
    }
}
