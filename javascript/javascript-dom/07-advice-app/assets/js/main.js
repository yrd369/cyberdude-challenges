const blockQuoteEl = document.querySelector("blockquote");
const refresbtnEl = document.querySelector("button");
const api_Url = "https://api.adviceslip.com/advice";

// btn
refresbtnEl.style.display = "none"
refresbtnEl.addEventListener("click", () => {
  window.location.href = "/";
});

// call the API
async function getAdvice() {
  try {
    const response = await fetch(api_Url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("some network issue: ", error);
  }
}
const adviceData = await getAdvice();
blockQuoteEl.textContent = adviceData.slip.advice;

// btn
refresbtnEl.style.display = "block"