/**
 * Tema: "moderno" (default, editorial dark) vs "2003" (CRT / scanlines / neon).
 * Persiste em localStorage como odisseia_theme.
 *
 * A aplicação inicial acontece inline no <head> pra evitar FOUC. Este script
 * só lida com o clique no botão + atualização dos rótulos.
 */
(function () {
  'use strict';

  var KEY = 'odisseia_theme';

  function getTheme() {
    try { return localStorage.getItem(KEY) === '2003' ? '2003' : 'modern'; }
    catch (e) { return 'modern'; }
  }

  function setTheme(theme) {
    try { localStorage.setItem(KEY, theme); } catch (e) {}
    var d = document.documentElement;
    if (theme === '2003') d.classList.add('theme-2003');
    else                  d.classList.remove('theme-2003');
    updateLabel(theme);
  }

  function updateLabel(theme) {
    var btn = document.getElementById('mode-toggle');
    if (!btn) return;
    var label = btn.querySelector('.mode-label');
    if (!label) return;
    var lang = document.documentElement.classList.contains('site-lang-en') ? 'en' : 'pt';
    if (theme === '2003') {
      label.textContent = lang === 'en' ? '2003' : '2003';
      btn.setAttribute('aria-pressed', 'true');
      btn.title = lang === 'en' ? 'Back to modern theme' : 'Voltar pro tema moderno';
    } else {
      label.textContent = lang === 'en' ? 'Modern' : 'Moderno';
      btn.setAttribute('aria-pressed', 'false');
      btn.title = lang === 'en' ? 'Try 2003 (CRT) theme' : 'Testar tema 2003 (CRT)';
    }
  }

  function init() {
    var btn = document.getElementById('mode-toggle');
    if (!btn) return;
    updateLabel(getTheme());
    btn.addEventListener('click', function () {
      setTheme(getTheme() === '2003' ? 'modern' : '2003');
    });
    // Reage a troca de idioma (lang-switcher.js dispara mudança de classes)
    window.addEventListener('storage', function (e) {
      if (e.key === 'siteLang') updateLabel(getTheme());
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
