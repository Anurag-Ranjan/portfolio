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
					<span className="text-[#67df70] font-bold">anurag@portfolio:~$</span>
					<span className="text-[#dde5d8]">ls projects</span>
					<span className="w-2 h-4 bg-[#67df70] animate-pulse inline-block align-middle ml-1" />
				</div>

				<div className="grid grid-cols-1 xl:grid-cols-2 gap-[16px] mb-16">
					<div
						className="group flex flex-col rounded-[0.125rem] border border-[#30363D] hover:border-[#879484] transition-colors duration-300 xl:col-span-2"
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
										href="https://github.com/Anurag-Ranjan/inductly"
										target="_blank"
										rel="noopener noreferrer"
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
								A comprehensive club induction management platform streamlining
								the recruitment process with multi-stage workflows, dynamic
								forms, and role-based access control. Built for scale and
								operational efficiency.
							</p>

							<div className="mb-6">
								<h4 className="text-[12px] leading-none tracking-[0.05em] font-medium text-[#bdcab8] mb-3 uppercase">
									Key Features
								</h4>
								<ul className="space-y-2">
									<FeatureItem text="Multi-stage recruitment workflow" />
									<FeatureItem text="Dynamic customizable application forms" />
									<FeatureItem text="Granular Role-Based Access Control (RBAC)" />
									<FeatureItem text="Real-time analytics dashboards" />
								</ul>
							</div>

							<div className="mt-auto">
								<h4 className="text-[12px] leading-none tracking-[0.05em] font-medium text-[#bdcab8] mb-3 uppercase">
									Tech Stack
								</h4>
								<div className="flex flex-wrap gap-2">
									{[
										"[ React ]",
										"[ Node.js ]",
										"[ PostgreSQL ]",
										"[ Redis ]",
										"[ BullMQ ]",
										"[ Docker ]",
										"[ Jest ]",
									].map((t) => (
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
										href="https://github.com/Bytebrigade-AttendX/attendance-backend"
										target="_blank"
										rel="noopener noreferrer"
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
								attendance tracking using GPS geofencing. Eliminates manual roll
								calls and proxy attendance with location-verified check-ins
								backed by a robust backend.
							</p>

							<div className="mb-6">
								<h4 className="text-[12px] leading-none tracking-[0.05em] font-medium text-[#bdcab8] mb-3 uppercase">
									Key Features
								</h4>
								<ul className="space-y-2">
									<FeatureItem text="GPS geofencing for location-verified attendances" />
									<FeatureItem text="Automated session management with Redis" />
									<FeatureItem text="Real-time attendance dashboards for faculty" />
								</ul>
							</div>

							<div className="mt-auto">
								<h4 className="text-[12px] leading-none tracking-[0.05em] font-medium text-[#bdcab8] mb-3 uppercase">
									Tech Stack
								</h4>
								<div className="flex flex-wrap gap-2">
									{[
										"[ React Native ]",
										"[ Expo ]",
										"[ Node.js ]",
										"[ PostgreSQL ]",
										"[ Redis ]",
									].map((t) => (
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
								~/projects/chatty.sh
							</span>
							<div className="w-10" />
						</div>

						<div className="p-6 flex-1 flex flex-col">
							<div className="flex justify-between items-start mb-4">
								<div>
									<h3 className="text-[24px] leading-[1.2] font-semibold md:text-[20px] md:leading-[1.4] md:font-semibold text-[#dde5d8] mb-1 group-hover:text-[#67df70] transition-colors">
										Chatty
									</h3>
									<p className="text-[14px] leading-[1.5] text-[#bdcab8]">
										Real-Time Chat Application
									</p>
								</div>
								<div className="flex gap-2">
									<a
										href="https://github.com/Anurag-Ranjan/Chatty"
										target="_blank"
										rel="noopener noreferrer"
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
								Built a real-time MERN-stack chat application with Socket.IO,
								achieving message delivery latency as low as 5ms, secure JWT
								authentication, anonymous chatting, and customizable themes.
							</p>

							<div className="mb-6">
								<h4 className="text-[12px] leading-none tracking-[0.05em] font-medium text-[#bdcab8] mb-3 uppercase">
									Key Features
								</h4>
								<ul className="space-y-2">
									<FeatureItem text="Real-time messaging with Socket.IO (5ms latency)" />
									<FeatureItem text="Secure JWT authentication" />
									<FeatureItem text="Anonymous chatting with customizable themes" />
									<FeatureItem text="Advanced chat retrieval with online/offline status & unread tracking" />
									<FeatureItem text="Blocked-user management & scalable REST APIs" />
								</ul>
							</div>

							<div className="mt-auto">
								<h4 className="text-[12px] leading-none tracking-[0.05em] font-medium text-[#bdcab8] mb-3 uppercase">
									Tech Stack
								</h4>
								<div className="flex flex-wrap gap-2">
									{[
										"[ MongoDB ]",
										"[ Express.js ]",
										"[ React.js ]",
										"[ Node.js ]",
										"[ Socket.IO ]",
										"[ JWT ]",
										"[ Vite ]",
									].map((t) => (
										<TechBadge key={t} label={t} />
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
