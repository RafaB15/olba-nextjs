import Navbar from "@/components/navbar";
import InitialImage from "@/components/initial_image";
import Cards from "@/components/cards";
import InitialExplanation from "@/components/initial_explanation";

export default function Home() {
  return (
    <>
      <Navbar />
      <InitialImage />
      <Cards />
      <InitialExplanation />
    </>
  );
}
