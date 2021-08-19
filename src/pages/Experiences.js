// Experiences

import './Experiences.scss';
import {experiences} from '../common/data';
import ExperienceCard from '../widgets/ExperienceCard';

function Experiences() {
  return (
    <div className="Experiences" id="experiences">
      <div className="experiences-content">
        {experiences.map((experience, i) =>
          <ExperienceCard key={i} experience={experience} index={i} />)}
      </div>
    </div>
  );
}

export default Experiences;
