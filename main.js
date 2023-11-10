async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    console.log('hi')
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        document.getElementById(eleRef).append(letters[i]);
        i++
    }
    return;
}

async function deleteSentence(eleRef) {
    const sentence = document.getElementById(eleRef).innerHTML;
    const letters = sentence.split("");
    let i = 0;
    while (letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        document.getElementById(eleRef).innerHTML = letters.join("");
    }
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const carouselText = [
    { text: "web developer" },
    { text: "flutterer" },
    { text: " dreamer" }
]

async function carousel(carouselList, eleRef) {
    var i = 0;
    while (true) {
        console.log(carouselList[i].color)
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if (i >= carouselList.length) { i = 0; }
    }
}

carousel(carouselText, 'sentence')





const scrollElements = document.querySelectorAll(".js-scroll");

scrollElements.forEach((el) => {
    el.style.opacity = 0
})

const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <=
        ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100))
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};
const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    })
}


window.addEventListener('scroll', () => {
    handleScrollAnimation();
  })


