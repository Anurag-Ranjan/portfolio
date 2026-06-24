import TerminalWindow from "../components/TerminalWindow";
import { Badge, PrimaryBadge } from "../components/Badge";
import {
	siTypescript,
	siJavascript,
	siCplusplus,
	siPython,
	siReact,
	siNextdotjs,
	siVite,
	siTailwindcss,
	siHtml5,
	siCss,
	siNodedotjs,
	siExpress,
	siJsonwebtokens,
	siSocketdotio,
	siPostgresql,
	siMongodb,
	siMysql,
	siPrisma,
	siRedis,
	siJest,
	siDocker,
	siGit,
	siGithub,
	siLinux,
	siFirebase,
	siExpo,
} from "simple-icons";

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
							<span className="after:content-['▋'] after:animate-[blink_1s_step-start_infinite]" />
						</div>

						<div className="flex flex-col gap-8">
							<div>
								<h3 className="text-[#bdcab8] border-b border-[#3e4a3c] pb-2 mb-4 uppercase tracking-widest text-[11px] font-bold">
									Languages
								</h3>
								<div className="flex flex-wrap gap-3">
									<PrimaryBadge icon={siTypescript.path} iconColor={`#${siTypescript.hex}`}>[ TypeScript ]</PrimaryBadge>
									<PrimaryBadge icon={siJavascript.path} iconColor={`#${siJavascript.hex}`}>[ JavaScript ]</PrimaryBadge>
									<Badge icon={siCplusplus.path} iconColor={`#${siCplusplus.hex}`}>[ C++ ]</Badge>
									<PrimaryBadge icon={siPython.path} iconColor={`#${siPython.hex}`}>[ Python ]</PrimaryBadge>
									<Badge>[ Java ]</Badge>
								</div>
							</div>

							<div>
								<h3 className="text-[#bdcab8] border-b border-[#3e4a3c] pb-2 mb-4 uppercase tracking-widest text-[11px] font-bold">
									Frontend
								</h3>
								<div className="flex flex-wrap gap-3">
									<PrimaryBadge icon={siReact.path} iconColor={`#${siReact.hex}`}>[ React.js ]</PrimaryBadge>
									<Badge icon={siReact.path} iconColor={`#${siReact.hex}`}>[ React Native ]</Badge>
									<PrimaryBadge icon={siNextdotjs.path} iconColor={`#${siNextdotjs.hex}`}>[ Next.js ]</PrimaryBadge>
									<PrimaryBadge icon={siVite.path} iconColor={`#${siVite.hex}`}>[ Vite ]</PrimaryBadge>
									<PrimaryBadge icon={siTailwindcss.path} iconColor={`#${siTailwindcss.hex}`}>[ Tailwind CSS ]</PrimaryBadge>
									<Badge>[ NativeWind ]</Badge>
									<Badge icon={siHtml5.path} iconColor={`#${siHtml5.hex}`}>[ HTML ]</Badge>
									<Badge icon={siCss.path} iconColor={`#${siCss.hex}`}>[ CSS ]</Badge>
								</div>
							</div>

							<div>
								<h3 className="text-[#bdcab8] border-b border-[#3e4a3c] pb-2 mb-4 uppercase tracking-widest text-[11px] font-bold">
									Backend
								</h3>
								<div className="flex flex-wrap gap-3">
									<PrimaryBadge icon={siNodedotjs.path} iconColor={`#${siNodedotjs.hex}`}>[ Node.js ]</PrimaryBadge>
									<PrimaryBadge icon={siExpress.path} iconColor={`#${siExpress.hex}`}>[ Express.js ]</PrimaryBadge>
									<PrimaryBadge>[ REST APIs ]</PrimaryBadge>
									<Badge icon={siJsonwebtokens.path} iconColor={`#${siJsonwebtokens.hex}`}>[ JWT ]</Badge>
									<Badge icon={siSocketdotio.path} iconColor={`#${siSocketdotio.hex}`}>[ Socket.IO ]</Badge>
								</div>
							</div>

							<div>
								<h3 className="text-[#bdcab8] border-b border-[#3e4a3c] pb-2 mb-4 uppercase tracking-widest text-[11px] font-bold">
									Databases &amp; Cache
								</h3>
								<div className="flex flex-wrap gap-3">
									<PrimaryBadge icon={siPostgresql.path} iconColor={`#${siPostgresql.hex}`}>[ PostgreSQL ]</PrimaryBadge>
									<PrimaryBadge icon={siMongodb.path} iconColor={`#${siMongodb.hex}`}>[ MongoDB ]</PrimaryBadge>
									<Badge icon={siMysql.path} iconColor={`#${siMysql.hex}`}>[ MySQL ]</Badge>
									<Badge>[ SQL ]</Badge>
									<Badge icon={siPrisma.path} iconColor={`#${siPrisma.hex}`}>[ Prisma ORM ]</Badge>
									<PrimaryBadge icon={siRedis.path} iconColor={`#${siRedis.hex}`}>[ Redis ]</PrimaryBadge>
								</div>
							</div>

							<div>
								<h3 className="text-[#bdcab8] border-b border-[#3e4a3c] pb-2 mb-4 uppercase tracking-widest text-[11px] font-bold">
									Testing &amp; DevOps
								</h3>
								<div className="flex flex-wrap gap-3">
									<Badge icon={siJest.path} iconColor={`#${siJest.hex}`}>[ Jest ]</Badge>
									<PrimaryBadge icon={siDocker.path} iconColor={`#${siDocker.hex}`}>[ Docker ]</PrimaryBadge>
									<PrimaryBadge icon={siGit.path} iconColor={`#${siGit.hex}`}>[ Git ]</PrimaryBadge>
									<PrimaryBadge icon={siGithub.path} iconColor={`#${siGithub.hex}`}>[ GitHub ]</PrimaryBadge>
									<Badge>[ Version Control ]</Badge>
									<Badge icon={siLinux.path} iconColor={`#${siLinux.hex}`}>[ Linux ]</Badge>
								</div>
							</div>

							<div>
								<h3 className="text-[#bdcab8] border-b border-[#3e4a3c] pb-2 mb-4 uppercase tracking-widest text-[11px] font-bold">
									Other Tools
								</h3>
								<div className="flex flex-wrap gap-3">
									<Badge icon={siFirebase.path} iconColor={`#${siFirebase.hex}`}>[ Firebase ]</Badge>
									<Badge>[ OpenAI APIs ]</Badge>
									<Badge icon={siExpo.path} iconColor={`#${siExpo.hex}`}>[ Expo ]</Badge>
								</div>
							</div>

							<div>
								<h3 className="text-[#bdcab8] border-b border-[#3e4a3c] pb-2 mb-4 uppercase tracking-widest text-[11px] font-bold">
									Core CS
								</h3>
								<div className="flex flex-wrap gap-3">
									<PrimaryBadge>[ DSA ]</PrimaryBadge>
									<Badge>[ DBMS ]</Badge>
									<Badge>[ Operating Systems ]</Badge>
									<Badge>[ OOP ]</Badge>
									<Badge>[ Computer Networks ]</Badge>
								</div>
							</div>
						</div>

						<div className="mt-6">
							<span className="animate-[blink_1s_step-start_infinite] text-[#67df70] font-bold">_</span>
						</div>
					</div>
				</TerminalWindow>
			</main>
		</div>
	);
}
