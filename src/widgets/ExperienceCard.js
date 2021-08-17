import './ExperienceCard.scss';
import Popup from '../widgets/Popup';
import App from '../pages/App';

// TODO : tr
function ExperienceCard(props) {
  return (
    <div className="ExperienceCard">
      <p className="experience-out experience-year">{props.experience.year}</p>
      <div className="experience-card">
        <div className="content">
          <h4>{props.experience.title}</h4>
          <p dangerouslySetInnerHTML={{__html: props.experience.content}}></p>
        </div>
        <div className="experience-button-wrapper">
          <div className="experience-button">
            <div className="button" onClick={() => {
              // TODO : Tr
              App.showPopup(<Popup title={props.experience.title} content={
                  <div>
                    <h2>{props.experience.description}</h2>
                    <h3>Apports Personnels</h3>
                    <p dangerouslySetInnerHTML={{__html: props.experience.personal_contributions}} />
                    <h3>Apports Professionnels</h3>
                    <p dangerouslySetInnerHTML={{__html: props.experience.professional_contributions}} />
                    <h3>Technologies</h3>
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
  );
}

export default ExperienceCard;
