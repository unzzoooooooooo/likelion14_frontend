const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("section");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("myButton");
  if (button) {
    button.addEventListener("click", submit);
  }
});

function submit() {
  const input = document.getElementById("guestbook");
  const result = document.getElementById("result");

  if (!input) return;

  const coment = input.value.trim();

  if (!coment) {
    if (result) result.textContent = "내용을 입력해주세요.";
    return;
  }

  // 화면에 표시
  if (result) {
    result.textContent = `방명록을 작성하셨습니다: ${coment}`;
  }

  // 콘솔에도 출력
  console.log("방명록을 작성하셨습니다", coment);

  // 입력창 초기화
  input.value = "";
}