const InitialImage = () => {
    return (
        <div className="relative h-[65vh] flex items-center justify-center text-center bg-black bg-fixed bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/initial_image.jpg)` }}>
            <div className="container mx-auto px-4">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>Excelencia en Ortodoncia Lingual</h1>
                <div className="my-4"></div>
                <p className="text-white text-xl sm:text-2xl md:text-3xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>La verdadera ortodoncia invisible</p>
            </div>
        </div>
    )
};

export default InitialImage;