function TechBadge({ label }) {
	return (
		<span className="px-2 py-1 border border-[#30363D] rounded-[0.125rem] text-[11px] leading-[1.6] font-['JetBrains_Mono',monospace] text-[#dde5d8]">
			{label}
		</span>
	);
}

function FeatureItem({ text }) {
	return (
		<li className="flex items-start gap-2 text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace] text-[#dde5d8]">
			<span className="text-[#67df70] mt-0.5">›</span>
			<span>{text}</span>
		</li>
	);
}

export default function ProjectsSection() {
	return (
		<div
			id="projects"
			className="font-['JetBrains_Mono',monospace] text-[14px] leading-[1.5] antialiased flex flex-col"
			style={{ backgroundColor: "#0D1117", color: "#dde5d8" }}
		>
			<div className="pt-28 pb-16 px-4 md:px-12 max-w-[1200px] mx-auto w-full">
				<div className="mb-6 text-[13px] leading-[1.6] flex items-center gap-2">
					<span className="text-[#67df70] font-bold">
						anurag@portfolio:~$
					</span>
					<span className="text-[#dde5d8]">ls projects</span>
					<span className="w-2 h-4 bg-[#67df70] animate-pulse inline-block align-middle ml-1" />
				</div>

				<div className="grid grid-cols-1 xl:grid-cols-2 gap-[16px] mb-16">
					<div
						className="group flex flex-col rounded-[0.125rem] border border-[#30363D] hover:border-[#879484] transition-colors duration-300"
						style={{ backgroundColor: "#161B22" }}
					>
						<div
							className="px-4 py-2 flex items-center justify-between rounded-t-[0.125rem] border-b border-[#30363D]"
							style={{ backgroundColor: "#21262D" }}
						>
							<div className="flex gap-1.5">
								<div className="w-3 h-3 rounded-[0.75rem] bg-[#FF5F56]" />
								<div className="w-3 h-3 rounded-[0.75rem] bg-[#FFBD2E]" />
								<div className="w-3 h-3 rounded-[0.75rem] bg-[#27C93F]" />
							</div>
							<span className="text-[11px] leading-[1.6] font-['JetBrains_Mono',monospace] text-[#bdcab8]">
								~/projects/inductly.sh
							</span>
							<div className="w-10" />
						</div>

						<div className="p-6 flex-1 flex flex-col">
							<div className="flex justify-between items-start mb-4">
								<div>
									<h3 className="text-[24px] leading-[1.2] font-semibold md:text-[20px] md:leading-[1.4] md:font-semibold text-[#dde5d8] mb-1 group-hover:text-[#67df70] transition-colors">
										Inductly
									</h3>
									<p className="text-[14px] leading-[1.5] text-[#bdcab8]">
										Recruitment Management Platform
									</p>
								</div>
								<div className="flex gap-2">
									<a
										href="#"
										aria-label="GitHub Repository"
										className="p-2 border border-[#30363D] rounded-[0.125rem] text-[#bdcab8] hover:text-[#67df70] hover:border-[#67df70] transition-all"
									>
										<span className="material-symbols-outlined text-[18px]">
											code
										</span>
									</a>
									<a
										href="#"
										aria-label="Live Demo"
										className="p-2 border border-[#30363D] rounded-[0.125rem] text-[#bdcab8] hover:text-[#67df70] hover:border-[#67df70] transition-all"
									>
										<span className="material-symbols-outlined text-[18px]">
											open_in_new
										</span>
									</a>
								</div>
							</div>

							<p className="text-[14px] leading-relaxed text-[#dde5d8] mb-6">
								A comprehensive club induction management platform
								streamlining the recruitment process with multi-stage
								workflows, dynamic forms, and role-based access control.
								Built for scale and operational efficiency.
							</p>

							<div className="mb-6">
								<h4 className="text-[12px] leading-none tracking-[0.05em] font-medium text-[#bdcab8] mb-3 uppercase">
									Key Features
								</h4>
								<ul className="space-y-2">
									<FeatureItem text="Multi-stage recruitment workflow automation" />
									<FeatureItem text="Dynamic customizable application forms" />
									<FeatureItem text="Granular Role-Based Access Control (RBAC)" />
									<FeatureItem text="Real-time collaborative candidate evaluation" />
								</ul>
							</div>

							<div className="mt-auto">
								<h4 className="text-[12px] leading-none tracking-[0.05em] font-medium text-[#bdcab8] mb-3 uppercase">
									Tech Stack
								</h4>
								<div className="flex flex-wrap gap-2">
									{[ "[ React ]", "[ Node.js ]", "[ PostgreSQL ]", "[ Redis ]", "[ BullMQ ]", "[ Docker ]" ].map((t) => (
										<TechBadge key={t} label={t} />
									))}
								</div>
							</div>
						</div>
					</div>

					<div
						className="group flex flex-col rounded-[0.125rem] border border-[#30363D] hover:border-[#879484] transition-colors duration-300"
						style={{ backgroundColor: "#161B22" }}
					>
						<div
							className="px-4 py-2 flex items-center justify-between rounded-t-[0.125rem] border-b border-[#30363D]"
							style={{ backgroundColor: "#21262D" }}
						>
							<div className="flex gap-1.5">
								<div className="w-3 h-3 rounded-[0.75rem] bg-[#FF5F56]" />
								<div className="w-3 h-3 rounded-[0.75rem] bg-[#FFBD2E]" />
								<div className="w-3 h-3 rounded-[0.75rem] bg-[#27C93F]" />
							</div>
							<span className="text-[11px] leading-[1.6] font-['JetBrains_Mono',monospace] text-[#bdcab8]">
								~/projects/attendx.sh
							</span>
							<div className="w-10" />
						</div>

						<div className="p-6 flex-1 flex flex-col">
							<div className="flex justify-between items-start mb-4">
								<div>
									<h3 className="text-[24px] leading-[1.2] font-semibold md:text-[20px] md:leading-[1.4] md:font-semibold text-[#dde5d8] mb-1 group-hover:text-[#67df70] transition-colors">
										AttendX
									</h3>
									<p className="text-[14px] leading-[1.5] text-[#bdcab8]">
										Geofencing-Based Attendance System
									</p>
								</div>
								<div className="flex gap-2">
									<a
										href="#"
										aria-label="GitHub Repository"
										className="p-2 border border-[#30363D] rounded-[0.125rem] text-[#bdcab8] hover:text-[#67df70] hover:border-[#67df70] transition-all"
									>
										<span className="material-symbols-outlined text-[18px]">
											code
										</span>
									</a>
									<a
										href="#"
										aria-label="Live Demo"
										className="p-2 border border-[#30363D] rounded-[0.125rem] text-[#bdcab8] hover:text-[#67df70] hover:border-[#67df70] transition-all"
									>
										<span className="material-symbols-outlined text-[18px]">
											open_in_new
										</span>
									</a>
								</div>
							</div>

							<p className="text-[14px] leading-relaxed text-[#dde5d8] mb-6">
								A React Native mobile app for automated, fraud-resistant
								attendance tracking using GPS geofencing. Eliminates manual
								roll calls and proxy attendance with location-verified
								check-ins backed by a robust backend.
							</p>

							<div className="mb-6">
								<h4 className="text-[12px] leading-none tracking-[0.05em] font-medium text-[#bdcab8] mb-3 uppercase">
									Key Features
								</h4>
								<ul className="space-y-2">
									<FeatureItem text="GPS geofencing for location-verified check-ins" />
									<FeatureItem text="Automated session management with Redis TTL" />
									<FeatureItem text="Real-time attendance dashboards for faculty" />
									<FeatureItem text="Proxy attendance prevention via device binding" />
								</ul>
							</div>

							<div className="mt-auto">
								<h4 className="text-[12px] leading-none tracking-[0.05em] font-medium text-[#bdcab8] mb-3 uppercase">
									Tech Stack
								</h4>
								<div className="flex flex-wrap gap-2">
									{[ "[ React Native ]", "[ Expo ]", "[ Node.js ]", "[ PostgreSQL ]", "[ Redis ]" ].map((t) => (
										<TechBadge key={t} label={t} />
									))}
								</div>
							</div>
						</div>
					</div>

					<div
						className="flex flex-col rounded-[0.125rem] border border-[#30363D] opacity-50 relative cursor-not-allowed"
						style={{ backgroundColor: "#161B22" }}
					>
						<div
							className="absolute inset-0 flex items-center justify-center z-10 rounded-[0.125rem] backdrop-blur-[2px]"
							style={{ backgroundColor: "rgba(15,21,14,0.3)" }}
						>
							<span
								className="text-[13px] leading-[1.6] font-['JetBrains_Mono',monospace] border border-[#3e4a3c] px-4 py-2 rounded-[0.125rem] text-[#bdcab8]"
								style={{ backgroundColor: "#1b2119" }}
							>
								IN DEVELOPMENT
							</span>
						</div>

						<div
							className="px-4 py-2 flex items-center justify-between rounded-t-[0.125rem] border-b border-[#30363D]"
							style={{ backgroundColor: "#21262D" }}
						>
							<div className="flex gap-1.5">
								<div className="w-3 h-3 rounded-[0.75rem] bg-[#30363D]" />
								<div className="w-3 h-3 rounded-[0.75rem] bg-[#30363D]" />
								<div className="w-3 h-3 rounded-[0.75rem] bg-[#30363D]" />
							</div>
							<span className="text-[11px] leading-[1.6] font-['JetBrains_Mono',monospace] text-[#bdcab8]">
								~/projects/next_gen.sh
							</span>
							<div className="w-10" />
						</div>

						<div className="p-6 flex-1 flex flex-col">
							<div className="h-6 w-1/3 bg-[#30372e] rounded-[0.125rem] mb-2" />
							<div className="h-4 w-1/2 bg-[#30372e] rounded-[0.125rem] mb-8" />
							<div className="space-y-2 mb-6">
								<div className="h-3 w-full bg-[#30372e] rounded-[0.125rem]" />
								<div className="h-3 w-5/6 bg-[#30372e] rounded-[0.125rem]" />
								<div className="h-3 w-4/6 bg-[#30372e] rounded-[0.125rem]" />
							</div>
							<div className="mt-auto flex gap-2">
								<div className="h-6 w-16 bg-[#30372e] rounded-[0.125rem]" />
								<div className="h-6 w-16 bg-[#30372e] rounded-[0.125rem]" />
								<div className="h-6 w-16 bg-[#30372e] rounded-[0.125rem]" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
