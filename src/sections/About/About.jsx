import TerminalWindow from "../../components/TerminalWindow";

export default function About() {
	return (
		<div
			id="about"
			className="font-['JetBrains_Mono',monospace] text-[14px] leading-[1.5] antialiased flex flex-col relative"
			style={{ backgroundColor: "#0f150e", color: "#dde5d8" }}
		>
			<main className="flex-grow pt-28 pb-16 px-4 md:px-12 max-w-[1200px] mx-auto w-full flex flex-col">
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
			</main>
		</div>
	);
}
