import { useState, useRef } from "react";
import resumePdf from "../assets/Anurag_Ranjan_Resume.pdf";

const COMMANDS = {
	resume: () => {
		const a = document.createElement("a");
		a.href = resumePdf;
		a.download = "Anurag_Ranjan_Resume.pdf";
		a.click();
	},
	github: () => window.open("https://github.com/Anurag-Ranjan", "_blank"),
	linkedin: () =>
		window.open(
			"https://www.linkedin.com/in/anurag-ranjan-1a5b58290/",
			"_blank"
		),
	phone: () => window.open("tel:+917979850249"),
	email: () => window.open("mailto:anuragran07@gmail.com"),
	overview: () =>
		document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" }),
	about: () =>
		document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
	projects: () =>
		document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
	skills: () =>
		document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }),
	contact: () =>
		document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
};

export default function PageFooter() {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");
	const inputRef = useRef(null);

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			const cmd = input.trim().toLowerCase();
			if (!cmd) return;

			const action = COMMANDS[cmd];
			if (action) {
				action();
				setOutput("");
			} else {
				setOutput(`zsh: command not found: ${cmd}`);
			}
			setInput("");
		}
	};

	return (
		<footer
			className="border-t border-[#3e4a3c] w-full font-['JetBrains_Mono',monospace]"
			style={{ backgroundColor: "#0D1117" }}
		>
			<div className="flex flex-col px-4 md:px-12 py-3 max-w-[1200px] mx-auto w-full">
				<div className="flex items-center justify-between text-[13px] leading-[1.6]">
					<div className="flex items-center gap-0 min-w-0 cursor-text" onClick={() => inputRef.current?.focus()}>
						<span className="text-[#67df70] font-bold shrink-0">
							anurag@portfolio:~$
						</span>
						<span className="text-[#dde5d8]">{input}</span>
						<span className="text-[#67df70] animate-[blink_1s_step-start_infinite]">▋</span>
						<input
							ref={inputRef}
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={handleKeyDown}
							onFocus={() => setOutput("")}
							className="sr-only"
							aria-label="Terminal input"
							autoComplete="off"
							spellCheck="false"
						/>
					</div>
					<a
						href="#overview"
						className="text-[#bdcab8] hover:text-[#67df70] transition-colors no-underline shrink-0"
					>
						[ top ]
					</a>
				</div>
				{output && (
					<div className="text-[#ff7b72] text-[12px] leading-[1.4] mt-1">
						{output}
					</div>
				)}
			</div>
		</footer>
	);
}
