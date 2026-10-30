'use client';
import {useState} from 'react';
import {showcases} from '@/lib/content';
import {ArrowUpRight} from 'lucide-react';
export function ProjectsGallery(){const [filter,setFilter]=useState('Todos');const filters=['Todos',...new Set(showcases.map(x=>x.kind))];const results=showcases.filter(x=>filter==='Todos'||x.kind===filter);return <><div className="filter-bar" aria-label="Filtrar aplicações">{filters.map(f=><button key={f} type="button" className={filter===f?'selected':''} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className="gallery-grid">{results.map((p,i)=><article key={p.id} className="gallery-item"><div className="gallery-photo" style={{backgroundImage:`url('${p.img}')`}}><span>IMAGEM ILUSTRATIVA</span></div><div className="gallery-caption"><div><span>{p.kind} / Exemplo de aplicação</span><h3>{p.name}</h3><p>{p.description}</p></div><span className="gallery-type">EXEMPLO</span></div></article>)}</div></>}
