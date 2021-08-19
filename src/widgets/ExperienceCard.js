import './ExperienceCard.scss';
import Popup from '../widgets/Popup';
import App from '../pages/App';
import {data, lang} from '../common/data';

function ExperienceCard(props) {
  return (
    <div className="ExperienceCard">
      <p className="experience-out experience-year print-rm">{props.experience.year}</p>
      <div className="experience-card">
        <h4>{props.experience.title}</h4>
        <div className="experience-card-content">
          <div className="content">
            <div className="content-title">
              <h3 className="print-experience-year print-add">{props.experience.year}</h3>
            </div>
            <p dangerouslySetInnerHTML={{__html: props.experience[`content_${lang}`]}}></p>
          </div>
          <div className="experience-button-wrapper print-rm">
            <div className="experience-button">
              <div className="button" onClick={() => {
                App.showPopup(<Popup title={props.experience.title} content={
                    <div>
                      <h2>{props.experience.description}</h2>
                      <h3>{data.personal_contributions}</h3>
                      <p dangerouslySetInnerHTML={{__html: props.experience.personal_contributions}} />
                      <h3>{data.professional_contributions}</h3>
                      <p dangerouslySetInnerHTML={{__html: props.experience.professional_contributions}} />
                      <h3>{data.technologies}</h3>
                      <p dangerouslySetInnerHTML={{__html: props.experience.technologies}} />
                    </div>
                  } />);
              }}>
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
    </div>
  );
}

export default ExperienceCard;
