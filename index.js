const togglebtn = document.querySelector(
  ".toggle_btn peer hidden max-lg:block z-50"
);
const togglebtn_icon = document.querySelector(
  ".toggle_btn.peer.hidden.max-lg:block.z-50 img"
);
const dropDownMenu = document.querySelector(".dropDown");

togglebtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
};
