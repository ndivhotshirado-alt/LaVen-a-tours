// LaVenda Tours website settings
// Replace this number with the LaVenda Tours WhatsApp number, digits only.
// Example: South Africa +27 82 123 4567 becomes 27821234567.
const WHATSAPP_NUMBER = "27711620485";

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelectorAll("[data-tour]").forEach(link => {
  link.addEventListener("click", () => {
    const tour = link.dataset.tour;
    document.getElementById("tour").value = tour;
  });
});

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const data = new FormData(this);
  const message = [
    "Hello LaVenda Tours! I'd like to request a booking/quote.",
    "",
    `Name: ${data.get("name")}`,
    `Phone/WhatsApp: ${data.get("phone")}`,
    `Tour: ${data.get("tour")}`,
    `Preferred date: ${data.get("date") || "Not specified"}`,
    `Travellers: ${data.get("people") || "Not specified"}`,
    `Trip details: ${data.get("message") || "Not specified"}`
  ].join("\n");

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
});
