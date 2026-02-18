/**
 * Inicializa AdSense apenas para os <ins> que estão dentro de tevisões (data-ad-container="tevisao").
 * Todos os nossos anúncios são colocados só em .ad-tv-screen, então um push processa só eles.
 */
(function () {
  'use strict';

  function runPush() {
    var ins = document.querySelectorAll('[data-ad-container="tevisao"] .adsbygoogle');
    if (!ins.length) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runPush);
  } else {
    runPush();
  }
})();
