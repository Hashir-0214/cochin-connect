import { Sun, Moon, Menu, X } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/services", label: "Services" },
        { to: "/projects", label: "Projects" },
        { to: "/team", label: "Team" },
        { to: "/contact", label: "Contact" }
    ];

    return (
        <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-xl shadow-sm z-50 border-b border-purple-100 poppins-regular">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3 group">
                    <div className="relative">
                        <div className="absolute inset-0  rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <img
                            src="/logo.png"
                            alt="Cochin Connect Logo"
                            width={48}
                            height={48}
                            className="relative rounded-xl transition-transform group-hover:scale-105"
                        />
                    </div>
                    <div className="hidden sm:block">
                        <div className="text-xl poppins-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8a48e7] to-[#5c21d2]">
                            Cochin Connect
                        </div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="relative px-4 py-2 text-sm text-gray-700 font-medium rounded-lg hover:text-[#5c21d2] transition-all duration-300 group"
                        >
                            <span className="relative z-10">{link.label}</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-[#8a48e7]/10 to-[#5c21d2]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        </Link>
                    ))}
                </nav>

                {/* <button
                    onClick={() => setIsDark(!isDark)}
                    className="relative w-10 h-10 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] hover:shadow-lg rounded-full transition-all duration-300 flex items-center justify-center group overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {isDark ? (
                        <Moon size={20} color="white" className="relative z-10" />
                    ) : (
                        <Sun size={20} color="white" className="relative z-10" />
                    )}
                </button> */}


                {/* Right Side Actions */}
                <div className="flex items-center space-x-3">
                    {/* Theme Toggle */}

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden w-10 h-10 bg-gradient-to-r from-[#8a48e7] to-[#5c21d2] hover:shadow-lg rounded-full transition-all duration-300 flex items-center justify-center"
                    >
                        {isMenuOpen ? (
                            <X size={20} color="white" />
                        ) : (
                            <Menu size={20} color="white" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-purple-100 shadow-lg">
                    <nav className="flex flex-col space-y-1 px-6 py-4">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsMenuOpen(false)}
                                className="px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gradient-to-r hover:from-[#8a48e7]/10 hover:to-[#5c21d2]/10 hover:text-[#5c21d2] transition-all duration-300"
                                style={{
                                    animation: `slideIn 0.3s ease-out ${index * 0.05}s both`
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}

            <style>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </header>
    );
}