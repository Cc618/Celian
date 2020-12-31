// Projects + footer

import './Projects.scss';
import {data} from '../common/data';
import Dots from '../widgets/Dots';
import github from '../res/github_light.png';
import dart from '../res/flutter.png';
import quick_shop from '../res/quick_shop.jpg';
import google_play_badge from '../res/google_play_badge.png';

// title tags icon image description trailing
function ProjectCard(props) {
  return (
    <div className="project-wrapper">
      <div className="project-card">
        <div className="header">
          <h4>{props.title}</h4>
          {props.tags.map((tag, i) => <p className="tag" key={i}>{tag}</p>)}
          <img src={props.icon} className="icon" />
        </div>
        <img src={props.image} />
        <p>{props.description}</p>
        {/* TODO : trailing : props.trailing !== undefined && */}
      </div>
    </div>
  );
}

function Projects(props) {
  // TODO : rm
  let description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  return (
    <div className="Projects" id="projects">
      <div className="bg bg-grey">

        {/* TODO : Translate */}
        <ProjectCard title="Quick-Shop" tags={["Flutter", "Mobile App"]}
          icon={dart} image={quick_shop} description={description} />

        <div className="project-wrapper">
          <div className="project-card">

          </div>
        </div>

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
