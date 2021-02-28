// Projects + footer

import './Projects.scss';
import {data, resources} from '../common/data';
import Dots from '../widgets/Dots';
import ProjectCard from '../widgets/ProjectCard';
import github from '../res/github_light.png';
import html from '../res/html5.png';
import css from '../res/css3.png';
import reactjs from '../res/react.svg';
import App from './App';

// Creates a project widget
function mkProject(content, key) {
  return (<ProjectCard
    key={key}
    title={content.title}
    tags={content.tags}
    icon={resources[content.icon]}
    image={resources[content.image]}
    description={content.description}
    google_play={content.google_play}
    link={content.link} />);
};

function Projects(props) {
  if (App.printMode)
    return <div className="Projects" id="projects">
      <div className="bg bg-grey">
        { data.projects_data.map((content, i) => mkProject(content, i)) }
      </div>
    </div>;

  return (
    <div className="Projects" id="projects">
      <div className="bg bg-grey">
          { data.projects_data.slice(0, 2).map((content, i) => mkProject(content, i)) }
      </div>
      <Dots leftColor="accent" rightColor="grey" />
      <div className="bg bg-secondary bg-next">
        { data.projects_data.slice(2, 4).map((content, i) => mkProject(content, i)) }
      </div>
      <Dots leftColor="grey" rightColor="accent" />
      <div className="bg bg-grey bg-next">
        { data.projects_data.slice(4).map((content, i) => mkProject(content, i)) }
      </div>
      <Dots leftColor="black" rightColor="grey" />
      <div className="footer-spacer" />
      <footer>
        <div>
          <a href={data.url_resume_github}><img className="github" src={github} alt="" /></a>
        </div>

        <div>
          <h4>{data.copyright.name}</h4>
          <h4 className="subtitle">{data.copyright.year}</h4>
        </div>

        <div className="made-with">
          <div className="spacer" />
          <p>{data.made_with}</p>
          <img src={html} alt="html5" />
          <img src={css} alt="css3" />
          <img src={reactjs} alt="React JS" />
          <i className="material-icons info-copyright"
            onClick={() => alert(data.resources_copyright)}>copyright</i>
        </div>
      </footer>
    </div>
  );
}

export default Projects;
