import type {Metadata} from 'next';
import {PageHero,SectionCTA} from '@/components/Site';
import {Simulator} from '@/components/Simulator';
import {image} from '@/lib/content';
import {InfoAccordion} from '@/components/InfoAccordion';
export const metadata:Metadata={title:'Simulador solar'};
export default function Simulador(){return <><PageHero eyebrow="FAÇA UMA ESTIMATIVA" title="Transforme possibilidades em números." desc="Um simulador interativo para explorar o retorno potencial de um sistema fotovoltaico, com hipóteses ajustáveis e resultados indicativos." img={image.sun}/><Simulator/><InfoAccordion eyebrow="ENTENDA OS RESULTADOS" title="Como interpretar a estimativa?" items={[
 {title:'O retorno estimado é garantido?',description:'Não. O cálculo é uma simulação simplificada baseada nos dados informados. Um estudo técnico-econômico completo considera tributos, tarifas, custos operacionais, manutenção e outras condições.'},
 {title:'A geração solar elimina toda a conta de luz?',description:'Não necessariamente. Consumidores conectados à rede podem continuar sujeitos a cobranças e encargos, além de regras de compensação que variam conforme o enquadramento.'},
 {title:'Como obter uma proposta específica?',description:'Uma proposta deve considerar histórico de consumo, local de instalação, características dos equipamentos e avaliação técnica profissional.'}
 ]} cta={{label:'Falar com a LUFT',href:'/contato'}}/><SectionCTA/></>}
