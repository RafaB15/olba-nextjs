import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const steps = [
    {
        number: 1,
        title: "Primera Consulta de Evaluación",
        description: "Se examina al paciente, se ofrece un diagnóstico inicial y se estiman los tiempos del tratamiento, indicando los estudios necesarios.",
    },
    {
        number: 2,
        title: "Diagnóstico definitivo y toma de registros",
        description: "Con los estudios realizados, se confirma el diagnóstico y se define el plan de tratamiento. Se toman registros y se envían al laboratorio para la elaboración de los brackets linguales.",
    },
    {
        number: 3,
        title: "Instalación de la aparatología lingual",
        description: "Se colocan los brackets en el maxilar que requiere más tiempo. Se instruye al paciente en higiene y cuidados. Las extracciones necesarias se realizarán según el plan de tratamiento.",
    },
    {
        number: 4,
        title: "Instalación de la aparatología lingual en el otro maxilar",
        description: "En tratamientos de dos maxilares, los brackets del otro maxilar se colocan tras la adaptación del paciente, generalmente al mes, coincidiendo con el primer mantenimiento.",
    },
    {
        number: 5,
        title: "Mantenimientos durante el tratamiento",
        description: "Los ajustes son mensuales para respetar los tiempos biológicos del tratamiento. Ajustes más frecuentes no aceleran el proceso.",
    },
    {
        number: 6,
        title: "Final del tratamiento",
        description: "Al finalizar, se usan contenciones en ambos maxilares para evitar la recidiva.",
    },
];

export default function Tratamiento() {
    return (
        <div className="bg-black">
            <div className="flex items-center justify-center py-14">
                <h1 className="text-orange-600 text-4xl md:text-5xl font-bold text-center">
                    Tratamiento
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-4 md:px-16">
                {steps.map((step, index) => (
                    <Card key={index} className="flex bg-black border-orange-600">
                        <div className="flex items-center justify-center bg-orange-600 text-black text-6xl font-bold w-20 rounded-l-lg">
                            {step.number}
                        </div>
                        <div className="flex-1">
                            <CardHeader className="flex items-center space-x-4">
                                <CardTitle className="text-3xl text-orange-600">
                                    {step.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-white text-md">
                                    {step.description}
                                </CardDescription>
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}