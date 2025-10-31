import { motion } from 'framer-motion';
import { 
    Briefcase, 
    Users, 
    Rocket, 
    GraduationCap, 
    Award, 
    Calendar, 
    UsersRound, 
    Megaphone, 
    Globe, 
    TrendingUp, 
    Heart,
    Sparkles,
    ArrowRight,
    CheckCircle,
    Target,
    Zap,
    Shield
} from 'lucide-react';

export default function Services() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08
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

    const services = [
        {
            icon: Briefcase,
            title: "Job Bank",
            description: "Connect skilled professionals with businesses seeking qualified candidates. Employers can post openings and discover top talent.",
            features: [
                "Verified candidate profiles",
                "Direct employer connections",
                "Industry-specific job boards",
                "Resume building support"
            ],
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: Users,
            title: "Business Support",
            description: "End-to-end business support including guidance, mentorship, and networking opportunities to help scale your ventures.",
            features: [
                "One-on-one mentorship",
                "Strategic business planning",
                "Network expansion support",
                "Problem-solving sessions"
            ],
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: Rocket,
            title: "Startup Support",
            description: "Encouraging small businesses and startups by connecting them with investors, mentors, and collaborators.",
            features: [
                "Investor matchmaking",
                "Pitch deck reviews",
                "Funding guidance",
                "Growth acceleration programs"
            ],
            gradient: "from-orange-500 to-red-500"
        },
        {
            icon: GraduationCap,
            title: "Business Training",
            description: "Curated training programs, workshops, and seminars conducted by industry experts and business leaders.",
            features: [
                "Expert-led workshops",
                "Certification programs",
                "Skill development courses",
                "Leadership training"
            ],
            gradient: "from-green-500 to-emerald-500"
        },
        {
            icon: Award,
            title: "Member Benefits",
            description: "Priority access to events, mentorship programs, promotional opportunities, and exclusive networking sessions.",
            features: [
                "VIP event access",
                "Priority support",
                "Exclusive discounts",
                "Premium networking"
            ],
            gradient: "from-yellow-500 to-orange-500"
        },
        {
            icon: Calendar,
            title: "Networking Events",
            description: "B2B expos, trade meets, and networking sessions to showcase products and form meaningful partnerships.",
            features: [
                "Monthly networking meets",
                "Trade exhibitions",
                "Industry conferences",
                "Business mixers"
            ],
            gradient: "from-indigo-500 to-purple-500"
        },
        {
            icon: UsersRound,
            title: "Women's Business Forum",
            description: "Empowering platform for women entrepreneurs to share experiences, learn from experts, and grow together.",
            features: [
                "Women-led initiatives",
                "Mentorship circles",
                "Success story sharing",
                "Collaborative projects"
            ],
            gradient: "from-pink-500 to-rose-500"
        },
        {
            icon: Megaphone,
            title: "Marketing Support",
            description: "Comprehensive marketing assistance through digital campaigns, social media spotlights, and promotional channels.",
            features: [
                "Digital marketing campaigns",
                "Social media management",
                "Brand visibility programs",
                "Content creation support"
            ],
            gradient: "from-cyan-500 to-blue-500"
        },
        {
            icon: Globe,
            title: "E-Business Solutions",
            description: "Guidance on e-commerce integration, digital transformation, and online branding for traditional businesses.",
            features: [
                "E-commerce setup",
                "Digital transformation",
                "Online store optimization",
                "Digital payment integration"
            ],
            gradient: "from-teal-500 to-green-500"
        },
        {
            icon: TrendingUp,
            title: "Entrepreneurship Program",
            description: "Structured initiative providing training, financial literacy, mentorship, and networking opportunities.",
            features: [
                "Financial literacy training",
                "Business model development",
                "Mentorship matching",
                "Growth strategy planning"
            ],
            gradient: "from-violet-500 to-purple-500"
        },
        {
            icon: Heart,
            title: "Philanthropic Lounge",
            description: "Supporting socially responsible business initiatives and corporate social responsibility programs.",
            features: [
                "CSR program development",
                "Community engagement",
                "Impact measurement",
                "Sustainable business practices"
            ],
            gradient: "from-red-500 to-pink-500"
        }
    ];

    const stats = [
        { icon: Users, value: "500+", label: "Active Members" },
        { icon: Briefcase, value: "200+", label: "Business Partners" },
        { icon: Calendar, value: "50+", label: "Events Annually" },
        { icon: Award, value: "95%", label: "Success Rate" }
    ];

    return (
        <div className="w-full bg-gradient-to-br from-purple-50 via-white to-violet-50 overflow-hidden">
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full pt-32 pb-20 px-6"
            >
                {/* Decorative Elements */}
                <div className="absolute top-20 right-10 w-96 h-96 bg-[#8a48e7]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#5c21d2]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="relative w-full max-w-7xl mx-auto">
                    {/* Header */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-center mb-16"
                    >
                        <motion.div variants={itemVariants} className="inline-block mb-6">
                            <span className="px-5 py-2 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] text-white rounded-full text-sm font-semibold shadow-lg">
                                Our Services
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] mb-6"
                        >
                            Comprehensive Business Solutions
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
                        >
                            Everything you need to grow, connect, and succeed in today's business landscape
                        </motion.p>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 text-center hover:shadow-xl transition-shadow"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Services Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 gap-8 mb-20"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-purple-100 overflow-hidden"
                            >
                                {/* Gradient Background on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#8a48e7]/5 to-[#5c21d2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                <div className="relative">
                                    {/* Icon and Title */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                                            <service.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#5c21d2] transition-colors">
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <CheckCircle className="w-5 h-5 text-[#8a48e7] flex-shrink-0" />
                                                <span className="text-gray-700 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Learn More Button */}
                                    <button className="mt-6 text-[#5c21d2] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Learn More
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* Decorative Element */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#8a48e7]/10 to-transparent rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-500"></div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Why Choose Our Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-20"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] mb-4">
                                Why Choose Our Services?
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] mx-auto rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: Target, title: "Targeted Solutions", desc: "Services tailored to your specific business needs and goals" },
                                { icon: Zap, title: "Fast Results", desc: "Quick implementation and measurable outcomes for your business" },
                                { icon: Shield, title: "Trusted Network", desc: "Connect with verified professionals and businesses" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 text-center hover:shadow-xl transition-shadow"
                                >
                                    <div className="w-14 h-14 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <item.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative bg-gradient-to-br from-[#8a48e7] to-[#5c21d2] rounded-3xl p-12 md:p-16 shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                            
                            <div className="relative text-center max-w-3xl mx-auto">
                                <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Ready to Transform Your Business?
                                </h2>
                                <p className="text-xl text-white/95 mb-8 leading-relaxed">
                                    Join hundreds of successful businesses already leveraging our services to achieve their goals.
                                </p>
                                
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group px-10 py-4 bg-white text-[#5c21d2] rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3"
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