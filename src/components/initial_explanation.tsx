import Image from "next/image";

const InitialExplanation = () => {
    return (
        <div className="bg-black">
            <div className="flex items-center justify-center py-4">
                <h1 className="text-orange-600 text-2xl sm:text-3xl md:text-4xl font-bold">
                    Un tratamiento que no oculta tu sonrisa
                </h1>
            </div>
            <div className="flex flex-col md:flex-row">
                <p>En Ortodoncia Lingual Buenos Aires nos dedicamos a la corrección de la posición de los dientes mediante la ortodoncia lingual.</p>
                <Image src="/explanation_image.jpg" alt="" width={300} height={250} />
            </div>
        </div>
    )
};

export default InitialExplanation;