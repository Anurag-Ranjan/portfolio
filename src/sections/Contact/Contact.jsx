import { useState } from "react";
import resumePdf from "../../assets/Anurag_Ranjan_Resume.pdf";

// ─── token reference ─────────────────────────────────────────────────────────
// background:              #0D1117
// card (terminal-bg):      #161B22
// terminal-header:         #21262D
// border:                  #30363D
// outline-variant:         #3e4a3c
// surface-container-high:  #252c24  (progress bar track)
// primary:                 #67df70
// secondary:               #a0d39c
// tertiary:                #ffb2bb
// on-surface:              #dde5d8
// on-surface-variant:      #bdcab8
// error (red mac dot):     #ffb4ab
// primary-container (grn): #3fb950
// ─────────────────────────────────────────────────────────────────────────────

// ── reusable pieces ────────────────────────────────────────────────────────

/** Mac-style terminal window chrome */
function TerminalCard({ title, children }) {
	return (
		<div
			className="rounded-[0.125rem] overflow-hidden"
			style={{ backgroundColor: "#161B22", border: "1px solid #30363D" }}
		>
			{/* header */}
			<div
				className="flex items-center px-4 py-2"
				style={{
					backgroundColor: "#21262D",
					borderBottom: "1px solid #30363D",
				}}
			>
				<div className="flex gap-2 mr-4">
					<div className="w-3 h-3 rounded-[0.75rem] bg-[#ffb4ab]" />
					<div className="w-3 h-3 rounded-[0.75rem] bg-[#a0d39c]" />
					<div className="w-3 h-3 rounded-[0.75rem] bg-[#3fb950]" />
				</div>
				<span className="text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace] text-[#bdcab8] mx-auto">
					{title}
				</span>
			</div>
			{children}
		</div>
	);
}

/** Section header inside a card (e.g. "REPOSITORY STATISTICS") */
function CardSectionHeader({ children }) {
	return (
		<p className="text-[#67df70] mb-2 border-b border-[#3e4a3c] pb-1 text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace]">
			{children}
		</p>
	);
}

/** Language progress bar row */
function LangBar({ label, percent, barColor }) {
	return (
		<div className="mt-2">
			<div className="flex justify-between items-center mb-1">
				<span className="text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace] text-[#dde5d8]">
					{label}
				</span>
				<span className="text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace] text-[#bdcab8]">
					{percent}%
				</span>
			</div>
			<div className="w-full h-2 bg-[#30372e] rounded-[0.75rem] overflow-hidden">
				<div
					className="h-full rounded-[0.75rem]"
					style={{ width: `${percent}%`, backgroundColor: barColor }}
				/>
			</div>
		</div>
	);
}

// ── main component ─────────────────────────────────────────────────────────

const LANG_COLORS = {
	TypeScript: "#67df70",
	Python: "#a0d39c",
	JavaScript: "#ffb2bb",
	Rust: "#ffb4ab",
	CSS: "#79c0ff",
	HTML: "#e34c26",
	C: "#555555",
	"C++": "#f34b7d",
	Java: "#b07219",
	Shell: "#89e051",
	Go: "#00add8",
	Ruby: "#701516",
};

