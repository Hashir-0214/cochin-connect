import { motion } from 'framer-motion';
import {
    Sparkles,
    Target,
    Users,
    Lightbulb,
    TrendingUp,
    Handshake,
    Award,
    ArrowRight,
    Briefcase,
    Rocket,
    GraduationCap,
    Calendar,
    Mail,
    Phone,
    MapPin,
    UsersRound,
    Contact,
    Contact2,
    Link2
} from 'lucide-react';
import { Link } from 'react-router-dom';

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

    const services = [
        { icon: Briefcase, title: "Job Bank", desc: "Connect skilled professionals with opportunities", gradient: "from-blue-500 to-cyan-500" },
        { icon: Users, title: "Business Support", desc: "End-to-end guidance and mentorship", gradient: "from-purple-500 to-pink-500" },
        { icon: Rocket, title: "Startup Support", desc: "Empower your entrepreneurial journey", gradient: "from-orange-500 to-red-500" },
        { icon: GraduationCap, title: "Training", desc: "Expert-led workshops and seminars", gradient: "from-green-500 to-emerald-500" },
        { icon: Award, title: "Member Benefits", desc: "Exclusive access and opportunities", gradient: "from-yellow-500 to-orange-500" },
        { icon: Calendar, title: "Events", desc: "Networking and expo opportunities", gradient: "from-indigo-500 to-purple-500" }
    ];

    const team = [
        { name: "Leadership", role: "Strategic Vision", image: "👔" },
        { name: "Mentors", role: "Industry Experts", image: "🎯" },
        { name: "Support", role: "Always Here", image: "💼" },
        { name: "Community", role: "Growing Together", image: "🤝" }
    ];

    return (
        <div className="w-full bg-gradient-to-br from-purple-50 via-white to-violet-50 overflow-hidden poppins-regular">
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
                        className="flex flex-col md:flex-row items-center justify-between gap-12 mb-36"
                    >
                        {/* Text Content */}
                        <motion.div variants={itemVariants} className="flex-1 max-w-2xl">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="inline-block mb-6"
                            >
                                <span className="px-5 py-2 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] text-white rounded-full text-sm poppins-semibold shadow-lg">
                                    Kerala's First Business Network
                                </span>
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl poppins-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] mb-6 leading-tight">
                                Business Now Everywhere <br /> with Cochin Connect
                            </h2>

                            <div className="space-y-5 text-gray-700 text-xl leading-relaxed">
                                <p className="relative pl-6 border-l-4 border-[#8a48e7]">
                                    Welcome to Cochin Connect, <strong className="text-[#5c21d2]">Kerala's first comprehensive business networking platform</strong> designed to empower entrepreneurs, professionals, and businesses.
                                </p>
                                {/* <p>
                                    With Cochin Connect, we bring together a vibrant community of business owners, startups, investors, and professionals — all on one digital platform. Whether you are looking to expand your business network, discover new opportunities, or connect with like-minded professionals, Cochin Connect is your go-to destination.
                                </p> */}
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
                                        <h1 className="text-5xl poppins-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] mb-2">
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
                        className="mb-36"
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
                            <h2 className="text-4xl poppins-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] mb-4">
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

                    {/* Services Preview Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-36"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl poppins-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] mb-4">
                                Our Services
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Comprehensive solutions designed to help your business thrive
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
                                >
                                    <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <service.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg poppins-bold text-gray-800 mb-2">{service.title}</h3>
                                    <p className="text-sm text-gray-600">{service.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center">
                            <Link to="/services">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group px-8 py-3 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] text-white rounded-full poppins-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                                >
                                    View All Services
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* About Preview Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-44"
                    >
                        <div className="bg-gradient-to-r from-white to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100 overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8a48e7]/5 rounded-full blur-3xl"></div>

                            <div className="relative grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <span className="px-4 py-2 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] text-white rounded-full text-sm poppins-semibold shadow-lg inline-block mb-4">
                                        About Us
                                    </span>
                                    <h2 className="text-3xl poppins-bold text-gray-800 mb-4">
                                        Why Choose Cochin Connect?
                                    </h2>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        We're more than just a networking platform. We're a community dedicated to empowering businesses, fostering collaboration, and creating opportunities for growth across Kerala and beyond.
                                    </p>
                                    <Link to="/about">
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="group px-6 py-3 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] text-white rounded-full poppins-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                                        >
                                            Learn More About Us
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </motion.button>
                                    </Link>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Active Members", value: "500+" },
                                        { label: "Business Partners", value: "200+" },
                                        { label: "Events Annually", value: "50+" },
                                        { label: "Success Rate", value: "95%" }
                                    ].map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="bg-white rounded-xl p-4 shadow-lg text-center border border-purple-100"
                                        >
                                            <div className="text-2xl poppins-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] mb-1">
                                                {stat.value}
                                            </div>
                                            <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Team Preview Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-36"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl poppins-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] mb-4">
                                Our Team
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Dedicated professionals committed to your success
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6 mb-8">
                            {team.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 text-center"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                                        {member.image}
                                    </div>
                                    <h3 className="poppins-bold text-gray-800 mb-1">{member.name}</h3>
                                    <p className="text-sm text-gray-600">{member.role}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center">
                            <Link to="/team">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group px-8 py-3 bg-white text-[#5c21d2] border-2 border-[#8a48e7] rounded-full poppins-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 hover:bg-gradient-to-r hover:from-[#8a48e7] hover:to-[#5c21d2] hover:text-white cursor-pointer"
                                >
                                    Meet Our Team
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Let’s Connect Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative mb-36"
                    >
                        <div className="relative bg-gradient-to-br from-[#8a48e7] to-[#5c21d2] rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden">
                            {/* Decorative circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                            <div className="relative text-center max-w-3xl mx-auto poppins-regular">
                                <Link2 className="w-12 h-12 text-white mx-auto mb-6" />
                                <h2 className="text-2xl md:text-3xl poppins-bold text-white mb-6">
                                    Together, We Grow Stronger
                                </h2>
                                <p className="text-md max-w-3xl text-white/90 mb-2">
                                    Contact us today and be part of a community that believes in <strong>collaboration over competition</strong>.
                                </p>
                                <p className='text-md text-white/90 mb-8'><span className='text-lg poppins-semibold'>Have questions?</span> We're here to help you grow your business network</p>
                                <Link to="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group px-10 py-4 bg-white text-[#5c21d2] rounded-full poppins-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 cursor-pointer"
                                    >
                                        Let's Connect
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cochin Business Club Section - Updated to Two Blocks (Information + CTA) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-36"
                    >
                        <div className="text-center mb-12">
                            <div className="inline-block p-3 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] rounded-full shadow-lg mb-4">
                                <UsersRound className="w-10 h-10 text-white" />
                            </div>
                            <h2 className="text-4xl poppins-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] mb-4">
                                What is Cochin Business Club?
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
                                The dedicated division of Cochin Connect for serious business growth.
                            </p>
                        </div>

                        <div className="space-y-6 max-w-4xl mx-auto">
                            {/* Combined Block: Dedicated Network + Growth Platform */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.6 }}
                                className="relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[#8a48e7] z-30"
                            >
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-3 bg-purple-100 rounded-full border border-purple-300">
                                            <Users className="w-6 h-6 text-[#8a48e7]" />
                                        </div>
                                        <div className="ml-5">
                                            <h3 className="text-xl poppins-bold text-gray-800 mb-2">Dedicated Business Network</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                The <strong className="text-[#5c21d2]">Cochin Business Club (CBC)</strong> is a dedicated division of Cochin Connect that brings together business professionals from diverse sectors under one umbrella.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="h-px bg-purple-100 mx-auto w-11/12"></div> {/* Separator Line */}
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 p-3 bg-purple-100 rounded-full border border-purple-300">
                                            <Handshake className="w-6 h-6 text-[#5c21d2]" />
                                        </div>
                                        <div className="ml-5">
                                            <h3 className="text-xl poppins-bold text-gray-800 mb-2">Platform for Collaboration and Growth</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                CBC provides a platform for <strong className="text-gray-900">mutual collaboration, mentorship, and business development</strong>. Through regular meetings, networking sessions, and knowledge-sharing events, members can enhance their business reach and visibility.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Block 2: Value Proposition / CTA */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="relative bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] p-8 rounded-3xl shadow-2xl z-10"
                            >
                                <div className="flex items-start text-white">
                                    <div className="flex-shrink-0 p-3 bg-white/20 rounded-full border border-white/50">
                                        <TrendingUp className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="ml-5">
                                        <h3 className="text-xl poppins-bold mb-2">Your Success is Our Goal</h3>
                                        <p className="leading-relaxed">
                                            <strong className="text-yellow-300">Grow Together</strong>: By joining the Cochin Business Club, you become part of a forward-thinking community that believes in growing together — connecting ideas, people, and opportunities.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Final CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="relative inline-block">
                            <div className="relative rounded-3xl p-12">
                                <h3 className="text-3xl poppins-bold text-gray-800 mb-4">Join Cochin Connect.</h3>
                                <p className="text-2xl max-w-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] poppins-bold mb-6">
                                    Experience the future of business networking — where connections create success.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group px-8 py-4 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] text-white rounded-full poppins-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
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