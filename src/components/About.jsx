import { motion } from "framer-motion";

export default function About() {
    return (
        <>
            <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="py-20 px-6 bg-white">
                <div className="w-full mx-auto text-center">
                    <h2 className="text-3xl font-[Helvetica] font-semibold mb-4 text-gray-900">About Us</h2>
                    <p className="text-gray-700 max-w-3xl mx-auto">Cochin Connect provides strategic consulting services that empower businesses to scale sustainably and digitally.</p>
                </div>
            </motion.section>
        </>
    );
}