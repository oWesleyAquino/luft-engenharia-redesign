'use client';
import {ChevronDown, ArrowUpRight} from 'lucide-react';
import Link from 'next/link';

type Item = {title:string;description:string};
export function InfoAccordion({eyebrow,title,items,cta}:{eyebrow:string;title:string;items:Item[];cta?:{label:string;href:string}}){
 return <section className="section insight-section"><div className="container insight-layout">
  <div className="insight-intro"><span className="eyebrow"><span className="eyebrow-line"/>{eyebrow}</span><h2>{title}</h2><p>Explore os detalhes conforme sua necessidade. As informações são orientativas e não substituem uma avaliação técnica individual.</p>{cta&&<Link className="text-link insight-link" href={cta.href}>{cta.label}<ArrowUpRight size={18}/></Link>}</div>
  <div className="insight-list">{items.map((item,i)=><details className="insight-item" key={item.title} name="luft-info"><summary><span className="insight-number">0{i+1}</span><span>{item.title}</span><ChevronDown className="insight-chevron" size={20}/></summary><div className="insight-description">{item.description}</div></details>)}</div>
 </div></section>
}
