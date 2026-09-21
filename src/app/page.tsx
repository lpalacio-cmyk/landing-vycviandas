import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Platos } from "@/components/Platos";
import { Planes } from "@/components/Planes";
import { ComoFunciona } from "@/components/ComoFunciona";
import { Diferenciales } from "@/components/Diferenciales";
import { Entrega } from "@/components/Entrega";
import { Empresas } from "@/components/Empresas";
import { Testimonios } from "@/components/Testimonios";
import { Faq } from "@/components/Faq";
import { Cierre } from "@/components/Cierre";
import { Pie } from "@/components/Pie";
import { BotonWhatsapp } from "@/components/BotonWhatsapp";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Platos />
        <Planes />
        <ComoFunciona />
        <Diferenciales />
        <Entrega />
        <Empresas />
        <Testimonios />
        <Faq />
        <Cierre />
      </main>
      <Pie />
      <BotonWhatsapp />
    </>
  );
}
