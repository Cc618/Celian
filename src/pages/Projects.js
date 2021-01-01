// Projects + footer

import './Projects.scss';
import {data, resources} from '../common/data';
import Dots from '../widgets/Dots';
import ProjectCard from '../widgets/ProjectCard';
import github from '../res/github_light.png';

// TODO : Add used languages section ?

// Creates a project widget
function mkProject(content, key) {
  return (<ProjectCard
    key={key}
    title={content.title}
    tags={content.tags}
    icon={resources[content.icon]}
    image={resources[content.image]}
    description={content.description}
    link={content.link} />);
};

function Projects(props) {
  return (
    <div className="Projects" id="projects">
      <div className="bg bg-grey">
          { data.projects_data.slice(0, 2).map((content, i) => mkProject(content, i)) }
      </div>
      <Dots leftColor="accent" rightColor="grey" />
      <div className="bg bg-accent">
        { data.projects_data.slice(2).map((content, i) => mkProject(content, i)) }
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
