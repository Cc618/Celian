// Projects + footer

import './Projects.scss';
import {data} from '../common/data';
import Dots from '../widgets/Dots';
import ProjectCard from '../widgets/ProjectCard';
import github from '../res/github_light.png';
import dart from '../res/flutter.png';
// TODO : C not C++ icon
import c from '../res/cpp.png';
import cpp from '../res/cpp.png';
import python from '../res/python.png';
import julia from '../res/julia.png';
import quick_shop from '../res/quick_shop.jpg';
import os2020 from '../res/os2020.gif';
import google_play_badge from '../res/google_play_badge.png';

// TODO : Add used languages section ?

function Projects(props) {
  // TODO : rm
  let description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  return (
    <div className="Projects" id="projects">
      <div className="bg bg-grey">

        {/* TODO : Translate */}
        <ProjectCard title="Quick-Shop" tags={["Flutter", "Mobile App"]}
          icon={dart} image={quick_shop} description={description}
          link="https://github.com/Cc618/Quick-Shop" />

        <ProjectCard title="Os2020" tags={["C", "Assembly", "OS"]}
          icon={c} image={os2020} description={description}
          link="https://github.com/Cc618/Os2020" />

      </div>
      <Dots leftColor="accent" rightColor="grey" />
      <div className="bg bg-accent">

        <div className="project-wrapper">
          <div className="project-card">

          </div>
        </div>

        <div className="project-wrapper">
          <div className="project-card">

          </div>
        </div>

        <div className="project-wrapper">
          <div className="project-card">

          </div>
        </div>

        <div className="project-wrapper">
          <div className="project-card">

          </div>
        </div>

      </div>
      <Dots leftColor="black" rightColor="accent" />
      <footer>
        {/* TODO : Link to current github */}
        <a href="https://github.com/Cc618"><img className="github" src={github} alt="" /></a>
        <h4>{data.copyright}</h4>
        <div>
          {/* TODO : Images */}
          <p>{data.made_with} HTML, CSS & React</p>
        </div>
      </footer>
    </div>
  );
}

export default Projects;
