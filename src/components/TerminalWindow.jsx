export default function TerminalWindow({ title, children }) {
	return (
		<section
			className="bg-[#161B22] rounded-[0.25rem] overflow-hidden shadow-lg"
			style={{ border: "1px solid #30363D" }}
		>
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
