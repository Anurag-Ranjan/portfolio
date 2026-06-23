export function PrimaryBadge({ children }) {
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

export function Badge({ children }) {
	return (
		<span className="px-2 py-1 border border-[#30363D] text-[#dde5d8] text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace]">
			{children}
		</span>
	);
}
