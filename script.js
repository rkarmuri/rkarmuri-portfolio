function toggleMobileMenu() {
    document.getElementById("menu").classList.toggle("active");
}

// Get current time in hours (0–23)
const currentHour = new Date().getHours();

// Get saved dark mode preference from localStorage
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector(".dark-mode-toggle");

const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
    if (darkModeToggle) darkModeToggle.checked = true;
};

const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", "disabled");
    if (darkModeToggle) darkModeToggle.checked = false;
};

// Auto-toggle based on time if no manual preference
if (!darkMode) {
    if (currentHour >= 19 || currentHour < 7) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
} else if (darkMode === 'enabled') {
    enableDarkMode();
} else {
    disableDarkMode();
}

// Manual toggle override
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        darkMode = localStorage.getItem('darkMode');
        if (darkModeToggle.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
}

// Scroll To Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const skillsTop = document.getElementById("skills")?.offsetTop || 0;

    if (scrollY >= skillsTop - 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

