(function(){
  var root = document.documentElement;
  var saved = localStorage.getItem('ch_lang');
  if(saved === 'ru' || saved === 'en'){
    root.setAttribute('data-lang', saved);
  }

  function reflect(){
    var lang = root.getAttribute('data-lang') || 'ru';
    document.querySelectorAll('[data-lang-btn]').forEach(function(btn){
      btn.setAttribute('data-active', btn.getAttribute('data-lang-btn') === lang ? 'true' : 'false');
    });
    document.title = lang === 'en'
      ? (document.title.match(/\| .*/) ? document.title.replace(/^.*\|/, '').trim() : document.title)
      : document.title;
  }

  document.querySelectorAll('[data-lang-btn]').forEach(function(btn){
    btn.addEventListener('click', function(){
      var lang = btn.getAttribute('data-lang-btn');
      root.setAttribute('data-lang', lang);
      localStorage.setItem('ch_lang', lang);
      reflect();
    });
  });
  reflect();

  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.primary-nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }
})();
