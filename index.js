import{S as m,a as p,i as a}from"./assets/vendor-C0Ak4rWs.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();function y(r){const t=document.querySelector(".gallery"),n=r.map(({webformatURL:s,largeImageURL:e,tags:o,likes:i,views:u,comments:d,downloads:f})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${e}">
              <img
                class="gallery-image" width="360" height="200"
                src="${s}"
                alt="${o}"
              />
            </a>
            <div class="info-card">
              <p class="info-item">
                <b>Likes</b> ${i}
              </p>
              <p class="info-item">
                <b>Views</b> ${u}
              </p>
              <p class="info-item">
                <b>Comments</b> ${d}
              </p>
              <p class="info-item">
                <b>Downloads</b> ${f}
              </p>
            </div>
          </li>`).join("");t.insertAdjacentHTML("beforeend",n),new m(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function g(){const r=document.querySelector(".gallery");r&&(r.innerHTML="")}function h(){const r=document.querySelector(".loader");r&&r.classList.remove("hidden")}function c(){const r=document.querySelector(".loader");r&&r.classList.add("hidden")}function b(r){const t=document.querySelector(".gallery");t.innerHTML=`<p class="not-found">No results found for "${r}". Please try again.</p>`}function L(r){const t=new URLSearchParams({key:"51578655-789f059cc57625b159c2f433b",q:r,image_type:"photo",per_page:9,orientation:"horizontal",safesearch:!0});return p(`https://pixabay.com/api/?${t}`).then(s=>{const{hits:e}=s.data;return e}).catch(s=>(a.error({title:"Error",message:`An error occurred: ${s.message}`,position:"topRight"}),[]))}const l=document.querySelector(".form");l.addEventListener("submit",r=>{r.preventDefault(),g(),h();const t=document.querySelector('[name="search-text"]').value.trim();if(t===""){a.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"}),c();return}L(t).then(n=>{if(n.length===0){b(t);return}y(n)}).catch(n=>{a.error({title:"Error",message:`An error occurred: ${n.message}`,position:"topRight"})}).finally(()=>{c(),l.reset()})});
//# sourceMappingURL=index.js.map
