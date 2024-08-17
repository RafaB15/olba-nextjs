import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function PreguntasFrecuentes() {
    return (
        <div className="bg-black">
            <div className="py-14 px-4 md:px-24">
                <h1 className="text-orange-600 text-4xl md:text-5xl font-bold text-left">
                    Preguntas frecuentes
                </h1>
            </div>

            <div className="px-4 md:px-24">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b border-orange-800">
                        <AccordionTrigger className="text-orange-600 text-2xl">¿Puedo hacerme tratamientos como blanqueamitentos mientras tengo los brackets</AccordionTrigger>
                        <AccordionContent className="text-white text-lg">
                            Sip
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="border-b border-orange-800">
                        <AccordionTrigger className="text-orange-600 text-2xl">Is it accessible?</AccordionTrigger>
                        <AccordionContent className="text-white text-lg">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="border-b border-orange-800">
                        <AccordionTrigger className="text-orange-600 text-2xl">Is it accessible?</AccordionTrigger>
                        <AccordionContent className="text-white text-lg">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}