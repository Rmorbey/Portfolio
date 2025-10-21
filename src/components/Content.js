import Home from "./Home/Home";
import About from "./About/About";
import { LazySkills, LazyProjects, LazyOther } from "./LazyComponent";
import Footer from "./Footer";

const Content = ( {content} ) => {
	return (
		<div>
			<Home content={content[0]}/>
			<About content={content[1]}/>
			<LazySkills content={content[2]}/>
			<LazyProjects content={content[3]}/>
			<LazyOther content={content[4]}/>
			<Footer content={content[5]}/>
		</div>
	);
};
export default Content;