export default function Contact({ onSend }) {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [sending, setSending] = useState(false);
	const [successMsg, setSuccessMsg] = useState("");

	const handleSend = async () => {
		if (!email || !message) return;
		setSending(true);
		try {
			await onSend(email, message);
			setEmail("");
			setMessage("");
			setSuccessMsg("Query sent successfully");
			setTimeout(() => setSuccessMsg(""), 3000);
		} catch {
			alert("Failed to send message.");
		} finally {
			setSending(false);
		}
	};

	return (
		<div
			id="contact"
			className="font-['JetBrains_Mono',monospace] text-[14px] leading-[1.5] antialiased flex flex-col relative overflow-x-hidden"
			style={{ backgroundColor: "#0D1117", color: "#dde5d8" }}
		>
			<style>{`
        .icon-filled {
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

			{/* ── Main ─────────────────────────────────────────────────────────── */}
			<main className="flex-grow pb-16 px-4 md:px-12 max-w-[1200px] mx-auto w-full flex flex-col gap-4 lg:flex-row lg:items-start relative z-10 pt-28">
				<div className="flex-grow flex flex-col gap-4 w-full z-10">
					{/* ── GitHub Stats Card ──────────────────────────────────────── */}
					{/* <TerminalCard title="~/github/stats">
						<div className="p-6 text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace]">
							<div className="mb-4">
								<span className="text-[#3FB950] font-bold">
									anurag@portfolio:~$
								</span>
								<span className="text-[#dde5d8]">
									{" "}
									github stats{loading ? " (fetching...)" : ""}
								</span>
								<span className="after:content-['▋'] after:animate-[blink_1s_step-start_infinite]" />
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#dde5d8]">
								<div>
									<CardSectionHeader>REPOSITORY STATISTICS</CardSectionHeader>
									<table className="w-full text-left text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace]">
										<thead>
											<tr className="text-[#bdcab8]">
												<th className="py-1 font-medium">Metric</th>
												<th className="py-1 font-medium">Count</th>
											</tr>
										</thead>
										<tbody>
											{[
												{
													label: "Public Repos",
													value: stats?.publicRepos ?? "—",
												},
												{
													label: "Commits",
													value: stats?.totalCommits?.toLocaleString() ?? "—",
												},
											].map(({ label, value }) => (
												<tr
													key={label}
													className="border-t"
													style={{ borderColor: "rgba(62,74,60,0.5)" }}
												>
													<td className="py-1">{label}</td>
													<td className="py-1 text-[#67df70]">{value}</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>

								<div>
									<CardSectionHeader>TOP LANGUAGES</CardSectionHeader>
									{stats?.topLangs?.length
										? stats.topLangs.map((lang) => (
												<LangBar
													key={lang.label}
													label={lang.label}
													percent={lang.percent}
													barColor={LANG_COLORS[lang.label] || "#67df70"}
												/>
											))
										: !loading && (
												<p className="text-[#bdcab8] text-[13px] leading-[1.6]">
													No language data available
												</p>
											)}
								</div>
							</div>

							<div className="mt-6">
								<span className="animate-[blink_1s_step-start_infinite] text-[#67df70] font-bold">
									_
								</span>
							</div>
						</div>
					</TerminalCard> */}

					{/* ── Resume Download Card ───────────────────────────────────── */}
					<TerminalCard title="~/documents">
						<div className="p-6 text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace]">
							{/* prompt */}
							<div className="mb-4">
								<span className="text-[#3FB950] font-bold">
									anurag@portfolio:~$
								</span>
								<span className="text-[#dde5d8]"> download resume.pdf</span>
								<span className="after:content-['▋'] after:animate-[blink_1s_step-start_infinite]" />
							</div>

							<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-[#dde5d8]">
								<div className="flex items-center gap-4 min-w-0">
									<span className="material-symbols-outlined icon-filled text-[#67df70] shrink-0">
										description
									</span>
									<span className="truncate">
										anurag_ranjan_resume.pdf (124 KB)
									</span>
								</div>
								<a
									href={resumePdf}
									download
									className="sm:ml-auto bg-[#238636] hover:bg-[#2ea043] text-white px-4 py-2 rounded-[0.125rem] transition-colors flex items-center gap-2 no-underline shrink-0"
								>
									<span className="material-symbols-outlined text-[18px]">
										download
									</span>
									Download
								</a>
							</div>

							<div className="mt-4">
								<span className="animate-[blink_1s_step-start_infinite] text-[#67df70] font-bold">
									_
								</span>
							</div>
						</div>
					</TerminalCard>

					{/* ── Handshake prompt ───────────────────────────────────────── */}
					<p className="text-3xl leading-relaxed text-[#dde5d8] font-['JetBrains_Mono',monospace] px-1 mt-8">
						<span className="text-[#67df70]">Looking</span> for a developer who
						enjoys solving
						<br />
						real-world engineering problems?{" "}
						<span className="text-[#67df70]">Let's talk.</span>
					</p>

					{/* ── Contact Card ───────────────────────────────────────────── */}
					<TerminalCard title="~/contact">
						<div className="p-6 text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace] flex flex-col gap-6">
							{/* prompt */}
							<div>
								<span className="text-[#3FB950] font-bold">
									anurag@portfolio:~$
								</span>
								<span className="text-[#dde5d8]"> contact</span>
								<span className="after:content-['▋'] after:animate-[blink_1s_step-start_infinite]" />
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								{/* Social links */}
								<div>
									<CardSectionHeader>AVAILABLE PROTOCOLS</CardSectionHeader>
									<ul className="flex flex-col gap-3 text-[#dde5d8]">
										{/* Email */}
										<li>
											<a
												href="mailto:anuragran07@gmail.com"
												className="flex items-center gap-2 hover:text-[#67df70] transition-colors group"
											>
												<span className="text-[#bdcab8] group-hover:text-[#67df70]">
													&gt;
												</span>
												<span className="material-symbols-outlined text-[18px] text-[#bdcab8] group-hover:text-[#67df70]">
													mail
												</span>
												anuragran07@gmail.com
											</a>
										</li>
										{/* Phone */}
										<li>
											<a
												href="tel:+917979850249"
												className="flex items-center gap-2 hover:text-[#67df70] transition-colors group"
											>
												<span className="text-[#bdcab8] group-hover:text-[#67df70]">
													&gt;
												</span>
												<span className="material-symbols-outlined text-[18px] text-[#bdcab8] group-hover:text-[#67df70]">
													call
												</span>
												+91 7979850249
											</a>
										</li>
										{/* LinkedIn */}
										<li>
											<a
												href="https://www.linkedin.com/in/anurag-ranjan-1a5b58290/"
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 hover:text-[#67df70] transition-colors group"
											>
												<span className="text-[#bdcab8] group-hover:text-[#67df70]">
													&gt;
												</span>
												<span className="material-symbols-outlined text-[18px] text-[#bdcab8] group-hover:text-[#67df70]">
													link
												</span>
												LinkedIn
											</a>
										</li>
										{/* GitHub */}
										<li>
											<a
												href="https://github.com/Anurag-Ranjan"
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 hover:text-[#67df70] transition-colors group"
											>
												<span className="text-[#bdcab8] group-hover:text-[#67df70]">
													&gt;
												</span>
												<span className="material-symbols-outlined text-[18px] text-[#bdcab8] group-hover:text-[#67df70]">
													code
												</span>
												GitHub
											</a>
										</li>
									</ul>
								</div>

								{/* Contact form */}
								<div>
									<CardSectionHeader>DIRECT MESSAGE</CardSectionHeader>
									<div className="flex flex-col gap-3">
										{/* email input */}
										<div
											className="flex items-center gap-2 border px-3 py-2 rounded-[0.125rem] transition-colors focus-within:border-[#67df70]"
											style={{
												backgroundColor: "#0D1117",
												borderColor: "#30363D",
											}}
										>
											<span className="text-[#3FB950]">&gt;</span>
											<input
												type="email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												placeholder="email_address..."
												className="bg-transparent border-none outline-none w-full text-[#dde5d8] text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace] placeholder:text-[#bdcab8]/50 focus:ring-0 p-0"
											/>
										</div>

										{/* message textarea */}
										<div
											className="flex items-start gap-2 border px-3 py-2 rounded-[0.125rem] h-24 transition-colors focus-within:border-[#67df70]"
											style={{
												backgroundColor: "#0D1117",
												borderColor: "#30363D",
											}}
										>
											<span className="text-[#3FB950] pt-1">&gt;</span>
											<textarea
												value={message}
												onChange={(e) => setMessage(e.target.value)}
												placeholder="message_payload..."
												className="bg-transparent border-none outline-none w-full h-full resize-none text-[#dde5d8] text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace] placeholder:text-[#bdcab8]/50 focus:ring-0 p-0"
											/>
										</div>

										{/* submit */}
										<button
											type="button"
											onClick={handleSend}
											disabled={sending}
											className="self-end border border-[#30363D] text-[#7D8590] px-4 py-2 rounded-[0.125rem] hover:text-[#67df70] hover:border-[#67df70] transition-colors bg-transparent cursor-pointer text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace] disabled:opacity-50 disabled:cursor-not-allowed"
										>
											{sending ? "Sending..." : "Execute Send"}
										</button>
										{successMsg && (
											<span className="text-[#67df70] text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace] transition-opacity duration-300">
												{successMsg}
											</span>
										)}
									</div>
								</div>
							</div>

							<div className="mt-4">
								<span className="animate-[blink_1s_step-start_infinite] text-[#67df70] font-bold">
									_
								</span>
							</div>
						</div>
					</TerminalCard>
				</div>
			</main>
		</div>
	);
}
