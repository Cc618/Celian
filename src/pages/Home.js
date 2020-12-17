// Contact + menu

import './Home.scss';
import {data} from '../common/data';
import picture from '../res/picture.jpg';

function Home(props) {
  // TODO : Lang
  return (
    <div className="Home">
      <header>
          {/* TODO : Github, Linkedin... + Make class */}
        <button class="icon-card">
          <i class="material-icons">call</i>
        </button>
        {/* <div class="icon-card">
          <span class="material-icons">mail</span>
        </div> */}
      </header>

      <div class="content">
        <div class="picture-card">
          <img alt="" class="picture" src={picture} />
        </div>

        <h1>Célian Raimbault</h1>
        <h2>{data.job}</h2>
      </div>
    </div>
  );
}

export default Home;
