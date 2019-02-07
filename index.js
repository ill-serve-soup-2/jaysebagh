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

// SELECT ONE, TWO, THREE, AND HTML.
let one = document.querySelector("#one");
let oneValue = one.offsetTop;
let two = document.querySelector("#two")
let twoValue = two.offsetTop;
let three = document.querySelector("#three")
let threeValue = three.offsetTop;
let four = document.querySelector("#four")
let fourValue = four.offsetTop;

let html = document.querySelector("html");


// console.log(oneValue, twoValue, threeValue)
// LISTEN FOR MOUSE SCROLL
window.addEventListener("scroll", e => {
    // CHECKS WINDOW POSITION TO SHOW FIRST BG
    console.log(window.scrollY);
    if (window.scrollY < oneValue) {
        console.log('less than oneValue')
        html.classList.remove("two", "three", "four")
    }
    // CHECKS WINDOW POSITION TO SHOW SECOND BG
    if (window.scrollY >= oneValue) {
        console.log('greater or = than oneValue')
        html.classList.add("two")
        html.classList.remove("three", "four")
    }
    // CHECKS WINDOW POSITION TO SHOW THIRD BG
    if (window.scrollY >= twoValue) {
        console.log('two Value', twoValue);
        console.log('greater or = than twoValue')
        html.classList.add("three")
        html.classList.remove("two", "four")
    }
    // CHECKS WINDOW POSITION TO SHOW FOUR BG
    if (window.scrollY >= threeValue) {
        console.log('greater or = than threeValue')
        html.classList.add("four")
        html.classList.remove("two", "three")
    }

    // CHECKS IF WINDOW HITS BOTTOM OF PAGE TO SHOW FOURTH BG
    // if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //     html.classList.add("four")
    //     html.classList.remove("two", "three")
    // }
})


// STRETCH FUN STUFF
// cursor trail


let trail = document.getElementById("trail");
document.addEventListener("mousemove", getMouse); 

trail.style.position = "absolute";	
let trailpos = {x:0, y:0};

setInterval(followMouse, 50);

let mouse = {x:0, y:0};

let dir = "right";
function getMouse(e){
    mouse.x = e.pageX;
    mouse.y = e.pageY;

if(mouse.x > trailpos.x){
  dir = "right";
} else {
  dir = "left";
}
}

function followMouse(){
    let distX = mouse.x - trailpos.x;
    let distY = mouse.y - trailpos.y;

    trailpos.x += distX/5;
    trailpos.y += distY/2;
    
    trail.style.left = trailpos.x + "px";
    trail.style.top = trailpos.y + "px";

    if (dir == "right"){
        trail.setAttribute("class", "right");
    } else {
        trail.setAttribute("class", "left");        
    }
}

// page follows mouse


if(!window.ThreeDit) {
    ThreeDit = function(a,b) {
        function G(a) {
            p = a.clientX + g.scrollLeft;
            q = a.clientY + g.scrollTop
        }
        function F() {
            var a = g.scrollLeft - t;
            var b = g.scrollTop - u;
            p = v = g.scrollLeft + r;
            q = w = g.scrollTop + s;
            n += a;
            o += b;
            x = v + l.clientLeft - e.pageXOffset;
            y = w + l.clientTop - e.pageYOffset;
            t = g.scrollLeft;
            u = g.scrollTop
        }
        function E(){
            r = e.innerWidth / 2;
            s = e.innerHeight / 2;
            p = v = g.scrollLeft + r;
            q = w = g.scrollTop + s;
            x = v + l.clientLeft - e.pageXOffset;
            y = w + l.clientTop - e.pageYOffset
        }
        function D(){
            n += (p - n) * .05;
            o += (q - o) * .05;
            var a = (n - v) / r * 5;
            var b =- (o - w) / s * 5;
            for(var e = 0; e < d.length; e++){
                var f = d[e].node;
                var g = f;
                var h = 0;
                var k = 0;
                var l = d[e].z;
                f.style[i] = x - h + "px " + (y - k) + "px";
                f.style[j] = "rotateY(" + a + "deg) rotateX(" + b + "deg)translate3d(0px,0px, " + l * c.zDepth + "px)"}
            }
            function C(){
                var a;
                for(var b = 0; b < d.length; b++){
                    d[b].node.style[j] = "none"
                } delete d;d = [];
                A(g, 0);
                d.push({node: g, z : 0});
                d.sort(function h(a, b){
                    return a.z - b.z
                });
                var c = 0;
                var e = [c];
                d[0].z = c;
                for(var b = 1; b < d.length; b++){
                    e.push(c = d[b].z == d[b-1].z?c:c + 1)}
                    var f = e[e.length - 1];
                    for(var b = 0; b < d.length; b++){
                        d[b].z = e[b] / f}
                    }
                    function B(a){
                        c.perspective = a;
                        k[h + "Perspective"] = c.perspective + "px"
                    }
                    function A(a,b,e){
                        if(d.length >= c.maxElems - 1)
                        return;
                        if(!e&&a.tagName == "DIV" && a.childNodes.length > 0){
                            d.push({node: a, z:b})
                        }
                        for(var f = 0; f < a.childNodes.length; f++){
                            A(a.childNodes[f], b + 1, a.childNodes.length < 2)
                        }
                    }
                    function z(a){
                        f = a;
                        g = f.body;
                        h = "webkitTransform" in g.style?"webkit" : "MozTransform" in g.style?"Moz": null;
                        i = h + "TransformOrigin";
                        j = h + "Transform";
                        l = f.documentElement;
                        k = l.style;
                        m = e.getComputedStyle;
                        t = g.scrollLeft;
                        u = g.scrollTop;
                        k[h + "Perspective"] = c.perspective + "px";
                        k.backgroundImage = m(g).getPropertyValue("background-image");
                        k.backgroundColor = m(g).getPropertyValue("background-color");
                        C();
                        if(!c.initialized){
                            E();
                            n = p;
                            o = q;
                            e.addEventListener("resize", E);
                            e.addEventListener("scroll", F);
                            f.addEventListener("mousemove", G);
                            setInterval(D, 1e3 / 60)
                        }
                        c.initialized = true
                    }
                    var c = {zDepth: 300, maxElems: 100, perspective: 500, initialized: false};
                    var d = [];
                    var e = a;
                    var f = b;
                    var g;
                    var h;
                    var i;
                    var j;
                    var k;
                    var l;
                    var m;
                    var n;
                    var o;
                    var p;
                    var q;
                    var r;
                    var s;
                    var t;
                    var u;
                    var v;
                    var w;
                    var x;
                    var y;
                    c.init = z;
                    c.recollectElems = C;
                    c.render = D;
                    c.changePerspective = B;
                    return c
                }
            (window,document);
            ThreeDit.init(document);
        } else {
    ThreeDit.recollectElems();
}