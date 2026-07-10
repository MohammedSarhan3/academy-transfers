// ===== البيانات الرئيسية =====
const MAIN_BALANCE = 85000;

// المعاملات اللي معاها صور (التاريخ، المبلغ، السبب، البند، اسم ملف الصورة)
const transactions = [
  { date: "29 أبريل 2026", dateISO: "2026-04-29", amount: 600,    reason: "مونتاج",         cat: "المونتاج",      img: "مونتاج.PNG" },
  { date: "29 أبريل 2026", dateISO: "2026-04-29", amount: 350,    reason: "واتساب API",     cat: "واتساب API",    img: "واتساب api.PNG" },
  { date: "1 مايو 2026",   dateISO: "2026-05-01", amount: 640,    reason: "دومين",          cat: "الدومين",       img: "دومين.PNG" },
  { date: "3 مايو 2026",   dateISO: "2026-05-03", amount: 2400,   reason: "د. ماجد",        cat: "د. ماجد",       img: "د ماجد.PNG" },
  { date: "3 مايو 2026",   dateISO: "2026-05-03", amount: 200,    reason: "سحب سرحان",       cat: "سحب سرحان",     img: "سحب سرحان.PNG" },
  { date: "6 مايو 2026",   dateISO: "2026-05-06", amount: 100.01, reason: "شحن رصيد",        cat: "شحن الرصيد",    img: "شحن رصيد.PNG" },
  { date: "8 مايو 2026",   dateISO: "2026-05-08", amount: 3030,   reason: "اعلانات",         cat: "الإعلانات",     img: "اعلانات١.PNG" },
  { date: "16 مايو 2026",  dateISO: "2026-05-16", amount: 335,    reason: "نت الشقة",        cat: "نت الشقة",      img: "نت الشقة.PNG" },
  { date: "19 مايو 2026",  dateISO: "2026-05-19", amount: 1500,   reason: "سحب سرحان",       cat: "سحب سرحان",     img: "سحب سرحان ١.PNG" },
  { date: "20 مايو 2026",  dateISO: "2026-05-20", amount: 3030,   reason: "اعلانات",         cat: "الإعلانات",     img: "اعلانات ٢.PNG" },
  { date: "21 مايو 2026",  dateISO: "2026-05-21", amount: 120,    reason: "رصيد",           cat: "شحن الرصيد",    img: "رصيد.PNG" },
  { date: "28 مايو 2026",  dateISO: "2026-05-28", amount: 500,    reason: "سحب سرحان",       cat: "سحب سرحان",     img: "سحب سرحان ٣.PNG" },
  { date: "29 مايو 2026",  dateISO: "2026-05-29", amount: 2020,   reason: "اعلانات",         cat: "الإعلانات",     img: "اعلانات ٣.PNG" },
  { date: "4 يونيو 2026",  dateISO: "2026-06-04", amount: 400,    reason: "مونتاج",         cat: "المونتاج",      img: "مونتاج٢.PNG" },
  { date: "9 يونيو 2026",  dateISO: "2026-06-09", amount: 100.01, reason: "شحن رصيد",        cat: "شحن الرصيد",    img: "شحن ١.PNG" },
  { date: "10 يونيو 2026", dateISO: "2026-06-10", amount: 2020,   reason: "اعلانات",         cat: "الإعلانات",     img: "اعلانات.PNG" },
  { date: "12 يونيو 2026", dateISO: "2026-06-12", amount: 5000,   reason: "سحب سرحان",       cat: "سحب سرحان",     img: "سحب سرحان ٢.PNG" },
  { date: "12 يونيو 2026", dateISO: "2026-06-12", amount: 100,    reason: "مونتاج",         cat: "المونتاج",      img: "مونتاج ١.PNG" },
  { date: "13 يونيو 2026", dateISO: "2026-06-13", amount: 4000,   reason: "حساب منهج يوسف", cat: "منهج يوسف",     img: "حساب منهج يوسف.PNG" },
  { date: "13 يونيو 2026", dateISO: "2026-06-13", amount: 1100,   reason: "سحب سرحان",       cat: "سحب سرحان",     img: "سحب سرحان ٤.PNG" },
  { date: "17 يونيو 2026", dateISO: "2026-06-17", amount: 78.58,  reason: "شحن رصيد",        cat: "شحن الرصيد",    img: "شحن رصيد ٥.PNG" },
  { date: "18 يونيو 2026", dateISO: "2026-06-18", amount: 1000,   reason: "سحب عبد الله",    cat: "سحب عبد الله",  img: "سحب عبد الله.PNG" },
  { date: "18 يونيو 2026", dateISO: "2026-06-18", amount: 100.01, reason: "شحن رصيد",        cat: "شحن الرصيد",    img: "شحن رصيد ٤.PNG" },
  { date: "19 يونيو 2026", dateISO: "2026-06-19", amount: 3030,   reason: "اعلانات",         cat: "الإعلانات",     img: "اعلانات ٥.PNG" },
  { date: "19 يونيو 2026", dateISO: "2026-06-19", amount: 500,    reason: "تحويل للأزعر",    cat: "تحويل للأزعر",  img: "تحويل للازعر.PNG" },
  { date: "19 يونيو 2026", dateISO: "2026-06-19", amount: 3000,   reason: "مرتب محسن",       cat: "المرتبات",      img: "مرتب محسن.PNG" },
  { date: "21 يونيو 2026", dateISO: "2026-06-21", amount: 700,    reason: "تصوير العريش",    cat: "تصوير العريش",  img: "تصوير العريش.PNG" },
  { date: "23 يونيو 2026", dateISO: "2026-06-23", amount: 3030,   reason: "اعلانات",         cat: "الإعلانات",     img: "ااعلانات ٦.PNG" },
  { date: "بدون تاريخ",    dateISO: "9999-12-31", amount: 800,    reason: "مرتب جينا",       cat: "المرتبات",      img: "مرتب جينا.PNG" },
];

