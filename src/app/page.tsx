import Navbar from "@/components/navbar";
import InitialImage from "@/components/initial_image";
import Cards from "@/components/cards";
import Ventajas from "@/components/ventajas";
import PreguntasFrecuentes from "@/components/preguntas_frecuentes";
import Tratamiento from "@/components/tratamiento";

export default function Home() {
  return (
    <>
      <Navbar />
      <InitialImage />
      <Cards />
      <Ventajas />
      <Tratamiento />
      <PreguntasFrecuentes />
    </>
  );
}
