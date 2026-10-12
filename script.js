const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const bookingForm = document.getElementById("bookingForm");
const hotelGrid = document.getElementById("hotelGrid");
const searchMessage = document.getElementById("searchMessage");

const checkIn = document.getElementById("checkIn");

const today = new Date();
const localToday = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
].join("-");

checkIn.min = localToday;

// Mobile navigation menu
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const location = document.getElementById("location").value;
    const hotelType = document.getElementById("hotelType").value;
    const rooms = Number(document.getElementById("rooms").value);
    const adults = Number(document.getElementById("adults").value);
    const children = Number(document.getElementById("children").value);
    const date = checkIn.value;

    if (!location) {
        searchMessage.textContent =
            "Please select a location in Tamil Nadu.";
        return;
    }

    if (!date || date < localToday) {
        searchMessage.textContent =
            "Please select today or a future check-in date.";
        return;
    }

    const hotels = document.querySelectorAll(".hotel-card");
    let found = 0;

    hotels.forEach(function (hotel) {
        const hotelLocation = hotel.dataset.location;

        if (hotelLocation === location) {
            hotel.style.display = "block";
            found++;
        } else {
            hotel.style.display = "none";
        }
    });

    if (found > 0) {
        searchMessage.textContent =
            `${found} demo result found in ${location}. ` +
            `${hotelType}, ${rooms} room(s), ${adults} adult(s), ` +
            `${children} child(ren), check-in ${date}.`;

        document.querySelector(".section").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    } else {
        searchMessage.textContent =
            `No demo hotels found in ${location}.`;
    }
});

const subscribeForm = document.getElementById("subscribeForm");
const subscribeMessage = document.getElementById("subscribeMessage");

subscribeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = subscribeForm.querySelector("input").value;

    if (email) {
        subscribeMessage.textContent =
            "Thank you! This is a demo subscription.";
        subscribeForm.reset();
    }
});
