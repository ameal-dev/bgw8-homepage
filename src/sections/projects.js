import styled from "styled-components";
import PageWrapper from "/src/components/PageWrapper";
import Img from "../components/Img";
import wip from "/src/public/Images/project-images/wip.png";
import Text from "../components/Text";
import TextAnimation from "../components/text/TextAnimation";

const Projects = (props) => {
	return (
		<PageWrapper>
			<TextAnimation text1={"WORK IN PROGRESS"} text2={"ETA 2022"} />
			<Img src={wip} alt='Work In Progress' size={"300px"} />
		</PageWrapper>
	);
};
export default Projects;
