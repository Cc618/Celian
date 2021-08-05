import './ExperienceCard.scss';
import {data, resources} from '../common/data';
import Bar from '../widgets/Bar';

function ExperienceCard(props) {
  return (
    <div className="ExperienceCard">
      <p className="experience-out experience-year">{props.experience.year}</p>
      <div className="experience-card">
        {/* TODO */}
        <div className="decoration" />
        <div className="content">
          <h4>{props.experience.title}</h4>
          <p dangerouslySetInnerHTML={{__html: props.experience.content}}></p>
        </div>
        <div className="experience-button">
          {/* TODO : Icon */}
          <p className="title">PLUS</p>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
