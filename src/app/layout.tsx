import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';
import './immersion.css';
import './creative.css';
import Script from 'next/script';
import {Header,Footer,WhatsappFloat} from '@/components/Site';
import {ScrollMotion} from '@/components/ScrollMotion';
const manrope=localFont({src:[
 {path:'../../public/fonts/manrope-latin-400-normal.woff2',weight:'400'},
 {path:'../../public/fonts/manrope-latin-500-normal.woff2',weight:'500'},
 {path:'../../public/fonts/manrope-latin-600-normal.woff2',weight:'600'},
 {path:'../../public/fonts/manrope-latin-700-normal.woff2',weight:'700'},
 {path:'../../public/fonts/manrope-latin-800-normal.woff2',weight:'800'},
],variable:'--font-heading',display:'swap'});
const inter=localFont({src:'../../public/fonts/inter-latin-wght-normal.woff2',weight:'100 900',variable:'--font-body',display:'swap'});
export const metadata:Metadata={title:{default:'LUFT Engenharia | Redesign Conceitual',template:'%s | LUFT Engenharia'},description:'Demonstração conceitual de um novo site para LUFT Engenharia e Energia Solar. Soluções fotovoltaicas e engenharia elétrica.',robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR" suppressHydrationWarning className={`${manrope.variable} ${inter.variable}`}><body><a href="#main" className="skip-link">Pular para conteúdo</a><Header/><main id="main">{children}</main><Footer/><WhatsappFloat/><ScrollMotion/><Script src="/immersion.js" strategy="afterInteractive"/></body></html>}
