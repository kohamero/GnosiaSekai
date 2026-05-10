const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");
const card = document.querySelector(".card");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    const targetId = tab.getAttribute("data-page");
    const newPage = document.getElementById(targetId);

    // Fix current height before switching
    const currentHeight = card.offsetHeight;
    card.style.height = currentHeight + "px";

    // remove active from all tabs
    tabs.forEach(t => t.classList.remove("active"));

    // hide all pages
    pages.forEach(p => p.classList.remove("active"));

     tab.classList.add("active");
     newPage.classList.add("active");

    // show selected page
    const target = tab.getAttribute("data-page");
    document.getElementById(target).classList.add("active");

    // Wait for DOM update, then animate to new height
    setTimeout(() => {
      const newHeight = newPage.offsetHeight;
      card.style.height = newHeight + "px";
    }, 10);

    // Reset height after animation
    setTimeout(() => {
      card.style.height = "auto";
    }, 400);

  });
});
