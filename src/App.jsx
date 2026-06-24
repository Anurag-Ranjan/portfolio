import Header from "./components/Header";
import HeroSection from "./sections/HeroSection";
import About from "./sections/About/About";
import ProjectsSection from "./sections/Projects/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact/Contact";
import PageFooter from "./components/PageFooter";

function App() {
	return (
		<>
			<Header />
			<HeroSection />
			<About />
			<ProjectsSection />
			<Skills />
			<Contact />
			<PageFooter />
		</>
	);
}

export default App;
