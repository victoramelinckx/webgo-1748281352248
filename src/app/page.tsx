
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Digitaliza tus Ventas en 24 Horas" subheadline="Ayudamos a dueños de pequeños negocios a vender online eficientemente, ofreciendo un sitio web de ventas y soporte 24/7" cta1="Inicia Hoy" />
<How step1Title="Contacta a WebGo" step1Desc="Rellena un formulario con la información de tu negocio." step2Title="Digitalizamos tus ventas" step2Desc="Construimos tu web de ventas en menos de 24 horas." step3Title="Ventas en línea" step3Desc="Aumenta tus ventas online con soporte disponible 24/7." />
<Aboutus headline="WebGo: Digitalizando Negocios Locales Eficazmente" subheadline="Transformamos tu negocio en digital, generando ventas online sin que pierdas tiempo." beneficiotitulo1="Ventas 24/7" beneficio1="Tu negocio disponible siempre, generando ventas." beneficiotitulo2="Gestión Sin Esfuerzo" beneficio2="Nosotros manejamos tu sitio, tú relájate." />
<Services heading="Digitaliza tus ventas y multiplica tus ingresos" description="En WebGo, facilitamos tu transición al mundo digital, liberando tu tiempo y generando ventas online efectivas." services={[{"name":"Diseño Web Express","icon":"flash","description":"Obtén tu sitio web de ventas en menos de 24 horas."},{"name":"Soporte 24/7","icon":"clock","description":"Asistencia continua para mantener tu sitio funcionando perfectamente."},{"name":"Optimización SEO","icon":"search","description":"Aseguramos que tu sitio sea fácil de encontrar en Google."},{"name":"Formación Online","icon":"graduation-cap","description":"Aprende a gestionar tu sitio web de ventas sin complicaciones."},{"name":"Analítica Web","icon":"chart-bar","description":"Entiende a tus clientes y sus comportamientos en tu sitio."},{"name":"Gestión de Redes Sociales","icon":"comments","description":"Aumenta tu presencia y ventas en las redes sociales."}]} />
<BeforeAndAfter subheadline="Exhibiendo impresionantes transformaciones realizadas por el talentoso equipo de WebGo" />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mis ventas?","respuesta":"WebGo ofrece soluciones digitales efectivas, diseñadas especialmente para pequeñas empresas. Nos encargamos de construir un sitio web optimizado para SEO, que atraerá más visitantes y convertirá a esos visitantes en clientes. No necesitas preocuparte por el tiempo o la experiencia técnica, nosotros nos encargamos de todo."},{"pregunta":"¿Cómo WebGo puede generar ventas online para mi negocio?","respuesta":"WebGo utiliza estrategias de marketing digital efectivas y probadas. Aprovechamos las palabras clave relacionadas con tu negocio para atraer a los clientes adecuados. También configuramos un proceso de compra fácil para asegurar que los visitantes puedan comprar tus productos o servicios de manera rápida y sencilla."},{"pregunta":"¿Necesito tener conocimientos técnicos para trabajar con WebGo?","respuesta":"No, no necesitas tener ningún conocimiento técnico para trabajar con nosotros. Nuestro equipo de expertos se encargará de todo el proceso, desde la creación del sitio web hasta la gestión del SEO y el marketing digital. Tú solo tienes que concentrarte en tu negocio."},{"pregunta":"¿Cuánto tiempo necesitaré dedicar a mi sitio web si trabajo con WebGo?","respuesta":"WebGo está diseñado para ahorrar tiempo a los dueños de pequeñas empresas. Una vez que tu sitio web esté configurado, nuestro equipo se encargará de la gestión y el mantenimiento diario. Esto significa que puedes enfocarte en lo que mejor sabes hacer: dirigir tu negocio."},{"pregunta":"¿Qué beneficios ofrece WebGo frente a otras soluciones de ventas en línea?","respuesta":"WebGo ofrece una solución integral que incluye diseño de sitios web, SEO y estrategias de marketing digital. A diferencia de otras soluciones, nos enfocamos específicamente en pequeñas empresas, entendiendo sus desafíos y necesidades únicas. Nuestro objetivo es ayudarte a aumentar tus ventas en línea sin la necesidad de contratar a un equipo técnico propio."}]} />
<BookAppointment heading="Digitaliza Tu Negocio, Multiplica Tus Ventas" description="Transforma tus recomendaciones en ventas online constantes con WebGo. Hacemos fácil la digitalización para dueños de negocio ocupados como tú." />
<Footer />
    </main>
  );
}
