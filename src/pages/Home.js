// Contact + menu

import './Home.scss';
import {data} from '../common/data';

function Home(props) {
  return (
    <div className="Home">
      <h1>Célian Raimbault : {data.hello}</h1>
      <button onClick={props.onChangeLang}>LANG</button>
    </div>
  );
}

export default Home;
