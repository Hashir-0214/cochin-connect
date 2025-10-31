import { motion } from 'framer-motion';
import { Sparkles, Target, Users, Lightbulb, TrendingUp, Handshake, Award, ArrowRight } from 'lucide-react';

export default function Home() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const floatAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div className="w-full bg-gradient-to-br from-purple-50 via-white to-violet-50 overflow-hidden">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full pt-32 pb-20 px-6"
            >
                {/* Decorative Elements */}
                <div className="absolute top-20 right-10 w-72 h-72 bg-[#8a48e7]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#5c21d2]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="relative w-full max-w-7xl mx-auto">
                    {/* Main Introduction */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20"
                    >
                        {/* Text Content */}
                        <motion.div variants={itemVariants} className="flex-1 max-w-2xl">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="inline-block mb-6"
                            >
                                <span className="px-5 py-2 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] text-white rounded-full text-sm font-semibold shadow-lg">
                                    Kerala's First Business Network
                                </span>
                            </motion.div>

                            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] mb-6 leading-tight">
                                Business — Now Everywhere with Cochin Connect
                            </h2>

                            <div className="space-y-5 text-gray-700 text-md leading-relaxed">
                                <p className="relative pl-6 border-l-4 border-[#8a48e7]">
                                    Welcome to Cochin Connect, <strong className="text-[#5c21d2]">Kerala's first comprehensive business networking platform</strong> designed to empower entrepreneurs, professionals, and businesses.
                                </p>
                                <p>
                                    With Cochin Connect, we bring together a vibrant community of business owners, startups, investors, and professionals — all on one digital platform. Whether you are looking to expand your business network, discover new opportunities, or connect with like-minded professionals, Cochin Connect is your go-to destination.
                                </p>
                                <p className="font-semibold text-[#5c21d2]">
                                    Our goal is to make business networking more accessible, efficient, and result-driven, enabling you to grow and thrive in today's competitive world.
                                </p>
                            </div>
                        </motion.div>

                        {/* Logo & Branding */}
                        <motion.div
                            variants={itemVariants}
                            className="flex-1 max-w-md"
                        >
                            <motion.div
                                animate={floatAnimation}
                                className="relative"
                            >
                                <div className="relative rounded-3xl p-8">
                                    <img
                                        src="/logo.png"
                                        alt="Cochin Connect"
                                        className="w-64 mx-auto mb-6"
                                    />
                                    <div className="text-center">
                                        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] mb-2">
                                            Cochin Connect.
                                        </h1>
                                        <p className="text-xl text-gray-600 font-medium">Connect. Discover. Experience.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Vision Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <div className="text-center mb-12">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                className="inline-block mb-4"
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                            </motion.div>
                            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] mb-4">
                                OUR VISION
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] mx-auto rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                            {[
                                { icon: Award, text: "To build Kerala's most trusted and accessible business networking platform." },
                                { icon: TrendingUp, text: "To enable entrepreneurs and professionals to collaborate, grow, and expand their ventures beyond boundaries." },
                                { icon: Handshake, text: "To create a digital business community that fosters partnerships, opportunities, and sustainable growth." },
                                { icon: Lightbulb, text: "To promote innovation, communication, and knowledge exchange among business leaders." }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    whileHover={{ scale: 1.03, translateY: -5 }}
                                    className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100"
                                >
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#8a48e7]/5 to-[#5c21d2]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="relative flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#8a48e7] to-[#5c21d2] rounded-xl flex items-center justify-center shadow-lg">
                                            <item.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <p className="text-gray-700 leading-relaxed pt-1">{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Cochin Business Club Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <div className="relative bg-gradient-to-br from-[#8a48e7] to-[#5c21d2] rounded-3xl p-12 shadow-2xl overflow-hidden">
                            {/* Decorative circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative max-w-4xl mx-auto">
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
                                        <Users className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-4xl font-bold text-white mb-4">
                                        What is Cochin Business Club?
                                    </h2>
                                    <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
                                </div>

                                <div className="space-y-6 text-white/95 text-lg leading-relaxed">
                                    <p className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                        The <strong>Cochin Business Club (CBC)</strong> is a dedicated division of Cochin Connect that brings together business professionals from diverse sectors under one umbrella.
                                    </p>
                                    <p className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                        CBC provides a platform for <strong>mutual collaboration, mentorship, and business development</strong>. Through regular meetings, networking sessions, and knowledge-sharing events, members can enhance their business reach and visibility.
                                    </p>
                                    <p className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                        Our aim is to nurture a culture of <strong>trust, cooperation, and innovation</strong> among members, encouraging collective progress.
                                    </p>
                                    <div className="bg-white text-[#5c21d2] rounded-2xl p-8 shadow-xl mt-8 text-center">
                                        <Sparkles className="w-10 h-10 mx-auto mb-4 text-[#8a48e7]" />
                                        <p className="font-bold text-xl">
                                            By joining the Cochin Business Club, you become part of a forward-thinking community that believes in growing together — connecting ideas, people, and opportunities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="relative inline-block">
                            <div className="relative rounded-3xl p-12">
                                <h3 className="text-3xl font-bold text-gray-800 mb-4">Join Cochin Connect.</h3>
                                <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] font-bold mb-6">
                                    Experience the future of business networking — where connections create success.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group px-8 py-4 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                                >
                                    Get Started Today
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}