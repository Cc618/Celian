// Projects + footer

import './Projects.scss';
import {data} from '../common/data';
import Dots from '../widgets/Dots';

function Projects(props) {
  return (
    <div className="Projects" id="projects">
      <div className="bg-grey"></div>
      <Dots leftColor="accent" rightColor="grey" />
      <div className="bg-accent"></div>
      <Dots leftColor="black" rightColor="accent" />
      <footer></footer>
    </div>
  );
}

export default Projects;
