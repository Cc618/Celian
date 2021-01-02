import './ProjectCard.scss';
import github from '../res/github_light.png';
import google_play from '../res/google_play_badge.png';

// TODO : View on github hint ?
// title tags icon image description trailing link
function ProjectCard(props) {
  return (
    <div className="project-wrapper">
      <div className="project-card" onClick={() => window.open(props.link)}>
        <div className="header">
          <h4>{props.title}</h4>
          <div className="spacer" />
          {props.tags.map((tag, i) => <p className="tag" key={i}>{tag}</p>)}
          <img src={props.icon} className="icon" alt="" />
        </div>
        <div className="image-wrapper">
          <img src={props.image} className="image" alt="" />
          <div className="image-fab-wrapper">
            <div className="image-fab">
              <img src={github} className="image-fab-icon" alt="" />
            </div>
          </div>
        </div>
        <p>{props.description}</p>
        { props.google_play !== undefined &&
          <div className="badge-wrapper">
            <img className="badge" src={google_play} alt="Google Play Link" onClick={() => window.open(props.google_play)} />
          </div> }
      </div>
    </div>
  );
}

export default ProjectCard;
