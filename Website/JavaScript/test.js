const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
    } else {s
    backToTopButton.classList.add("hidden")
    }
})

backToTopButton.addEventListener("click", goToTop)

const goToTop = () => {
    document.body.scrollIntoView();
};



const goToTop = () => {
    document.body.scrollIntoView({
    behavior: "smooth",
    });
};