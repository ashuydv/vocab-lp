console.log("__________")


const accordion = document.getElementById("curriculum-accordion");

if (accordion) {
    const items = accordion.querySelectorAll("details");

    items.forEach((item) => {
        item.addEventListener("toggle", () => {
            if (item.open) {
                items.forEach((other) => {
                    if (other !== item) {
                        other.open = false;
                    }
                });
            }
        });
    });
}

// Page Sections
const sections = [
    "landing-section",
    "demo-1",
    "demo-2",
    "demo-3",
    "checkout"
];

function hideAll() {
    sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.classList.add("hidden");
    });
}

// Open Demo Pages
function openDemo(number) {
    hideAll();
    const demo = document.getElementById(`demo-${number}`);
    if (demo) demo.classList.remove("hidden");
    window.scrollTo(0, 0);
}

// Open Checkout Page
function openCheckout() {
    hideAll();
    const checkout = document.getElementById("checkout");
    if (checkout) checkout.classList.remove("hidden");
    window.scrollTo(0, 0);
}

// Go Back to Landing Page
function goBack() {
    hideAll();
    const landing = document.getElementById("landing-section");
    if (landing) landing.classList.remove("hidden");
    window.scrollTo(0, 0);
}
