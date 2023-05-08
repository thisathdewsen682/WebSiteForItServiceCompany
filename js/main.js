/*Testimonial Sectin*/
const clickBtn = document.querySelectorAll(".dot");
const tabs = document.querySelectorAll(".test-tab");

function showBtn(e) {
  removeBtn();
  this.classList.add("active");
  removeTab();

  const currentTab = document.querySelector(`#${this.id}-inner`);

  currentTab.classList.add("show1");
}

clickBtn.forEach((item) => item.addEventListener("click", showBtn));

function removeBtn() {
  clickBtn.forEach((item) => item.classList.remove("active"));
}

function removeTab() {
  tabs.forEach((item) => item.classList.remove("show1"));
}

/*nav-bar*/
const toggleIcon = document.getElementById("toggle-icon");
const menuItem = document.querySelector(".menu-item");
toggleIcon.addEventListener("click", () => {
  toggleIcon.classList.toggle("fa-bars");
  toggleIcon.classList.toggle("fa-circle-xmark");
  menuItem.classList.toggle("active");
});
