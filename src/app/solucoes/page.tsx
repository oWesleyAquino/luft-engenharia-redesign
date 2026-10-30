import type {Metadata} from 'next';
import {PageHero,SectionHead,SectionCTA,ButtonLink} from '@/components/Site';
import {services,image,whatsapp} from '@/lib/content';
import {ArrowUpRight} from 'lucide-react';
import {InfoAccordion} from '@/components/InfoAccordion';
export const metadata:Metadata={title:'Soluções'};
export default function Solucoes(){return <><PageHero eyebrow="O QUE FAZEMOS" title="Soluções para gerar, projetar e proteger." desc="Energia solar fotovoltaica e engenharia elétrica para diferentes necessidades e escalas de projeto." img={image.roof}/><section className="section section-light" id="conteudo"><div className="container"><SectionHead eyebrow="ÁREAS DE ATUAÇÃO" title="Serviços da LUFT Engenharia." desc="Informações baseadas nas áreas de serviço divulgadas no site institucional da empresa."/><div className="solutions-grid">{services.map(s=><article className="solution-card" key={s.id} id={s.id}><div className="solution-image" style={{backgroundImage:`url('${s.img}')`}}><span>Imagem ilustrativa</span></div><div className="solution-body"><span>{s.category} / {s.number}</span><h3>{s.title}</h3><p>{s.desc}</p><a href={whatsapp} target="_blank" rel="noopener noreferrer">Consultar solução <ArrowUpRight size={19}/></a></div></article>)}</div></div></section><InfoAccordion eyebrow="ORIENTAÇÃO TÉCNICA" title="Encontre o caminho para seu projeto." items={[
 {title:'Energia solar residencial ou empresarial?',description:'O estudo depende da demanda, do local e das características de uso da energia. Diferentes perfis de consumo pedem soluções e avaliações distintas.'},
 {title:'Quando procurar projetos elétricos e SPDA?',description:'O escopo é definido pelas características da edificação, pela instalação existente e pelos requisitos normativos aplicáveis. Um profissional habilitado deve analisar cada caso.'},
 {title:'Como solicitar uma avaliação?',description:'Entre em contato com a equipe informando o tipo de imóvel ou empreendimento, a localização e a necessidade principal. A análise técnica definirá as próximas etapas.'}
 ]} cta={{label:'Solicitar informações',href:'/contato'}}/><SectionCTA/></>}
