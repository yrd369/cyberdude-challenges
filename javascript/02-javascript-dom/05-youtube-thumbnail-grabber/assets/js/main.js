const linkEl = document.getElementById("link");
const formEl = document.getElementById("form");
const imgEl = document.getElementById("img")
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const videoId = linkEl.value.split("v=")[1];
  let imageUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
  imgEl.setAttribute("src",imageUrl)
});
