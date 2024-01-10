const cardEl = document.getElementById("card");
const nameEl = document.getElementById("name");
const locatioEl = document.getElementById("location");
const btnEl = document.getElementById("btn");
const dataBase = [
  "esakki2104prsnl",
  "vk2401",
  "suriyamassmsd",
  "riyaz1000",
  "hema-venkat3",
  "yrd369",
  "mushkir",
  "bearcin46",
  "dineshdevelope",
  "jeya-rosini",
  "swethadsalvatore",
  "mshajid",
  "muthuakalya",
  "vedhatech002",
  "danielace1",
  "sharif-22",
  "gayathrihg",
  "kishorekumar-kp",
  "muthukumarimoorthi",
];

function display(val) {
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    const data = JSON.parse(xhr.responseText);
    const div = document.createElement("div");
    div.innerHTML = ` <div class="bg-[#F8F8FA] w-fit px-6 py-5">
    <div class="flex items-center">
      <img src=${data.avatar_url} class="w-16 rounded-full">
      <div class="px-3">
        <p class="font-semibold" id="name">${data.name}</p>
        <p class="text-[#9A9A9E] text-sm">Full Stack Developer</p>
      </div>
    </div>
    <div class="space-x-3 mt-3">
      <button class="bg-[#EEEBED] text-[#7760EF] px-3 py-0.5 rounded text-sm font-semibold">Developer</button>
      <button class="bg-[#EEEBED] text-[#7760EF] px-3 py-0.5 rounded text-sm font-semibold">Management</button>
    </div>
    <div class="mt-3 space-y-2">
      <p class="text-sm font-medium">Location: <span class="text-sm font-normal">${data.location}</span></p>
      <div class = "flex space-x-2">
      <p class="text-sm font-medium">Followers: <span class="text-sm font-normal">${data.followers}</span></p>
      <p class="text-sm font-medium">Following: <span class="text-sm font-normal">${data.following}</span></p>
      </div>
      <button class="text-sm font-medium bg-[#EEEBED] text-[#000] px-3 py-0.5 rounded w-full" id="btn" href="https://github.com/${data.login}?tab=repositories">Repository</button>
    </div>
  </div>`;
    cardEl.append(div);
  };
  xhr.open("GET", `https://api.github.com/users/${val}`);
  xhr.send();
}
dataBase.forEach((val1) => {
  display(val1);
});
