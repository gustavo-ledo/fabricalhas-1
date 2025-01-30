import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
interface Props {
    Q1: string;
    R1: string;
    Q2: string;
    R2: string;
    Q3: string;
    R3: string;
    Q4: string;
    R4: string;
    Q5: string;
    R5: string;
    Q6: string;
    R6: string;
    Q7: string;
    R7: string;
    Q8: string;
    R8: string;
    Q9: string;
    R9: string;
    Q10: string;
    R10: string;
}

export default function FacQuestions({ Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10,R1,R2,R3,R4,R5,R6,R7,R8,R9,R10 }: Props) {
    return(
        <div className="w-full mb-10 items-center flex justify-center">
        <div className="px-4 w-full rounded-xl bg-white shadow-md p-2 max-w-screen-xl flex flex-col items-center justify-center">
            <Accordion className="w-full" type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-blue-800 font-semibold text-sm lg:text-xl">{Q1}</AccordionTrigger>
                    <AccordionContent className="text-amber-500 xl:text-lg text-md">
                        {R1}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-blue-800 font-semibold text-sm lg:text-xl"> {Q2}</AccordionTrigger>
                    <AccordionContent className="text-amber-500 xl:text-lg text-md">
                     {R2}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-blue-800 font-semibold text-sm lg:text-xl"> {Q3}</AccordionTrigger>
                    <AccordionContent className="text-amber-500 xl:text-lg text-md">
                        {R3}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-blue-800 font-semibold text-sm lg:text-xl"> {Q4}</AccordionTrigger>
                    <AccordionContent className="text-amber-500 xl:text-lg text-md">
                        {R4}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-blue-800 font-semibold text-sm lg:text-xl"> {Q5}</AccordionTrigger>
                    <AccordionContent className="text-amber-500 xl:text-lg text-md">
                        {R5}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger className="text-blue-800 font-semibold text-sm lg:text-xl">{Q6}</AccordionTrigger>
                    <AccordionContent className="text-amber-500 xl:text-lg text-md">
                        {R6}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger className="text-blue-800 font-semibold text-sm lg:text-xl"> {Q7}</AccordionTrigger>
                    <AccordionContent className="text-amber-500 xl:text-lg text-md">
                        {R7}
                    </AccordionContent >
                </AccordionItem>
                <AccordionItem value="item-8">
                <AccordionTrigger className="text-blue-800 font-semibold text-sm lg:text-xl"> {Q8}</AccordionTrigger>
                    <AccordionContent className="text-amber-500 xl:text-lg text-md">
                    {R8}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                <AccordionTrigger className="text-blue-800 font-semibold text-sm lg:text-xl"> {Q9}</AccordionTrigger>
                    <AccordionContent className="text-amber-500 xl:text-lg text-md">
                    {R9}
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                <AccordionTrigger className="text-blue-800 font-semibold text-sm lg:text-xl">{Q10}</AccordionTrigger>
                    <AccordionContent className="text-amber-500 xl:text-lg text-md">
                        {R10}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
        </div>
    )
}