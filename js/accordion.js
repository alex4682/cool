const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");

        const panel = this.nextElementSibling;
        if (panel.classList.contains("open")) {
            panel.classList.add("closing");
            setTimeout(() => {
                panel.classList.remove("open", "closing");
            }, 50);
        } else {
            panel.classList.add("open");
        }
    });
}