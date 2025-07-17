function goToLocation(path) {
    window.location.href = path;
}

function checkKeyPress(e) {
    console.log("Key pressed:", e.keyCode);
    if (e.keyCode === 32) { // spacebar
        e.preventDefault();
        console.log("Space pressed - redirecting");
        goToLocation('https://www.dc.com/superman');
    }
}

window.onload = function () {
    console.log("window.onload fired");
    document.body.setAttribute("tabindex", "0");
    document.body.focus();
    document.body.addEventListener("keydown", checkKeyPress);

    const clickTarget = document.getElementById('portal_button');
    if (clickTarget) {
        console.log("portal_button found");
        clickTarget.style.cursor = 'pointer';
        clickTarget.addEventListener('click', () => {
            console.log("portal_button clicked - redirecting");
            goToLocation("https://www.dc.com/superman");
        });
    } else {
        console.error("portal_button NOT found");
    }
};
