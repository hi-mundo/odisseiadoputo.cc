/**
 * Idioma do site: PT (original) ou EN.
 * Persiste em localStorage e aplica classe no html para mostrar/ocultar blocos .lang-pt e .lang-en.
 */
(function () {
  'use strict';

  var KEY = 'siteLang';
  var CLASS = 'site-lang-en';

  function getLang() {
    try {
      return localStorage.getItem(KEY) || 'pt';
    } catch (e) {
      return 'pt';
    }
  }

  function setLang(lang) {
    try {
      localStorage.setItem(KEY, lang);
    } catch (e) {}
    var html = document.documentElement;
    html.setAttribute('lang', lang === 'en' ? 'en' : 'pt');
    if (lang === 'en') {
      html.classList.add(CLASS);
    } else {
      html.classList.remove(CLASS);
    }
    updateButtons(lang);
    updateNavLabels(lang);
  }

  function updateButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  function updateNavLabels(lang) {
    document.querySelectorAll('[data-pt][data-en]').forEach(function (el) {
      var en = el.getAttribute('data-en');
      var pt = el.getAttribute('data-pt');
      if (lang === 'en' && en) {
        el.textContent = en;
      } else if (pt) {
        el.textContent = pt;
      }
    });
  }

  function init() {
    var lang = getLang();
    setLang(lang);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
