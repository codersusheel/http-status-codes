/* ===================================================
   HTTP Status Codes Explorer
   assets/js/script.js
=================================================== */

"use strict";

/* ==========================================
   Current Year
========================================== */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}

/* ==========================================
   Smooth Scroll (Anchor Links)
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/* ==========================================
   Copy Code Button
========================================== */

document.querySelectorAll("pre").forEach(pre => {

    const button = document.createElement("button");

    button.innerText = "Copy";

    button.className = "copy-btn";

    pre.style.position = "relative";

    button.style.position = "absolute";

    button.style.top = "10px";

    button.style.right = "10px";

    button.style.padding = "6px 12px";

    button.style.cursor = "pointer";

    button.style.border = "none";

    button.style.borderRadius = "5px";

    button.style.background = "#2563eb";

    button.style.color = "#fff";

    button.style.fontSize = "12px";

    pre.appendChild(button);

    button.addEventListener("click", () => {

        const code = pre.querySelector("code").innerText;

        navigator.clipboard.writeText(code);

        button.innerText = "Copied!";

        setTimeout(() => {

            button.innerText = "Copy";

        }, 1500);

    });

});

/* ==========================================
   Search Status Code
========================================== */

const searchInput = document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        document.querySelectorAll(".status-card").forEach(card => {

            const text = card.innerText.toLowerCase();

            card.style.display = text.includes(value)

                ? "block"

                : "none";

        });

    });

}

/* ==========================================
   Highlight Current Page
========================================== */

const currentPage = location.pathname.split("/").pop();

document.querySelectorAll("a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage) {

        link.classList.add("active-link");

    }

});

/* ==========================================
   Back To Top Button
========================================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topButton";

topBtn.style.position = "fixed";

topBtn.style.right = "20px";

topBtn.style.bottom = "20px";

topBtn.style.width = "45px";

topBtn.style.height = "45px";

topBtn.style.border = "none";

topBtn.style.borderRadius = "50%";

topBtn.style.background = "#2563eb";

topBtn.style.color = "#fff";

topBtn.style.cursor = "pointer";

topBtn.style.display = "none";

topBtn.style.fontSize = "20px";

topBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    topBtn.style.display = window.scrollY > 300

        ? "block"

        : "none";

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
   Page Loaded
========================================== */

window.addEventListener("load", () => {

    console.log("✅ HTTP Status Codes Explorer Loaded");

});

/* ==========================================
   Keyboard Shortcut
   Press "/" to focus search
========================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "/") {

        const search = document.getElementById("search");

        if (search) {

            event.preventDefault();

            search.focus();

        }

    }

});

/* ==========================================
   Status Code Counter
========================================== */

const counter = document.getElementById("status-count");

if (counter) {

    counter.textContent = document.querySelectorAll(".status-card").length;

}

/* ==========================================
   Random HTTP Status Tip
========================================== */

const tips = [

    "💡 200 OK = Successful request.",

    "💡 201 Created = New resource created.",

    "💡 301 = Permanent Redirect.",

    "💡 302 = Temporary Redirect.",

    "💡 400 = Bad client request.",

    "💡 401 = Authentication required.",

    "💡 403 = Access forbidden.",

    "💡 404 = Resource not found.",

    "💡 405 = Method not allowed.",

    "💡 408 = Request timeout.",

    "💡 409 = Resource conflict.",

    "💡 410 = Resource permanently removed.",

    "💡 429 = Too many requests.",

    "💡 500 = Internal server error.",

    "💡 501 = Feature not implemented.",

    "💡 502 = Invalid gateway response.",

    "💡 503 = Service temporarily unavailable.",

    "💡 504 = Gateway timeout."

];

const tipBox = document.getElementById("http-tip");

if (tipBox) {

    const random = Math.floor(Math.random() * tips.length);

    tipBox.textContent = tips[random];

}