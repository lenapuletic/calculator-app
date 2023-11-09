let currentTheme = "styles.css"; 

function setTheme() {
    const themeLink = document.getElementById("theme");

    switch (currentTheme) {
        case "styles.css":
            currentTheme = "styles2.css";
            break;
        case "styles2.css":
            currentTheme = "styles3.css";
            break;
        case "styles3.css":
            currentTheme = "styles.css";
            break;
        default:
            currentTheme = "styles.css"; 
    }

    themeLink.href = currentTheme;
}



