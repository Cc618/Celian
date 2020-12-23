// TODO : Stateful
// TODO : Language skill card

import './SkillCard.scss';

function SkillCard(props) {
  // TODO
  let skill = props.skill;
  return (
    <div className="SkillCard">
      <div className="skill-card">
        <div className="decoration" />
        <div className="content">
          <h4>{skill.title}</h4>
          <ul>
            { skill.items.map((s) => ( <li key={s}>{s}</li> )) }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
