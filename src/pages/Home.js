// Contact + menu

import './Home.scss';
import {data} from '../common/data';
import picture from '../res/picture.jpg';

function Home(props) {
  // TODO : Lang
  return (
    <div className="Home">
      <header>
        <i class="material-icons">call</i>
      </header>

      <div class="picture-card">
        <img class="picture" src={picture} />
      </div>

      <h1>Célian Raimbault</h1>
      <h2>{data.job}</h2>
    </div>
  );
}

export default Home;
