// =========================
// ELEMENTS
// =========================

const envelope = document.getElementById("envelope");
const photo = document.getElementById("photo");
const openBtn = document.getElementById("openBtn");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

let opened = false;

// =========================
// OPEN ENVELOPE
// =========================

function openEnvelope() {

    if (opened) return;

    opened = true;

    // Envelope moves down slightly
    envelope.classList.add("open");

    // Photo slides up
    setTimeout(() => {
        photo.classList.add("show");
    }, 400);

    // Show button
    setTimeout(() => {
        openBtn.style.display = "inline-block";
    }, 1200);

}

// =========================
// NEXT PAGE
// =========================

openBtn.addEventListener("click", function () {

    page1.classList.remove("active");

    page2.classList.add("active");

});
