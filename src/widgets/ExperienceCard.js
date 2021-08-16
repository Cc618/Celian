import './ExperienceCard.scss';
import {data, resources} from '../common/data';
import Bar from '../widgets/Bar';

// TODO : tr
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
        <div className="experience-button-wrapper">
          <div className="experience-button">
            {/* TODO : Click */}
            <div className="button" onClick={() => {}}>
              <i className="material-icons">notes</i>
            </div>
          </div>

          {/* Hint */}
          <div className="hint">
            <div className="hint-wrapper">
              <div className="hint-card">
                <p>Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
