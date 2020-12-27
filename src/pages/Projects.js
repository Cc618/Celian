// Projects + footer

import './Projects.scss';
import {data} from '../common/data';
import Dots from '../widgets/Dots';
import github from '../res/github_light.png';

function Projects(props) {
  return (
    <div className="Projects" id="projects">
      <div className="bg-grey"></div>
      <Dots leftColor="accent" rightColor="grey" />
      <div className="bg-accent"></div>
      <Dots leftColor="black" rightColor="accent" />
      <footer>
        {/* TODO : Link to current github */}
        <a href="https://github.com/Cc618"><img className="github" src={github} /></a>
        <h4>{data.copyright}</h4>
        <p>Made with...</p>
      </footer>
    </div>
  );
}

export default Projects;
