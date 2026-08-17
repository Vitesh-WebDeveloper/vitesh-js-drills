document.getElementById("BOdy");
document.getElementById("btn");

let savedBTheme = localStorage.getItem("mytheme");

let newTheme = savedBTheme ? savedBTheme : "white";

document.getElementById("BOdy").style.backgroundColor = newTheme;

document.getElementById("btn").addEventListener("click", theme = () => {
    if (document.getElementById("BOdy").style.backgroundColor === "white") {
        document.getElementById("BOdy").style.backgroundColor  = "black"
         localStorage.setItem("myTheme", "black");
    } else {
        document.getElementById("BOdy").style.backgroundColor  = "white";
         localStorage.setItem("myTheme", "white");
    }
})

