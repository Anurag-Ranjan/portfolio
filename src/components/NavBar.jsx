import { PROFILE_IMG } from "../constants/profileimage";
import IconTerminal from "./IconTerminal";
import IconSettings from "./IconSettings";

function NavBar({ scrolled }) {
	return (
		<nav
			className={`fixed top-0 w-full z-50 transition-all duration-300 py-4 px-4 md:px-12 flex justify-between items-center max-w-[1200px] mx-auto ${
				scrolled ? "backdrop-blur-md border-b border-[#30363D]" : ""
			}`}
			style={
				scrolled ? { backgroundColor: "rgba(13, 17, 23, 0.9)" } : undefined
			}
		>
			<div className="flex items-center gap-4">
				<div
					className={`overflow-hidden rounded-[0.75rem] border border-[#3e4a3c] transition-all duration-300 ${
						scrolled ? "w-8 h-8 opacity-100 mr-2" : "w-0 h-0 opacity-0"
					}`}
				>
					<img
						alt="Anurag Ranjan Profile"
						className="w-full h-full object-cover"
						src={PROFILE_IMG}
					/>
				</div>
				<div
					className="text-[20px] leading-[1.4] font-semibold"
					style={{ color: "#67df70" }}
				>
					anurag@workstation:~$
				</div>
			</div>

			<div className="hidden md:flex gap-6 border-b border-[#3e4a3c]">
				<a
					className="pb-1 text-[12px] leading-none tracking-[0.05em] font-medium cursor-pointer active:opacity-80 transition-colors border-b-2"
					style={{ color: "#67df70", borderColor: "#67df70" }}
					href="#about"
				>
					01.About
				</a>
				<a
					className="pb-1 text-[12px] leading-none tracking-[0.05em] font-medium cursor-pointer active:opacity-80 transition-colors hover:text-[#67df70]"
					style={{ color: "#bdcab8" }}
					href="#projects"
				>
					02.Projects
				</a>
				<a
					className="pb-1 text-[12px] leading-none tracking-[0.05em] font-medium cursor-pointer active:opacity-80 transition-colors hover:text-[#67df70]"
					style={{ color: "#bdcab8" }}
					href="#skills"
				>
					03.Skills
				</a>
				<a
					className="pb-1 text-[12px] leading-none tracking-[0.05em] font-medium cursor-pointer active:opacity-80 transition-colors hover:text-[#67df70]"
					style={{ color: "#bdcab8" }}
					href="#experience"
				>
					04.Experience
				</a>
			</div>

			<div className="flex gap-4">
				<IconTerminal className="w-5 h-5 cursor-pointer duration-200 hover:text-[#67df70]" />
				<IconSettings className="w-5 h-5 cursor-pointer duration-200 hover:text-[#67df70]" />
			</div>
		</nav>
	);
}

export default NavBar;
