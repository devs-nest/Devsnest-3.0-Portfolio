document.addEventListener("DOMContentLoaded", () => {

    // finding the theme pref using media query.
    const themePreferenceDark = window.matchMedia("(prefers-color-scheme: dark)");
    // when-ever system theme is changing, we need to update check the theme pref and update the button text.
    themePreferenceDark.addEventListener("change", (event) => {
        checkThemePreference();
    })
    const getOSThemePref = () => themePreferenceDark.matches ? "dark" : "light";

    const getThemePrefFromLocalStorage = () => {
        return localStorage.getItem("theme");
    }
    const checkThemePreference = () => {
        const defaultTheme = getOSThemePref();
        const currentTheme = getThemePrefFromLocalStorage();
        if (currentTheme === "dark") {
            document.body.classList.toggle("dark-theme");
        } else if (currentTheme === "light") {
            document.body.classList.toggle("light-theme");
        }
        setButtonText(currentTheme ?? defaultTheme)
    }

    const setButtonText = (theme) => {
        // themeSwitcher.textContent = theme === "dark" ? "Light" : "Dark";
        themeSwitcher.innerHTML = "";
        const image = document.createElement("img");
        image.src = theme === "dark" ? "light.svg" : "dark.svg";
        image.id = "theme-icon";
        themeSwitcher.appendChild(image);

    }

    const switchTheme = () => {
        let theme;
        if (themePreferenceDark.matches) {
            document.body.classList.toggle("light-theme");
            theme = document.body.classList.contains("light-theme") ? "light" : "dark"
        } else {
            document.body.classList.toggle("dark-theme");
            theme = document.body.classList.contains("dark-theme") ? "dark" : "light"

        }
        localStorage.setItem("theme", theme);
        setButtonText(theme)
    }

    const themeSwitcher = document.getElementById("theme-switcher");
    themeSwitcher.addEventListener("click", switchTheme);

    checkThemePreference();

})