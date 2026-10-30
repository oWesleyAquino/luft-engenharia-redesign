export const whatsapp = 'https://wa.me/5555984034376?text='+encodeURIComponent('Olá! Gostaria de saber mais sobre as soluções da LUFT Engenharia e solicitar informações sobre um orçamento.');
export const image = {
 hero:'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2200&q=85',
 solar:'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=85',
 field:'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=85',
 roof:'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=1200&q=85',
 technical:'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85',
 industrial:'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=85',
 sun:'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85'
};
export const services = [
 {id:'solar',category:'Energia solar',number:'01',title:'Energia solar fotovoltaica',desc:'Soluções de geração distribuída para residências, empresas e propriedades rurais, do dimensionamento à instalação.',img:image.solar,icon:'sun'},
 {id:'instalacao',category:'Energia solar',number:'02',title:'Instalação e manutenção',desc:'Instalação de sistemas fotovoltaicos, manutenção de usinas e acompanhamento de seu desempenho.',img:image.roof,icon:'wrench'},
 {id:'projetos-eletricos',category:'Engenharia elétrica',number:'03',title:'Projetos elétricos',desc:'Planejamento técnico de instalações para residências, edifícios, estabelecimentos comerciais e indústrias.',img:image.technical,icon:'zap'},
 {id:'spda',category:'Engenharia elétrica',number:'04',title:'SPDA e laudos',desc:'Gerenciamento de riscos, projetos, vistorias e laudos de sistemas de proteção contra descargas atmosféricas.',img:image.industrial,icon:'shield'},
 {id:'subestacoes',category:'Engenharia elétrica',number:'05',title:'Subestações',desc:'Projetos de entradas de média tensão e estudos de coordenação e seletividade.',img:image.field,icon:'building'},
 {id:'fotovoltaicos',category:'Engenharia elétrica',number:'06',title:'Projetos fotovoltaicos',desc:'Dimensionamento e projeto de usinas para processos de aprovação junto à concessionária.',img:image.sun,icon:'sun'}
];
export const showcases = [
 {id:'residencial',kind:'Residencial',name:'Energia solar para residências',img:image.roof,description:'Uma solução fotovoltaica dimensionada conforme o perfil de consumo da residência.'},
 {id:'empresarial',kind:'Empresarial',name:'Energia solar para negócios',img:image.solar,description:'Planejamento de geração solar para operações que buscam maior eficiência energética.'},
 {id:'rural',kind:'Rural',name:'Energia solar no campo',img:image.field,description:'Aplicações fotovoltaicas voltadas às necessidades de propriedades e atividades rurais.'},
 {id:'engenharia',kind:'Engenharia elétrica',name:'Projetos e infraestrutura elétrica',img:image.technical,description:'Planejamento e estudos técnicos para diferentes necessidades elétricas.'}
];
