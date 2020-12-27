// Horizontal dots transition

import './Dots.scss';

function Dots(props) {
  let npairs = 5;
  let dots = [];

  for (let i = 0; i < npairs; ++i) {
    dots.push(<div key={i * 2} className={"dot dot-" + props.leftColor}></div>);
    dots.push(<div key={i * 2 + 1} className={"dot dot-" + props.rightColor}></div>);
    console.log(i);
  }

  return (
    <div className="dots-wrapper">
      <div className="dots">
        {dots}
      </div>
    </div>
  );
}

export default Dots;
