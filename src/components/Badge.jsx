import { useState } from "react";

export function PrimaryBadge({ children, icon, iconColor }) {
	return (
		<span
			className="px-3 py-2 border text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace] flex flex-col items-center justify-center gap-1.5 min-w-[80px] text-center cursor-pointer transition-all duration-200 hover:scale-105"
			style={{
				color: "#67df70",
				borderColor: "rgba(103,223,112,0.5)",
				backgroundColor: "rgba(103,223,112,0.05)",
			}}
		>
			{icon && (
				<svg role="img" viewBox="0 0 24 24" width="20" height="20" fill={iconColor || "#67df70"}>
					<path d={icon} />
				</svg>
			)}
			<span>{children}</span>
		</span>
	);
}

export function Badge({ children, icon, iconColor }) {
	const [hovered, setHovered] = useState(false);
	return (
		<span
			className="px-3 py-2 border border-[#30363D] text-[#dde5d8] text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace] flex flex-col items-center justify-center gap-1.5 min-w-[80px] text-center cursor-pointer transition-all duration-200 hover:scale-105"
			style={{
				backgroundColor: hovered ? "#30363D" : "transparent",
			}}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{icon && (
				<svg role="img" viewBox="0 0 24 24" width="20" height="20" fill={iconColor || "#dde5d8"}>
					<path d={icon} />
				</svg>
			)}
			<span>{children}</span>
		</span>
	);
}
