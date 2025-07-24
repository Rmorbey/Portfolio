import Home from "./Home/Home";
import About from "./About/About";
import Skills from './Skills/Skills';
import Projects from "./Projects/Projects";
import Other from "./Other/Other";
import Footer from "./Footer";

const Content = ( {content} ) => {
	return (
		<div>
			<Home content={content[0]}/>
			<About content={content[1]}/>
			<Skills content={content[2]}/>
			<Projects content={content[3]}/>
			<Other content={content[4]}/>
			<Footer content={content[5]}/>
		</div>
	);
};
export default Content;