document.addEventListener("DOMContentLoaded", () => {
    const circle = document.getElementById("circle");

    circle.addEventListener("click", (e) => {
        const bubble = document.createElement("div");
        bubble.className = "bubble";
        bubble.textContent = "+1";

        const circleRect = circle.getBoundingClientRect();
        bubble.style.left = `${circleRect.left + circleRect.width / 2}px`;
        bubble.style.top = `${circleRect.top}px`;

        document.body.appendChild(bubble);

        bubble.addEventListener("animationend", () => {
            bubble.remove();
        });
    });
});