// المعاملات اللي مالهاش صور ولا تاريخ (تتحط في الآخر)
const noImageTransactions = [
  { amount: 17000, reason: "سحب سرحان وشيماء", cat: "سحب سرحان وشيماء" },
  { amount: 2500,  reason: "سحب سرحان",        cat: "سحب سرحان" },
  { amount: 10000, reason: "سحب حفناوي",       cat: "سحب حفناوي" },
  { amount: 7500,  reason: "سحب حفناوي",       cat: "سحب حفناوي" },
  { amount: 5000,  reason: "لله",             cat: "لله / صدقة" },
  { amount: 1400,  reason: "اعلانات",          cat: "الإعلانات" },
];

// ===== دوال مساعدة =====
const fmt = (n) =>
  n.toLocaleString("en-US", { minimumFractionDigits: n % 1 === 0 ? 0 : 2, maximumFractionDigits: 2 });

// ترتيب المعاملات حسب التاريخ (تصاعدي)
transactions.sort((a, b) => a.dateISO.localeCompare(b.dateISO));

// ===== الحسابات =====
const totalWithImages = transactions.reduce((s, t) => s + t.amount, 0);
const totalNoImages = noImageTransactions.reduce((s, t) => s + t.amount, 0);
const totalSpent = totalWithImages + totalNoImages;
const remaining = MAIN_BALANCE - totalSpent;
const totalCount = transactions.length + noImageTransactions.length;

// ===== عرض البطاقات العلوية =====
document.getElementById("mainBalance").textContent = fmt(MAIN_BALANCE);
document.getElementById("totalSpent").textContent = fmt(totalSpent);
document.getElementById("remaining").textContent = fmt(remaining);
document.getElementById("countBadge").textContent = totalCount + " تحويل";

// شريط النسبة
const spentPct = Math.min(100, (totalSpent / MAIN_BALANCE) * 100);
document.getElementById("progressFill").style.width = spentPct + "%";
document.getElementById("progressLabel").textContent =
  "تم صرف " + spentPct.toFixed(1) + "% من الرصيد";

// ===== بناء جدول المعاملات اللي معاها صور =====
const tbody = document.getElementById("txBody");
transactions.forEach((t, i) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td class="cell-num">${i + 1}</td>
    <td class="cell-date">${t.date}</td>
    <td class="cell-amount">${fmt(t.amount)} <span class="egp">ج.م</span></td>
    <td class="cell-reason"><span class="reason-tag">${t.reason}</span></td>
    <td class="cell-img">
      <img src="${encodeURI(t.img)}" alt="${t.reason}" loading="lazy"
           class="thumb" data-full="${encodeURI(t.img)}" data-caption="${t.reason} — ${t.date}">
    </td>`;
  tbody.appendChild(tr);
});

// ===== بناء قائمة المعاملات بدون صور =====
const noImgList = document.getElementById("noImgList");
noImageTransactions.forEach((t) => {
  const div = document.createElement("div");
  div.className = "noimg-item";
  div.innerHTML = `
    <span class="noimg-reason">${t.reason}</span>
    <span class="noimg-amount">${fmt(t.amount)} <span class="egp">ج.م</span></span>`;
  noImgList.appendChild(div);
});
document.getElementById("noImgTotal").textContent = fmt(totalNoImages) + " ج.م";
document.getElementById("withImgTotal").textContent = fmt(totalWithImages) + " ج.م";

// ===== نافذة عرض الصورة (Lightbox) =====
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("thumb")) {
    lightboxImg.src = e.target.dataset.full;
    lightboxCaption.textContent = e.target.dataset.caption;
    lightbox.classList.add("open");
  }
  if (e.target === lightbox || e.target.classList.contains("lightbox-close")) {
    lightbox.classList.remove("open");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") lightbox.classList.remove("open");
});
