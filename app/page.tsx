import Header from "@/components/header";
import Hero from "@/components/hero";
import Proposta from "@/components/proposta";
import Objetivos from "@/components/objetivos";
import Equipe from "@/components/equipe";
import ComoFunciona from "@/components/como-funciona";
import AreasDeCuidado from "@/components/areas-de-cuidado";
import Instituto from "@/components/instituto";
import Avaliacoes from "@/components/avaliacoes";
import Conteudo from "@/components/conteudo";
import Faq from "@/components/faq";
import Localizacao from "@/components/localizacao";
import CtaFinal from "@/components/cta-final";
import Footer from "@/components/footer";
import WhatsappButton from "@/components/whatsapp-button";
import ContactPopup from "@/components/contact-popup";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Avaliacoes />
        <Proposta />
        <Objetivos />
        <Equipe />
        <ComoFunciona />
        <AreasDeCuidado />
        <Instituto />
        <Conteudo />
        <Faq />
        <Localizacao />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsappButton />
      <ContactPopup />
    </>
  );
}
