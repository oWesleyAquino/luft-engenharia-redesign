import type {Metadata} from 'next';
import {PageHero,SectionHead,SectionCTA} from '@/components/Site';
import {ProjectsGallery} from '@/components/Projects';
import {image} from '@/lib/content';
export const metadata:Metadata={title:'Projetos e aplicações'};
export default function Projetos(){return <><PageHero eyebrow="APLICAÇÕES E POSSIBILIDADES" title="Energia para diferentes realidades." desc="Uma apresentação visual de aplicações possíveis. Fotografias ilustrativas: este protótipo não atribui obras específicas à LUFT sem documentação." img={image.field}/><section id="conteudo" className="section section-light"><div className="container"><SectionHead eyebrow="EXPLORAR APLICAÇÕES" title="Cada contexto exige uma solução." desc="Selecione um segmento para explorar os exemplos demonstrativos. Um portfólio de obras reais poderá substituir esta galeria quando as informações forem disponibilizadas."/><ProjectsGallery/></div></section><SectionCTA/></>}
