import './styles/home.css';
import banner from '../assets/top-banner.jpg';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home page">
      <img className="main-img" src="/images/wrap2.jpg" alt=""></img>

      <div className="home-text">
        <h1>Organika</h1>
        <h3>Fresh food, healthier life.</h3>
      </div>

      <div className="section-2">
        <div className="info">
          <h3>Always fresh at your door</h3>
          <p>Check out extensive catalog of fresh products 1-click away from your table.</p>
          <hr />
          <Link className='btn btn-lg btn-success' to="/catalog">
            Check our amazing catalog
          </Link>
        </div>
        <img src="/images/farmer.jpg" alt=""></img>
      </div>


      <div className="relative">
        <img className="main-img" src={banner} alt=""></img>

        <div className="over-img">
          <h3>From the Fields to your table.</h3>
        </div>
      </div>

    </div>
  );
}

export default Home;


/**
 * 
 * Create a Cart page
 * 
 * create a route on app.js for /cart
 * 
 * 
 * put a link on the right side of navbar
 * to navigate to the Cart page
 * 
 */