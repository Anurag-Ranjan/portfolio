import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import About from "./sections/About/About";

function App() {
	return (
		<>
			<Header />
			<HeroSection />
			<About />
			<footer
				className="border-t border-[#3e4a3c] w-full"
				style={{ backgroundColor: "#091009" }}
			>
				<div className="flex justify-between items-center px-4 md:px-12 py-2 max-w-[1200px] mx-auto w-full">
					<span className="text-[#a0d39c] font-bold text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace]">
						SYSTEM STATUS: ONLINE | 2024
					</span>
					<div className="hidden md:flex gap-4 text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace]">
						<span className="text-[#bdcab8] hover:text-[#a0d39c] transition-opacity cursor-pointer">
							Dhanbad, IN
						</span>
						<span className="text-[#bdcab8] hover:text-[#a0d39c] transition-opacity cursor-pointer">
							B.Tech CSE
						</span>
						<span className="text-[#bdcab8] hover:text-[#a0d39c] transition-opacity cursor-pointer">
							CGPA: 8.23
						</span>
					</div>
					<div className="flex md:hidden text-[#bdcab8] text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace]">
						Dhanbad, IN | B.Tech CSE | 8.23
					</div>
				</div>
			</footer>
		</>
	);
}

export default App;
