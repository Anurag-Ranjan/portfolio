import { useEffect, useRef, useState } from "react";
import { PROFILE_IMG } from "../constants/profileimage";

function IconHamburger({ className }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
		>
			<line x1="4" y1="6" x2="20" y2="6" />
			<line x1="4" y1="12" x2="20" y2="12" />
			<line x1="4" y1="18" x2="20" y2="18" />
		</svg>
	);
}

function NavLink({ href, children, active }) {
	return (
		<a
			href={href}
			className={`pb-1 cursor-pointer active:opacity-80 transition-all duration-300 text-[11px] leading-none tracking-[0.05em] font-medium uppercase ${
				active
					? "text-[#67df70] border-b-2 border-[#67df70]"
					: "text-[#bdcab8] hover:text-[#67df70]"
			}`}
		>
			{children}
		</a>
	);
}

const SECTION_IDS = ["about", "projects", "skills", "contact"];

export default function Header() {
	const [scrolled, setScrolled] = useState(false);
	const [heroPassed, setHeroPassed] = useState(false);
	const [activeSection, setActiveSection] = useState("about");
	const [floatingStyle, setFloatingStyle] = useState(null);
	const ratiosRef = useRef({});
	const navbarMarkerRef = useRef(null);

	useEffect(() => {
		const onScroll = () => {
			const y = window.scrollY;
			setScrolled(y > 50);
			setHeroPassed(y > window.innerHeight * 0.75);
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	useEffect(() => {
		const ratios = ratiosRef.current;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					ratios[entry.target.id] = entry.intersectionRatio;
				});

				let best = "";
				let bestRatio = 0;
				SECTION_IDS.forEach((id) => {
					const r = ratios[id] || 0;
					if (r > bestRatio) {
						bestRatio = r;
						best = id;
					}
				});

				if (!best && window.scrollY < window.innerHeight * 0.5) {
					best = "about";
				}

				setActiveSection(best);
			},
			{ threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
		);

		SECTION_IDS.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		const onScroll = () => {
			const heroEl = document.querySelector("[data-profile-hero]");
			const navbarEl = navbarMarkerRef.current;
			if (!heroEl || !navbarEl) return;

			const heroRect = heroEl.getBoundingClientRect();
			const navbarRect = navbarEl.getBoundingClientRect();

			const y = window.scrollY;
			const maxScroll = window.innerHeight * 0.75;
			const progress = Math.min(y / maxScroll, 1);

			const width = heroRect.width + (navbarRect.width - heroRect.width) * progress;
			const height = heroRect.height + (navbarRect.height - heroRect.height) * progress;
			const left = heroRect.left + (navbarRect.left - heroRect.left) * progress;
			const top = heroRect.top + (navbarRect.top - heroRect.top) * progress;

			setFloatingStyle({
				position: "fixed",
				width: `${width}px`,
				height: `${height}px`,
				left: `${left}px`,
				top: `${top}px`,
				zIndex: 51,
				borderRadius: "0.75rem",
				border: "2px solid #3e4a3c",
				objectFit: "cover",
				pointerEvents: "none",
			});
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll, { passive: true });
		onScroll();
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);

	return (
		<>
			{floatingStyle && (
				<img alt="Anurag Ranjan Profile" src={PROFILE_IMG} style={floatingStyle} />
			)}
			<nav
				className={`fixed top-0 w-full z-50 transition-all duration-300 ${
					scrolled ? "border-b" : ""
				} ${
					scrolled
						? heroPassed
							? "backdrop-blur-xl border-[#3e4a3c]"
							: "backdrop-blur-md border-[#30363D]"
						: ""
				}`}
				style={{
					backgroundColor: scrolled
						? heroPassed
							? "rgba(15, 21, 14, 0.8)"
							: "rgba(13, 17, 23, 0.9)"
						: "transparent",
				}}
			>
				<div className="flex justify-between items-center py-4 px-4 md:px-12 max-w-[1200px] mx-auto w-full">
					<div className="flex items-center gap-4">
						<div ref={navbarMarkerRef} className="w-10 h-10" />
						<div
							className="text-[20px] leading-[1.4] font-semibold"
							style={{ color: "#67df70" }}
						>
							anurag@workstation:~$
						</div>
					</div>

				<div className="hidden md:flex items-center gap-6 ml-auto">
					<NavLink href="#about" active={activeSection === "about"}>
						01. ABOUT
					</NavLink>
					<NavLink href="#projects" active={activeSection === "projects"}>
						02. PROJECTS
					</NavLink>
					<NavLink href="#skills" active={activeSection === "skills"}>
						03. SKILLS
					</NavLink>
					<NavLink href="#contact" active={activeSection === "contact"}>
						04. CONTACT
					</NavLink>
				</div>

				<button className="md:hidden text-[#67df70]">
					<IconHamburger className="w-6 h-6" />
				</button>
			</div>
		</nav>
		</>
	);
}
