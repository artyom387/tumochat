document.addEventListener('mousemove', parallax);
function parallax(e) {
   this.querySelectorAll('.layer').forEach(layer => {
      const speed = layer.getAttribute('data-speed');

      const x = (window.innerWidth - e.pageX * (speed / 3)) / 100;
      const y = (window.innerHeight - e.pageY * (speed / 3)) / 100;
      layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
   });
}



const select = document.querySelector('select');
const allLang = ['hy', 'en'];

select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
   let lang = select.value;
   location.href = window.location.pathname + '#' + lang;
   location.reload();
}

function changeLanguage() {
   let hash = window.location.hash;
   hash = hash.substr(1);
   console.log(hash);
   if (!allLang.includes(hash)) {
      location.href = window.location.pathname + '#hy';
      location.reload();
   }
   select.value = hash;
   for (let key in langArr) {
      let elem = document.querySelector('.lang_' + key);
      if (elem) {
         elem.innerHTML = langArr[key][hash];
      }
   }
}

changeLanguage();