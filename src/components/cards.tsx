import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"

import Image from "next/image"
import { CalendarDays, ListOrdered, MessageCircleQuestion, CircleCheck, MapPin } from 'lucide-react';
import InitialExplanation from "./initial_explanation";

export default function Cards() {
    return (
        <div className="bg-black">
            <div className="flex items-center justify-center py-14">
                <h1 className="text-orange-600 text-2xl sm:text-3xl md:text-5xl font-bold text-center">
                    Un tratamiento que no oculta tu sonrisa
                </h1>
            </div>
            <InitialExplanation />
            <div className="flex flex-col md:flex-row justify-between px-4 md:px-16 md:space-x-10">

                <Card className="bg-transparent border-none">
                    <CardHeader>
                        <CalendarDays color="#ea580c" size={72} />
                        <CardTitle className="text-3xl text-orange-600">
                            Agendá tu turno
                        </CardTitle>
                        <CardDescription className="text-white text-lg">
                            ¡Pedí tu turno y no esperes más para mejorar tu sonrisa!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col space-y-2">
                            <Button variant="ghost" className="bg-orange-600">
                                <Image alt="whatsapp" src="/whatsapp_icon_black.svg" width={40} height={40} />
                                <p className="ml-2 text-base text-black">Escribinos por whatsapp</p>
                            </Button>
                            <Button variant="ghost" className="bg-orange-600">
                                <Image alt="instagram" src="/instagram_icon_black.svg" width={40} height={40} />
                                <p className="ml-2 text-base text-black">Escribinos por instagram</p>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-transparent border-none">
                    <CardHeader>
                        <CircleCheck color="#ea580c" size={72} />
                        <CardTitle className="text-3xl text-orange-600">
                            Ventajas
                        </CardTitle>
                        <CardDescription className="text-white text-lg">
                            ¡Enteraté acerca de todas las ventajas de este tratamiento!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col space-y-2">
                            <Button variant="ghost" className="bg-orange-600">
                                <p className="ml-2 text-base text-black">Ir a la sección</p>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-transparent border-none">
                    <CardHeader>
                        <ListOrdered color="#ea580c" size={72} />
                        <CardTitle className="text-3xl text-orange-600">
                            Tratamiento
                        </CardTitle>
                        <CardDescription className="text-white text-lg">
                            Lee acerca de las etapas del tratamiento
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col space-y-2">
                            <Button variant="ghost" className="bg-orange-600">
                                <p className="ml-2 text-base text-black">Ir a la sección</p>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="flex flex-col md:flex-row justify-between px-4 md:px-16 md:space-x-10 lg:space-x-16 mx-auto md:max-w-5xl">

                <Card className="bg-transparent border-none">
                    <CardHeader>
                        <MapPin color="#ea580c" size={72} />
                        <CardTitle className="text-3xl text-orange-600">
                            Sedes
                        </CardTitle>
                        <CardDescription className="text-white text-lg">
                            Revisá nuestras sedes para atenderte en el lugar que mejor te quede
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col space-y-2">
                            <Button variant="ghost" className="bg-orange-600">
                                <p className="ml-2 text-base text-black">Ir a la sección</p>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-transparent border-none">
                    <CardHeader>
                        <MessageCircleQuestion color="#ea580c" size={72} />
                        <CardTitle className="text-3xl text-orange-600">
                            Preguntas frecuentes
                        </CardTitle>
                        <CardDescription className="text-white text-lg">
                            ¡Revisá las preguntas frecuentes para sacarte las dudas!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col space-y-2">
                            <Button variant="ghost" className="bg-orange-600">
                                <p className="ml-2 text-base text-black">Ir a la sección</p>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}