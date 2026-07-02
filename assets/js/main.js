const input=document.querySelector('[data-search]');
if(input){input.addEventListener('input',()=>{const q=input.value.toLowerCase();document.querySelectorAll('[data-item]').forEach(el=>{el.style.display=el.innerText.toLowerCase().includes(q)?'':'none';});});}
