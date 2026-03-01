import{S as q,a as w,i as c}from"./assets/vendor-C0Ak4rWs.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function m(e){const r=document.querySelector(".gallery"),n=e.map(({webformatURL:s,largeImageURL:t,tags:o,likes:i,views:b,comments:L,downloads:S})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${t}">
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
                <b>Views</b> ${b}
              </p>
              <p class="info-item">
                <b>Comments</b> ${L}
              </p>
              <p class="info-item">
                <b>Downloads</b> ${S}
              </p>
            </div>
          </li>`).join("");r.insertAdjacentHTML("beforeend",n),new q(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function v(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function y(){const e=document.querySelector(".loader");e&&e.classList.remove("hidden")}function u(){const e=document.querySelector(".loader");e&&e.classList.add("hidden")}function p(){const e=document.querySelector(".load-more-button");e&&e.classList.remove("hidden")}function d(){const e=document.querySelector(".load-more-button");e&&e.classList.add("hidden")}function $(e){const r=document.querySelector(".gallery");r.innerHTML=`<p class="not-found">No results found for "${e}". Please try again.</p>`}function M(){setTimeout(()=>{const e=document.querySelector(".gallery-item");if(!e)return;const r=e.getBoundingClientRect().height+48;window.scrollBy({top:r*2,behavior:"smooth"})},300)}async function g(e,r=1){const n=new URLSearchParams({key:"51578655-789f059cc57625b159c2f433b",q:e,image_type:"photo",per_page:9,page:r,orientation:"horizontal",safesearch:!0}),s="https://pixabay.com/api/";try{const t=await w(s,{params:n}),{hits:o,totalHits:i}=t.data;return{hits:o,totalHits:i}}catch(t){return c.error({title:"Error",message:`An error occurred: ${t.message}`,position:"topRight"}),{hits:[],totalHits:0}}}let a=1,l=0,h="";const f=document.querySelector(".form"),B=document.querySelector(".load-more-button");f.addEventListener("submit",async e=>{e.preventDefault(),a=1,l=0,v(),y();const r=document.querySelector('[name="search-text"]').value.trim();if(r===""){c.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"}),u();return}try{const n=await g(r,a);h=r,l=n.totalHits;const{hits:s}=n;if(s.length===0){$(r);return}m(s),l>9?p():d()}catch(n){c.error({title:"Error",message:`An error occurred: ${n.message}`,position:"topRight"})}finally{u(),f.reset()}});B.addEventListener("click",async()=>{a+=1,y(),d();try{const{hits:e}=await g(h,a);m(e),M()}catch(e){c.error({title:"Error",message:`An error occurred: ${e.message}`,position:"topRight"})}finally{if(a*9>=l){d(),c.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),u();return}u(),p()}});
//# sourceMappingURL=index.js.map
