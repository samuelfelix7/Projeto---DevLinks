function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "foto de Samuel Felix de óculos, sério, preto e branco"
    )
  } else {
    // se tiver sem light mode, adicionar imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "foto de Samuel Felix de óculos, sério")
  }
}
