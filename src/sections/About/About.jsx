/**
 * AboutSection.jsx
 * ----------------
 * Pixel-for-pixel port of the About & Skills page into a single React JSX component.
 * Uses ONLY native Tailwind arbitrary-value classes — no tailwind.config edits needed.
 *
 * Includes:
 *  - Scanline overlay (CSS-in-JSX via <style> tag)
 *  - Fixed top nav with profile avatar, nav links, icon buttons
 *  - About terminal card
 *  - Skills terminal card (Languages, Frameworks, Tools)
 *  - Footer
 *
 * Font setup (add once to your HTML <head> or global CSS):
 *   <link rel="preconnect" href="https://fonts.googleapis.com">
 *   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
 *   <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
 *
 * Material Symbols (for the terminal, settings, menu icons):
 *   <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">
 *   Add this global CSS:
 *     .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
 */

// ─── color tokens (from original tailwind.config) ───────────────────────────
// primary            #67df70
// secondary          #a0d39c
// tertiary           #ffb2bb
// on-surface         #dde5d8
// on-surface-variant #bdcab8
// surface            #0f150e
// surface-container-lowest #091009
// outline-variant    #3e4a3c
// error              #ffb4ab   (used as red mac dot)
// tertiary-container #ff778d   (used as yellow mac dot)
// primary-container  #3fb950   (used as green mac dot)
// ────────────────────────────────────────────────────────────────────────────

// Highlighted skill badge (primary-tinted)
function PrimaryBadge({ children }) {
	return (
		<span
			className="px-2 py-1 border text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace]"
			style={{
				color: "#67df70",
				borderColor: "rgba(103,223,112,0.5)",
				backgroundColor: "rgba(103,223,112,0.05)",
			}}
		>
			{children}
		</span>
	);
}

// Plain skill badge
function Badge({ children }) {
	return (
		<span className="px-2 py-1 border border-[#30363D] text-[#dde5d8] text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace]">
			{children}
		</span>
	);
}

// Terminal window chrome (header bar + dots)
function TerminalWindow({ title, children }) {
	return (
		<section
			className="bg-[#161B22] rounded-[0.25rem] overflow-hidden shadow-lg"
			style={{ border: "1px solid #30363D" }}
		>
			{/* header */}
			<div
				className="px-4 py-2 flex items-center gap-4"
				style={{
					backgroundColor: "#21262D",
					borderBottom: "1px solid #30363D",
				}}
			>
				<div className="flex gap-2">
					<div
						className="w-3 h-3 rounded-[0.75rem]"
						style={{ backgroundColor: "#ffb4ab" }}
					/>
					<div
						className="w-3 h-3 rounded-[0.75rem]"
						style={{ backgroundColor: "#ff778d" }}
					/>
					<div
						className="w-3 h-3 rounded-[0.75rem]"
						style={{ backgroundColor: "#3fb950" }}
					/>
				</div>
				<div className="text-[13px] leading-[1.6] text-[#bdcab8] flex-grow text-center opacity-80 font-['JetBrains_Mono',monospace]">
					{title}
				</div>
			</div>
			{children}
		</section>
	);
}

