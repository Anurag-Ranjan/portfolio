import { PROFILE_IMG } from "../constants/profileimage";

/**
 * HeroSection
 * -----------
 * Pixel-for-pixel port of the original terminal-themed hero markup, rebuilt with
 * ONLY native Tailwind utility classes (arbitrary values via [..] for the exact
 * hex/px figures from the original tailwind.config). No theme/config edits needed —
 * copy this file in and it just works.
 *
 * Notes on fidelity:
 * - The original config redefined `rounded-full` to 0.75rem (NOT a circle) and
 *   `rounded` (DEFAULT) to 0.125rem. Native Tailwind's `rounded-full` means a true
 *   circle, so to keep the *exact same look* as the original, this file uses
 *   `rounded-[0.75rem]` and `rounded-[0.125rem]` instead of the `-full` / default
 *   utility names.
 * - All custom color tokens (e.g. `text-primary`, `bg-surface`, `border-outline-variant`)
 *   are inlined as their literal hex values via Tailwind's arbitrary value syntax.
 * - All custom font-size tokens (e.g. `text-display`, `text-label-md`) are inlined
 *   as literal px/line-height/letter-spacing/weight via arbitrary values.
 * - Material Symbols icon font is replaced with inline SVGs (no extra font/script tag
 *   needed besides JetBrains Mono, which you can load however you already load fonts).
 *
 * Font: this assumes "JetBrains Mono" is available globally (e.g. via a <link> tag
 * in your document head, same as the original). If you don't already load it:
 *   <link rel="preconnect" href="https://fonts.googleapis.com">
 *   <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
 */

function IconFolderOpen({ className = "" }) {
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
			<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v1H5" />
			<path d="M3 7v11a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
		</svg>
	);
}

function IconDescription({ className = "" }) {
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
			<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
			<polyline points="14 2 14 8 20 8" />
			<line x1="8" y1="13" x2="16" y2="13" />
			<line x1="8" y1="17" x2="16" y2="17" />
		</svg>
	);
}

function IconCode({ className = "" }) {
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
			<polyline points="16 18 22 12 16 6" />
			<polyline points="8 6 2 12 8 18" />
		</svg>
	);
}

// ---- main component -----------------------------------------------------

