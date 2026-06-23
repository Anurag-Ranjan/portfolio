import TerminalWindow from "../components/TerminalWindow";
import { Badge, PrimaryBadge } from "../components/Badge";

export default function Skills() {
	return (
		<div
			id="skills"
			className="font-['JetBrains_Mono',monospace] text-[14px] leading-[1.5] antialiased flex flex-col relative"
			style={{ backgroundColor: "#0f150e", color: "#dde5d8" }}
		>
			<main className="flex-grow pt-28 pb-16 px-4 md:px-12 max-w-[1200px] mx-auto w-full flex flex-col">
				<TerminalWindow title="~/portfolio/skills">
					<div className="p-6 text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace]">
						<div className="mb-6">
							<span className="text-[#67df70] font-bold">
								anurag@portfolio:~$
							</span>
							<span className="text-[#dde5d8]"> skills --list</span>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
