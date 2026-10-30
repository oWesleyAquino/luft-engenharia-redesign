'use client';
import {useEffect} from 'react';
export function ScrollMotion(){
 useEffect(()=>{
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const selector='.value-card, .solution-card, .gallery-item, .contact-details>a, .contact-address, .sim-form, .sim-results, .photo-block, .insight-item';
  const elements=Array.from(document.querySelectorAll<HTMLElement>(selector));
  if(!('IntersectionObserver' in window))return;
  elements.forEach(el=>el.classList.add('scroll-motion-target'));
  const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('motion-visible');observer.unobserve(entry.target)}})
  },{threshold:.08,rootMargin:'0px 0px -25px 0px'});
  elements.forEach(el=>observer.observe(el));
  return()=>{observer.disconnect();elements.forEach(el=>el.classList.remove('scroll-motion-target','motion-visible'))};
 },[]);
 return null;
}