export default function HeroSection() {
	return (
		<div
			className="font-['JetBrains_Mono',monospace] text-[14px] leading-[1.5] font-normal antialiased min-h-screen flex flex-col relative"
			style={{ backgroundColor: "#0D1117", color: "#E6EDF3" }}
		>
			{/* Main Content */}
			<main className="flex-grow pt-32 pb-24 px-4 md:px-8 max-w-[1200px] mx-auto w-full flex flex-col md:flex-row gap-12 items-start justify-center min-h-[80vh]">
				{/* Profile Image Area */}
				<div className="w-full md:w-[28%] flex flex-col items-center justify-center shrink-0">
					<div
						data-profile-hero
						className="w-64 h-64 md:w-80 md:h-80 rounded-[0.75rem] overflow-hidden border-2 border-[#3e4a3c] shadow-[0_0_15px_rgba(63,185,80,0.2)] relative invisible"
					>
						<img
							alt="Anurag Ranjan Profile"
							className="w-full h-full object-cover"
							src={PROFILE_IMG}
						/>
					</div>

					<div className="mt-8 flex flex-col gap-3 w-full">
						<button className="bg-[#238636] hover:bg-[#2ea043] text-white px-6 py-2 rounded-[0.125rem] text-[12px] leading-none tracking-[0.05em] font-medium transition-colors flex items-center gap-2 justify-center w-full">
							<IconFolderOpen className="w-[18px] h-[18px]" />[ View Projects ]
						</button>
						<button className="border border-[#30363D] text-[#7D8590] hover:text-[#3FB950] hover:border-[#3FB950] px-6 py-2 rounded-[0.125rem] text-[12px] leading-none tracking-[0.05em] font-medium transition-all flex items-center gap-2 justify-center w-full">
							<IconDescription className="w-[18px] h-[18px]" />[ Resume ]
						</button>
					</div>

					<div className="mt-4 flex gap-4 w-full justify-center">
						<button className="border border-[#30363D] text-[#7D8590] hover:text-[#E6EDF3] hover:border-[#E6EDF3] px-6 py-2 rounded-[0.125rem] text-[12px] leading-none tracking-[0.05em] font-medium transition-all flex items-center gap-2 w-full justify-center">
							<IconCode className="w-[18px] h-[18px]" />[ GitHub ]
						</button>
					</div>
				</div>

				{/* Terminal Window Hero */}
				<div className="w-full md:w-[72%] flex flex-col">
					<div
						className="rounded-t-[0.125rem] flex items-center px-4 py-2"
						style={{
							backgroundColor: "#21262D",
							borderBottom: "1px solid #30363D",
						}}
					>
						<div className="flex gap-2">
							<div
								className="w-3 h-3 rounded-[0.75rem]"
								style={{ backgroundColor: "#ff5f56" }}
							/>
							<div
								className="w-3 h-3 rounded-[0.75rem]"
								style={{ backgroundColor: "#ffbd2e" }}
							/>
							<div
								className="w-3 h-3 rounded-[0.75rem]"
								style={{ backgroundColor: "#27c93f" }}
							/>
						</div>
						<div className="flex-grow text-center text-[13px] leading-[1.6] font-normal text-[#7D8590]">
							~/portfolio/whoami
						</div>
					</div>

					<div
						className="rounded-b-[0.125rem] p-5 md:p-6 text-[16px] leading-[1.6] font-normal min-h-[400px]"
						style={{
							backgroundColor: "#161B22",
							border: "1px solid #30363D",
							borderTop: "none",
						}}
					>
						<div className="mb-4">
							<span className="font-bold" style={{ color: "#67df70" }}>
								anurag@portfolio:~$
							</span>{" "}
							<span className="after:content-['▋'] after:animate-[blink_1s_step-start_infinite]">
								whoami
							</span>
						</div>

						<div className="mt-6 space-y-4">
							<h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#E6EDF3] mb-2">
								Anurag Ranjan
							</h1>

							<div className="flex flex-wrap gap-2 mb-6">
								<span
									className="border border-[#30363D] px-2 py-1 text-[13px] leading-[1.6] font-normal"
									style={{ color: "#67df70" }}
								>
									[ Full Stack Developer ]
								</span>
								<span className="border border-[#30363D] px-2 py-1 text-[#E6EDF3] text-[13px] leading-[1.6] font-normal">
									[ Backend Enthusiast ]
								</span>
								<span className="border border-[#30363D] px-2 py-1 text-[#58A6FF] text-[13px] leading-[1.6] font-normal">
									[ DevOps Learner ]
								</span>
							</div>

							<p className="text-[#7D8590] max-w-2xl text-[13px] leading-[1.6] font-normal">
								&gt; Executing system check...
								<br />
								&gt; Modules loaded: concurrency, queue_systems, caching_layers, rest_api, schema_design, monorepo_arch
								<br />
								&gt; Status: Ready to architect scalable solutions.
								<br />
								<br />
								Building high-performance web applications bridging the gap
								between elegant interfaces and robust backend architectures.
								Focused on clean code and system reliability.
								<br />
								<span className="text-[#3FB950]">
									&gt; Status: Open to Software Engineering Internships
								</span>
							</p>
						</div>

						<div className="mt-8">
							<span className="font-bold" style={{ color: "#67df70" }}>
								anurag@portfolio:~$
							</span>
							<span className="text-[#67df70] ml-2 animate-[blink_1s_step-start_infinite]">_</span>
						</div>
					</div>
				</div>
			</main>

			<footer
				className="mt-auto border-t border-[#3e4a3c] w-full"
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
		</div>
	);
}
