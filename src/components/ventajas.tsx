import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Gem, Eye } from 'lucide-react';

import Image from "next/image";

export default function Ventajas() {
    return (
        <div className="bg-black py-8">
            <div className="flex items-center justify-center py-14">
                <h1 className="text-orange-600 text-4xl md:text-5xl font-bold text-center">
                    Ventajas
                </h1>
            </div>

            <div className="flex flex-col md:flex-row justify-between px-4 md:px-16 md:space-x-10 space-y-5 md:space-y-0">

                <Card className="bg-orange-600 border-none">
                    <CardHeader>
                        <Gem color="#000000" size={72} />
                        <CardTitle className="text-3xl text-black">
                            Es estética
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-black text-md">
                        <div className="list-disc ml-4">
                            <li>Es prácticamente invisible</li>
                            <li>Más comodidad y seguridad en ámbitos sociales y laborales</li>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-orange-600 border-none">
                    <CardHeader>
                        <Image alt="tooth" src="/tooth_black.svg" width={72} height={72} />
                        <CardTitle className="text-3xl text-black">
                            Es conservadora
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-black text-md">
                        <div className="list-disc ml-4">
                            <li>No se adhieren brackets en las superficies visibles de los dientes.</li>
                            <li>El esmalte dentario se preserva y se evita el riesgo de micro fracturas al retirar los aparatos al final del tratamiento</li>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-orange-600 border-none">
                    <CardHeader>
                        <Eye color="#000000" size={72} />
                        <CardTitle className="text-3xl text-black">
                            Se aprecian mejor los resultados
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-black text-md">
                        <div className="list-disc ml-4">
                            <li>El progreso del tratamiento se puede apreciar de una forma más directa.</li>
                            <li>No existen aparatos por fuera que interfieran con la visión o inflen los labios.</li>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex flex-col md:flex-row justify-between px-4 md:px-16 py-8 md:space-x-10 space-y-5 md:space-y-0">

                <Card className="bg-orange-600 border-none">
                    <CardHeader>
                        <Image alt="football" src="/football.svg" width={72} height={72} />
                        <CardTitle className="text-3xl text-black">
                            Es segura para hacer deporte
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-black text-md">
                        <div className="list-disc ml-4">
                            <li>No hay aparatos entre los dientes y los labios.</li>
                            <li>Cualquier impacto sobre los labios no despegará los brackets ni producirá heridas por el aplastamiento contra estos.</li>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-orange-600 border-none">
                    <CardHeader>
                        <Image alt="tooth" src="/tooth_black_shiningv1.svg" width={72} height={72} />
                        <CardTitle className="text-3xl text-black">
                            Riesgo de caries bajísimo
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-black text-md">
                        <div className="list-disc ml-4">
                            <li>La presencia de brackets linguales, a diferencia de los convencionales, no crea un riesgo de caries</li>
                            <li>La disposición de los prismas del esmalte dental en las caras internas de los dientes y la presencia de la lengua que realiza un barrido mecánico de los resots de alimentos ayudan a que se de esto.</li>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-orange-600 border-none">
                    <CardHeader>
                        <Image alt="pillow" src="/pillow.svg" width={72} height={72} />
                        <CardTitle className="text-3xl text-black">
                            Es más cómoda
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-black text-md">
                        <div className="list-disc ml-4">
                            <li>Contrario a lo que piensan muchos, al no haber aparatos afuera, se evitan heridas por aplastamiento y roce de labios, siendo más cómodos que los brackets normales.</li>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
} 