import type {Metadata} from 'next';
import {Manrope,Inter} from 'next/font/google';
import './globals.css';
import {Header,Footer,WhatsappFloat} from '@/components/Site';
import {ScrollMotion} from '@/components/ScrollMotion';
const manrope=Manrope({subsets:['latin'],variable:'--font-heading',display:'swap'});
const inter=Inter({subsets:['latin'],variable:'--font-body',display:'swap'});
export const metadata:Metadata={title:{default:'LUFT Engenharia | Redesign Conceitual',template:'%s | LUFT Engenharia'},description:'Demonstração conceitual de um novo site para LUFT Engenharia e Energia Solar. Soluções fotovoltaicas e engenharia elétrica.',robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR" suppressHydrationWarning className={`${manrope.variable} ${inter.variable}`}><body><a href="#main" className="skip-link">Pular para conteúdo</a><Header/><main id="main">{children}</main><Footer/><WhatsappFloat/><ScrollMotion/></body></html>}
