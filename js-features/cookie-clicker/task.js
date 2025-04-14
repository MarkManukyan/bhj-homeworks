let clickCount = 0;

const clickerCounter = document.getElementById("clicker__counter");
const cookieImage = document.getElementById("cookie");


cookieImage.addEventListener("click", () => {
    clickCount++;
    clickerCounter.textContent = clickCount;

    cookieImage.style.transform = "scale(1.1)";
    setTimeout(() => {
        cookieImage.style.transform = "scale(1)";
    }, 100);
});