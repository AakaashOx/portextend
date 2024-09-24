
window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight

  console.log(Math.min(percentOfScreenHeightScrolled * 100, 150))

  htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 150))

  const threeDScrollValue = Math.min(percentOfScreenHeightScrolled * 150, 150);
  htmlElement.style.setProperty("--3dscroll", threeDScrollValue);
}

setScrollVar()

const observer = new IntersectionObserver(entries => {
  for (let i = entries.length - 1; i >= 0; i--) {
    const entry = entries[i]
    if (entry.isIntersecting) {
      document.querySelectorAll("[data-img]").forEach(img => {
        img.classList.remove("show")
      })
      const img = document.querySelector(entry.target.dataset.imgToShow)
      img?.classList.add("show")
      break
    }
  }
})

document.querySelectorAll("[data-img-to-show]").forEach(section => {
  observer.observe(section)
})