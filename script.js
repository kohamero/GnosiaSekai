const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    // remove active from all tabs
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // hide all pages
    pages.forEach(p => p.classList.remove("active"));

    // show selected page
    const target = tab.getAttribute("data-page");
    document.getElementById(target).classList.add("active");
  });
});