// Contact + menu

import './Home.scss';
import {data} from '../common/data';

function Home(props) {
  // TODO : Lang
  return (
    <div className="Home">
      <h1>Célian Raimbault</h1>
      <h2>{data.job}</h2>
    </div>
  );
}

export default Home;
