// TODO : Stateful
// TODO : Language skill card

import './SkillCard.scss';

function SkillCard(props) {
  // TODO
  let items = ['1', '2', '3'];
  return (
    <div className="SkillCard">
      <h4>{props.title}</h4>
      <ul>
          { items.map((s) => ( <li>{s}</li> )) }
      </ul>
    </div>
  );
}

export default SkillCard;
