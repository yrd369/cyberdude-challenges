(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i=document.getElementById("card");document.getElementById("name");document.getElementById("location");document.getElementById("btn");const l=["esakki2104prsnl","vk2401","suriyamassmsd","riyaz1000","hema-venkat3","yrd369","mushkir","bearcin46","dineshdevelope","jeya-rosini","swethadsalvatore","mshajid","muthuakalya","vedhatech002","danielace1","sharif-22","gayathrihg","kishorekumar-kp","muthukumarimoorthi"];function c(r){const o=new XMLHttpRequest;o.onload=function(){const s=JSON.parse(o.responseText);console.log(s.login);const n=document.createElement("div");n.innerHTML=` <div class="bg-[#F8F8FA] w-fit px-6 py-8 rounded shadow-md">
    <div class="flex items-center">
      <img src=${s.avatar_url} class="w-16 rounded-full">
      <div class="px-3">
        <p class="font-semibold" id="name">${s.name}</p>
        <p class="text-[#9A9A9E] text-sm">Full Stack Developer</p>
      </div>
    </div>
    <div class="space-x-3 mt-3">
      <button class="bg-[#EEEBED] text-[#7760EF] px-3 py-0.5 rounded text-sm font-semibold">Developer</button>
      <button class="bg-[#EEEBED] text-[#7760EF] px-3 py-0.5 rounded text-sm font-semibold">Management</button>
    </div>
    <div class="mt-3 space-y-2">
      <p class="text-sm font-medium">Location: <span class="text-sm font-normal">${s.location}</span></p>
      <div class = "flex space-x-2">
      <p class="text-sm font-medium">Followers: <span class="text-sm font-normal">${s.followers}</span></p>
      <p class="text-sm font-medium">Following: <span class="text-sm font-normal">${s.following}</span></p>
      </div>
      <div class="bg-[#EEEBED] text-[#000] px-3 py-0.5 rounded w-full text-center" for="btn">
      <a class="text-sm font-medium cursor-pointer" id="btn" href="https://github.com/${s.login}?tab=repositories" >Repository</a>
      </div>
    </div>
  </div>`,i.append(n)},o.open("GET",`https://api.github.com/users/${r}`),o.send()}l.forEach(r=>{c(r)});
