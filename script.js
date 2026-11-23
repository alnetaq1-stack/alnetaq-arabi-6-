// ضع رقم واتساب المركز بصيغة دولية، أرقام فقط دون + أو مسافات.
const WHATSAPP_NUMBER = "966532921615";
document.getElementById("year").textContent = new Date().getFullYear();

const select = document.getElementById("serviceSelect");
document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => { select.value = link.dataset.service; });
});

document.getElementById("bookingForm").addEventListener("submit", event => {
  event.preventDefault();
  const d = new FormData(event.currentTarget);
  const msg = [
    "مرحباً مركز النطاق العربي 6، أرغب في حجز موعد / الاستفسار.",
    "",
    `الاسم: ${d.get("name")}`,
    `رقم التواصل: ${d.get("phone")}`,
    `السيارة: ${d.get("car") || "غير محدد"}`,
    `الخدمة: ${d.get("service")}`,
    `وصف المشكلة: ${d.get("details") || "لا يوجد"}`
  ].join("\n");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
});

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
}));
