let theme = document.querySelector(".themeselect");
let darktheme = document.querySelector(".logo");
let content = document.querySelectorAll(".content");
let h4 = document.querySelectorAll(".header4");
theme.addEventListener("click", e => {
    if (theme.textContent === "Theme: Light") {
    theme.textContent = "Theme: Dark";
    content.forEach(element => element.style.backgroundColor = "#333");
    h4.forEach(elementTwo => elementTwo.style.color = "white");
} else {
    theme.textContent = "Theme: Light";
    content.forEach(element => element.style.backgroundColor = "#e8cfcf");
    h4.forEach(elementTwo => elementTwo.style.color = "rgb(97, 104, 107)");
}
});

let titlesoup = document.getElementById("titlesoup");
let hThree = document.querySelector("h3");
titlesoup.addEventListener("mouseover", e => {
    titlesoup.style.color = "lightcoral";
    titlesoup.style.backgroundColor = "white";
    hThree.style.color = "white";
    hThree.style.backgroundColor = "lightCoral";
});
titlesoup.addEventListener("mouseleave", e => {
    titlesoup.style.color = "white";
    titlesoup.style.backgroundColor = "lightcoral";
    hThree.style.color = "lightcoral";
    hThree.style.backgroundColor = "white";
});


let one = document.querySelector("#one");
let oneValue = one.offsetTop;
let two = document.querySelector("#two")
let twoValue = two.offsetTop;
let three = document.querySelector("#three")
let threeValue = three.offsetTop;
let html = document.querySelector("html");
console.log(oneValue, twoValue, threeValue)
window.addEventListener("scroll", e => {
    if (window.scrollY < oneValue) {
        html.classList.remove("two", "three", "four")
    }
    if (window.scrollY >= oneValue) {
        html.classList.add("two")
        html.classList.remove("three", "four")
    }
    if (window.scrollY >= twoValue) {
        html.classList.add("three")
        html.classList.remove("two", "four")
    }
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        html.classList.add("four")
        html.classList.remove("two", "three")
    }
})