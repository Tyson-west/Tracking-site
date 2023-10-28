const tBtn = document.getElementById("t-btn")
tBtn.addEventListener("click", toggleNavigation)
function toggleNavigation() {
        const nav = document.querySelector(".navigation");
        nav.classList.toggle("show");
        tBtn.innerHTML = " &#x1F5D9;"
      }