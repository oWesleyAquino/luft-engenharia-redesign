/* Progresso nativo: nenhuma interceptacao de scroll, rede ou armazenamento. */
(() => {
  'use strict';
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const tracked = new Set(), visible = new Set();
  let frame = 0, syncing = false;
  const clamp = n => Math.max(0, Math.min(1, n));
  const disabled = () => preference.matches || document.body.classList.contains('is-paused');
  const reset = el => {
    el.classList.remove('motion-ready');
    for (const key of ['--p','--a','--b','--c','--local','--preview-travel','--image-travel']) el.style.removeProperty(key);
    delete el.dataset.sceneState;
  };
  function paint() {
    frame = 0;
    if (disabled()) return;
    const height = innerHeight;
    const samples = [...tracked].filter(el => el.isConnected && (visible.has(el) || el.hasAttribute('data-scroll-scene'))).map(el => {
      const rect = el.getBoundingClientRect();
      const offset = Number(el.dataset.sceneOffset || (innerWidth < 760 ? 72 : 112));
      const local = el.hasAttribute('data-scroll-element');
      const p = clamp(local ? (height - rect.top) / (height + rect.height) :
        el.dataset.sceneMode === 'exit' ? -rect.top / Math.max(1,rect.height) :
        (offset - rect.top) / Math.max(1,rect.height - height + offset));
      const windowEl=el.querySelector('.case-image-window');const image=windowEl?.querySelector('img');const travel=image?Math.max(0,image.getBoundingClientRect().height-windowEl.getBoundingClientRect().height):0;return {el,p,local,travel};
    });
    for (const {el,p,local,travel} of samples) {
      el.style.setProperty(local ? '--local' : '--p',p.toFixed(5));
      if (!local) {
        el.style.setProperty('--a',String(Math.max(0,1-p*2)));
        el.style.setProperty('--b',String(1-Math.abs(p*2-1)));
        el.style.setProperty('--c',String(Math.max(0,p*2-1)));
        el.style.setProperty('--image-travel',travel+'px');el.dataset.sceneState = p < .333 ? 'inicio' : p < .667 ? 'meio' : 'fim';
      }
    }
  }
  function schedule() { if (!frame && !disabled()) frame = requestAnimationFrame(paint); }
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {if(entry.isIntersecting) visible.add(entry.target); else visible.delete(entry.target);}
    schedule();
  }, {rootMargin:'200px'});
  function sync() {
    syncing = false;
    for (const el of tracked) if (!el.isConnected) {observer.unobserve(el);tracked.delete(el);visible.delete(el);}
    for (const el of document.querySelectorAll('[data-scroll-scene],[data-scroll-element]')) {
      if (!tracked.has(el)) {tracked.add(el);observer.observe(el);visible.add(el);}
      if (disabled()) reset(el); else el.classList.add('motion-ready');
    }
    schedule();
  }
  function requestSync() { if (!syncing) {syncing = true;queueMicrotask(sync);} }
  const mutations = new MutationObserver(requestSync);
  mutations.observe(document.body,{childList:true,subtree:true});
  const pause = new MutationObserver(sync);pause.observe(document.body,{attributes:true,attributeFilter:['class']});
  addEventListener('scroll',schedule,{passive:true});
  addEventListener('resize',schedule,{passive:true});
  document.addEventListener('load',schedule,true);
  preference.addEventListener('change',sync);
  document.fonts?.ready.then(schedule);
  sync();
  addEventListener('pagehide',event => {
    if(event.persisted) return;
    cancelAnimationFrame(frame);observer.disconnect();mutations.disconnect();pause.disconnect();
    removeEventListener('scroll',schedule);removeEventListener('resize',schedule);
    document.removeEventListener('load',schedule,true);preference.removeEventListener('change',sync);
    tracked.forEach(reset);
  });
})();
