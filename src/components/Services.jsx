import { motion } from 'framer-motion';

export default function Services() {
    return (
        <>
            <motion.section initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="py-20 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-[Helvetica] font-semibold mb-6 text-gray-900">Our Services</h2>
                    <p className="text-gray-700 mb-8">Business strategy, digital enablement, and financial advisory designed to help companies grow.</p>
                </div>
            </motion.section>
        </>
    );
}