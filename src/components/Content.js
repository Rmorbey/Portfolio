import Home from "./Home/Home";
import About from "./About/About";
import Skills from './Skills/Skills';
import Projects from "./Projects/Projects";
import Other from "./Other/Other";
import Footer from "./Footer";

const Content = ( data ) => {
	return (
		<div>
			{/* <Home content={data[0]}/>
			<About content={data[1]}/>
			<Skills content={data[2]}/>
			<Projects content={data[3]}/>
			<Other content={data[4]}/>
			<Footer content={data[5]}/> */}
			<Home />
			<About />
			<Skills />
			<Projects />
			<Other />
			<Footer />
		</div>
	);
};
export default Content;