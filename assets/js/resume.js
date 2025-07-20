window.addEventListener("load", () => {

  // work.html
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      // Scroll ซ้ำหลังโหลดทุกอย่างเสร็จ
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300); // ปรับเวลาได้ตามความเหมาะสม
    }
  }

  const timework_bookengine = document.querySelector("#timework_bookengine");
  const timework_bizpotential = document.querySelector("#timework_bizpotential");
  const timework_cityvariety = document.querySelector("#timework_cityvariety");
  if (timework_bookengine) {
    timework_bookengine.innerHTML = diffDateReadable('2024-12-03', new Date(), 'y');
  }
  if (timework_bizpotential) {
    timework_bizpotential.innerHTML = diffDateReadable('2022-05-02', '2024-05-24', 'y');
  }
  if (timework_cityvariety) {
    timework_cityvariety.innerHTML = diffDateReadable('2022-03-18', '2022-05-31', 'y');
  }
});

var mybutton = document.getElementById("backToTopBtn");

// แสดงปุ่มเมื่อเลื่อนลง 20px จากด้านบนของเอกสาร  
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// เมื่อผู้ใช้กดที่ปุ่ม เลื่อนกลับไปด้านบนของเอกสาร  
function backToTop() {
  document.body.scrollTop = 0; // สำหรับ Safari  
  document.documentElement.scrollTop = 0; // สำหรับ Chrome, Firefox, IE และ Opera  
}

function diffDateReadable(date1, date2, addDay = '') {
  let start = new Date(date1);
  let end = new Date(date2);

  if (start > end) [start, end] = [end, start]; // สลับหาก start > end

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += prevMonth.getDate(); // เพิ่มจำนวนวันของเดือนก่อนหน้า
  }
  if (addDay != '') {
    days += 1;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return `${(years > 0) ? years + ' ปี ' : ''}${months} เดือน  ${days} วัน`;
}
