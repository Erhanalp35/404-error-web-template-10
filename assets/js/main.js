const root=document.documentElement;
const toggle=document.querySelector('.theme');
const key='meridian-theme';

function syncTheme(){const dark=root.dataset.theme==='dark';
toggle?.setAttribute('aria-pressed',String(dark));
if(toggle){toggle.lastElementChild.textContent=dark?'Light mode':'Dark mode';
toggle.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode')}}
toggle?.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';
try{localStorage.setItem(key,root.dataset.theme)}catch{}syncTheme()});

document.querySelectorAll('.back').forEach(button=>button.addEventListener('click',()=>{
  let hasUsefulReferrer=false;
  try{const previous=new URL(document.referrer);hasUsefulReferrer=previous.origin===location.origin&&previous.href!==location.href}catch{}
  if(hasUsefulReferrer)history.back();else location.href='/';
}));
syncTheme();
