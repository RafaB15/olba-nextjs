import Image from "next/image";

const InitialExplanation = () => {
    return (
        <div className="bg-black py-8">
            <div className="flex flex-col md:flex-row items-center justify-center md:px-16 relative">
                <div className="relative">
                    <Image src="/explanation_image.jpg" alt="" width={600} height={500} className="object-cover rounded-lg shadow-lg" />
                    <p className="absolute inset-0 flex items-center justify-center text-white text-2xl w-1/2 px-4 py-2 bg-black bg-opacity-80 rounded-lg font-bold">
                        Los brackets se posicionan en las caras internas de los dientes. ¡Totalmente invisibles!
                    </p>
                </div>
            </div>
        </div>
    )
};

export default InitialExplanation;