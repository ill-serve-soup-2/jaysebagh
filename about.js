// SELECT THEMESELECT, LOGO, CONTENT, AND HEADER CLASSES
let theme = document.querySelector(".themeselect");
let darktheme = document.querySelector(".logo");
let content = document.querySelectorAll(".content");
let h4 = document.querySelectorAll(".header4");
// LISTEN FOR A CLICK ON THEMESELECT CLASS
theme.addEventListener("click", e => {
    // IF THE THEME IS LIGHT -> SWITCH TO DARK
    if (theme.textContent === "Theme: Light") {
    theme.textContent = "Theme: Dark";
    content.forEach(element => element.style.backgroundColor = "#333");
    h4.forEach(elementTwo => elementTwo.style.color = "white");
} else {
    // IF THEME IS DARK -> SWITCH TO LIGHT
    theme.textContent = "Theme: Light";
    content.forEach(element => element.style.backgroundColor = "#e8cfcf");
    h4.forEach(elementTwo => elementTwo.style.color = "rgb(97, 104, 107)");
}
});

// SELECT TITLESOUP AND H3
let titlesoup = document.getElementById("titlesoup");
let hThree = document.querySelector("h3");
// LISTEN FOR MOUSEOVER AND MOUSELEAVE EVENTS
// WHEN MOUSE MOVES OVER -> SWAP COLORS
// WHEN MOUSE LEAVES -> SWAP BACK
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