export default function About() {
	return (
		<div
			id="about"
			className="font-['JetBrains_Mono',monospace] text-[14px] leading-[1.5] antialiased min-h-screen flex flex-col relative"
			style={{ backgroundColor: "#0f150e", color: "#dde5d8" }}
		>
			{/* ── Main ─────────────────────────────────────────────────────────────── */}
			<main className="flex-grow pt-28 pb-16 px-4 md:px-12 max-w-[1200px] mx-auto w-full flex flex-col gap-8 md:gap-12">
				{/* ── About Terminal Card ─────────────────────────────────────────── */}
				<TerminalWindow title="~/portfolio/about.txt">
					<div className="p-6 text-[13px] leading-[1.6] text-[#dde5d8] overflow-x-auto whitespace-pre-wrap font-['JetBrains_Mono',monospace]">
						<span className="text-[#67df70] font-bold">
							anurag@portfolio:~$
						</span>
						{" cat about.txt\n\n"}
						<span style={{ color: "#ffb2bb" }}>name:</span>
						{"      "}
						<span style={{ color: "#a0d39c" }}>Anurag Ranjan</span>
						{"\n"}
						<span style={{ color: "#ffb2bb" }}>role:</span>
						{"      "}
						<span style={{ color: "#a0d39c" }}>Software Engineer Student</span>
						{"\n"}
						<span style={{ color: "#ffb2bb" }}>education:</span>
						{"\n"}
						<span style={{ color: "#ffb2bb" }}>- degree:</span>
						{"     "}
						<span style={{ color: "#a0d39c" }}>
							B.Tech Computer Science and Engineering
						</span>
						{"\n"}
						<span style={{ color: "#ffb2bb" }}>{"  institution:"}</span>
						{"  "}
						<span style={{ color: "#a0d39c" }}>BIT Sindri</span>
						{"\n"}
						<span style={{ color: "#ffb2bb" }}>{"  graduation:"}</span>
						{"   "}
						<span style={{ color: "#a0d39c" }}>2027</span>
						{"\n"}
						<span style={{ color: "#ffb2bb" }}>location:</span>
						{"   "}
						<span style={{ color: "#a0d39c" }}>Dhanbad, IN</span>
						{"\n"}
						<span style={{ color: "#ffb2bb" }}>interests:</span>
						{"\n"}
						{"  - Backend Development\n"}
						{"  - Full Stack Architecture\n"}
						{"  - DevOps & Cloud Infrastructure\n"}
						{"  - Open Source Contributions\n"}
						{"  - Artificial Intelligence / Machine Learning\n\n"}
						<span style={{ color: "#ffb2bb" }}>status:</span>
						{"     "}
						<span style={{ color: "#67df70" }}>
							Always building. Always learning.
						</span>
						{"\n"}
						<span className="animate-pulse text-[#67df70] font-bold">_</span>
					</div>
				</TerminalWindow>

				{/* ── Skills Terminal Card ───────────────────────────────────────── */}
				<TerminalWindow title="~/portfolio/skills">
					<div
						className="p-6 text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace]"
						id="skills"
					>
						{/* prompt */}
						<div className="mb-6">
							<span className="text-[#67df70] font-bold">
								anurag@portfolio:~$
							</span>
							<span className="text-[#dde5d8]"> skills --list</span>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{/* Languages */}
							<div>
								<h3 className="text-[#bdcab8] border-b border-[#3e4a3c] pb-2 mb-4 uppercase tracking-widest text-[11px] font-bold">
									Languages
								</h3>
								<div className="flex flex-wrap gap-3">
									<Badge>[ JavaScript ]</Badge>
									<Badge>[ TypeScript ]</Badge>
									<PrimaryBadge>[ Python ]</PrimaryBadge>
									<Badge>[ C++ ]</Badge>
									<Badge>[ SQL ]</Badge>
								</div>
							</div>

							{/* Frameworks */}
							<div>
								<h3 className="text-[#bdcab8] border-b border-[#3e4a3c] pb-2 mb-4 uppercase tracking-widest text-[11px] font-bold">
									Frameworks &amp; Libraries
								</h3>
								<div className="flex flex-wrap gap-3">
									<PrimaryBadge>[ React ]</PrimaryBadge>
									<Badge>[ Next.js ]</Badge>
									<PrimaryBadge>[ Node.js ]</PrimaryBadge>
									<Badge>[ Express ]</Badge>
									<Badge>[ Tailwind CSS ]</Badge>
								</div>
							</div>

							{/* Tools — full width */}
							<div className="md:col-span-2">
								<h3 className="text-[#bdcab8] border-b border-[#3e4a3c] pb-2 mb-4 uppercase tracking-widest text-[11px] font-bold">
									Tools &amp; Infrastructure
								</h3>
								<div className="flex flex-wrap gap-3">
									<Badge>[ Git/GitHub ]</Badge>
									<Badge>[ Docker ]</Badge>
									<Badge>[ AWS ]</Badge>
									<Badge>[ Linux ]</Badge>
									<Badge>[ PostgreSQL ]</Badge>
									<Badge>[ MongoDB ]</Badge>
								</div>
							</div>
						</div>

						<div className="mt-6">
							<span className="animate-pulse text-[#67df70] font-bold">_</span>
						</div>
					</div>
				</TerminalWindow>
			</main>
		</div>
	);
}
