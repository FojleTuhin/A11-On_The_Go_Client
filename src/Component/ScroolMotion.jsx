import { animate, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const ScroolMotion = () => {

    const color = useMotionValue(COLORS[0]);



    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;


    useEffect(() => {
        animate(color, COLORS, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    })


    return (





        <motion.section
            style={
                {
                    backgroundImage,

                }
            }


            className="relative grid h-[500px] md:min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200">

            <h1 className="max-w-3xl bg-gradient-to-br from white to bg-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
                Where will you go next?
            </h1>


        </motion.section>
    );
};

export default ScroolMotion;