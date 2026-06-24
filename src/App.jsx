import { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import About from "./sections/About/About";
import ProjectsSection from "./sections/Projects/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact/Contact";
import PageFooter from "./components/PageFooter";
import emailjs from "@emailjs/browser";
import { publicKey, serviceId, templateId } from "./constants/emailjsconstants";

emailjs.init(publicKey);

const GITHUB_USER = "Anurag-Ranjan";

function App() {
	const [stats, setStats] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		let cancelled = false;

		const fetchStats = async () => {
			try {
				const [userRes, reposRes] = await Promise.all([
					fetch(`https://api.github.com/users/${GITHUB_USER}`),
					fetch(
						`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
					),
				]);

				if (!userRes.ok || !reposRes.ok)
					throw new Error("GitHub API request failed");

				const [userData, reposData] = await Promise.all([
					userRes.json(),
					reposRes.json(),
				]);

				const langCounts = {};
				reposData.forEach((r) => {
					if (r.language) {
						langCounts[r.language] = (langCounts[r.language] || 0) + 1;
					}
				});

				const totalLangRepos = Object.values(langCounts).reduce(
					(a, b) => a + b,
					0,
				);
				const topLangs = Object.entries(langCounts)
					.sort((a, b) => b[1] - a[1])
					.slice(0, 3)
					.map(([label, count]) => ({
						label,
						percent: Math.round((count / totalLangRepos) * 100),
					}));

				let totalCommits = 0;
				try {
					const commitRes = await fetch(
						`https://api.github.com/search/commits?q=author:${GITHUB_USER}`,
						{ signal: AbortSignal.timeout(5000) },
					);
					if (commitRes.ok) {
						const commitData = await commitRes.json();
						totalCommits = commitData.total_count;
					}
				} catch {
					// commit search can fail without auth
				}

				if (!cancelled) {
					setStats({
						publicRepos: userData.public_repos,
						totalCommits,
						topLangs,
					});
					setLoading(false);
				}
			} catch (err) {
				console.error("GitHub fetch error:", err);
				if (!cancelled) {
					// setStats({
					// 	publicRepos: 0,
					// 	totalCommits: 0,
					// 	topLangs: [],
					// });
					setLoading(false);
				}
			}
		};

		fetchStats();
		return () => {
			cancelled = true;
		};
	}, []);

	const handleSend = async (email, message) => {
		try {
			await emailjs.send(
				serviceId,
				templateId,
				{ from_email: email, message },
				publicKey,
			);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Header />
			<HeroSection />
			<About />
			<ProjectsSection />
			<Skills />
			<Contact stats={stats} loading={loading} onSend={handleSend} />
			<PageFooter />
		</>
	);
}

export default App;
