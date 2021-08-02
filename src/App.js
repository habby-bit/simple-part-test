import React from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineCopyright } from 'react-icons/ai';
import { RiArrowDropDownLine, RiErrorWarningLine} from 'react-icons/ri';
import { MdLocationOn, MdEmail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';

import Make from './components/Make';
import Category from './components/Category';

const App = () => {
  return (
   <div>
      <p> Browse our complete catalog of OEM and licensed 
          British heritage parts for your classic British automobile. 
          | Kalamazoo, MI
      </p>

      <header class="website-link">
        <img id="logo" alt="" src="./files/logo.png"/>
        <h2>EnglishParts.com</h2>
        <div class="contact-details">
      
            <div class="contact location">
              <MdLocationOn />
              5850 Stadium Dr, Kalamazoo, MI 49009
            </div>
            <div class="contact phone">
              <FiPhone />
              866.467.1776
            </div>
            <div class="contact email">
              <a tabindex="0" class="small" href="#!!">
                <MdEmail />
                sales@englishparts.com
              </a>
            </div>
        </div>
        <ul>
          <li>
            Parts
            <RiArrowDropDownLine />
          </li>
          <li>
            About Us
            <RiArrowDropDownLine />
          </li>
        </ul>
      </header>

      <nav>
        <div class="search"> 
          <AiOutlineSearch />
          <input placeholder="Search by Keywords, Part Numbers or VIN"></input>
          <button>GO</button>
        </div>
        <div class="select">
          <div>
            Select Your Vehicle
            <RiArrowDropDownLine />
          </div>
        </div>
        <div class="cart">
          <AiOutlineShoppingCart />
          0
        </div>
      </nav>

      <a href="#!!" aria-label="">
        Welcome to EnglishParts.com, 
        your home for Jaguar, MG, Triumph and Austin Healey Parts!
      </a>

      <div class="jumbotron-top">
        <h1>
          Premium Austin Healey, Jaguar, MG, and Triumph Parts
        </h1>
        <p>
          Unmistakable style. That's what you love about your 
          Austin Healey, Jaguar, MG, or Triumph. At EnglishParts.com, 
          we carry a large selection of premium repair, maintenance 
          and restoration parts for classic British cars. You know 
          you can count on us because we're located in Kalamazoo, MI. 
          Finding the right premium repair parts has always been our 
          first priority. Our state of the art premium parts diagrams 
          ensure that you're getting the perfect part the first time. 
          Our experienced team knows these cars inside and out, and is 
          here to help. Excellence. The first time, every time.
        </p>
      </div>

      <div class="make">
        <h2>Select a Make</h2>
        <Make title="Austin Healey" src="./files/austin-healey.png" />
        <Make title="Jaguar" src="files/jaguar.png" />
        <Make title="MG" src="files/mg.png" />
        <Make title="Triumph" src="files/triumph.png" />
      </div>

      <div class="category">
        <h2>Select a Category</h2>
        <Category title="Body" src="./files/body.jpg"/>
        <Category title="Brake System" src="./files/brake-system.jpg"/>
        <Category title="Cables" src="./files/cables.jpg"/>
        <Category title="Car Care, Tools and Shop Supplies" src="./files/car-care.jpg"/>
        <Category title="Competition Parts" src="./files/competition-parts.jpg"/>
        <Category title="Convertible Tops, Hard Tops and Tonneau Covers" src="./files/top-covers.jpg"/>
        <Category title="Cooling System" src="./files/cooling.jpg"/>
        <Category title="Electrical Components" src="./files/electrical-components.jpg"/>
        <Category title="Engine and Driveline" src="./files/engine-driveline.jpg"/>
        <Category title="Exhaust and Emissions" src="./files/exhaust-emission.jpg"/>
        <Category title="Exterior" src="./files/exterior.jpg"/>
        <Category title="Fuel Systems" src="./files/fuel-system.jpg"/>
        <Category title="Interior" src="./files/interior.jpg"/>
        <Category title="Maintenance" src="./files/maintenance.jpg"/>
        <Category title="Oil System" src="./files/oil-system.jpg"/>
        <Category title="Performance & Handling" src="./files/performance-handling.jpg"/>
        <Category title="Suspension" src="./files/suspension.jpg"/>
        <Category title="Transmission, Gearbox and Clutch" src="./files/transmission.jpg"/>
      </div>

      <div class="jumbotron-bottom">
        <div class="about">
          <h3>About</h3>
          <ul>
              <li><a href="#!" title="Accepted Payment">Accepted Payment</a></li>
              <li><a href="#!" title="Contact Us">Contact Us</a></li>
              <li><a href="#!" title="Policies">Policies</a></li>
              <li><a href="#!" title="Refunds">Refunds</a></li>
              <li><a href="#!" title="Returns">Returns</a></li>
            </ul>
        </div>

        <div class="legal">
					<h3>Legal</h3>
					<ul>
						<li title="Policies"><a href="#!" title="Policies">Policies</a></li>
					</ul>
        </div>
					
				<div class="links">
					<h3>Links</h3>	
						<ul>
							<li><a href="#!" title="My Information">My Information</a></li>
							<li><a href="#!" title="Testimonials">Testimonials</a></li>
						</ul>
        </div>

        <div class="divider"></div>

        <p class="warning">
          <RiErrorWarningLine />
					While every reasonable effort is made to ensure the accuracy 
          of this data, we are not responsible for any errors or 
          omissions contained on these pages. Please verify any 
          information in question with a sales representative.
        </p>

      </div>

      <footer>
        <AiOutlineCopyright />
        <p>2021 EnglishParts.com</p>
        <p>Technology powered by 
          <span>Simple</span>
          <span>Part</span>
        </p>
          <div class="logoBox"></div>
          <div class="logoBox"></div>
          <div class="logoBox"></div>
        <p>SPWEB49</p>
      </footer>

   </div>
  );
}

export default App;
