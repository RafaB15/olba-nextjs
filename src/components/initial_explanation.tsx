import Image from "next/image";

const InitialExplanation = () => {
    return (
        <div className="bg-black py-8">
            <div className="flex flex-col md:flex-row items-center justify-center md:px-16 relative">
                <div className="relative">
                    <Image src="/explanation_image.jpg" alt="" width={600} height={500} className="object-cover" />
                    <div className="absolute inset-0 bg-gray-800 opacity-50 w-1/2"></div>
                    <p className="absolute inset-0 flex items-center justify-center text-white text-2xl w-1/2 px-2">
                        Los brackets se posicionan en las caras internas de los dientes. ¡Totalmente invisibles!
                    </p>
                </div>
            </div>
        </div>
    )
};

export default InitialExplanation;