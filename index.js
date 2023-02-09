const navBars = document.getElementById("nav-bars")

document.addEventListener("click", function(e) {
  if (e.target.id === "nav-bars" || e.target.id === "nav-bars-icon") {
    toggleMenu()
  }
})

function toggleMenu() {
  navBars.classList.toggle("hidden")
  document.getElementById("nav-menu").classList.toggle("flex")
}