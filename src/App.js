import React from 'react';
import { RiArrowDropDownLine, RiErrorWarningLine, RiPhoneFill } from 'react-icons/ri';
import { MdLocationOn, MdEmail, MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md';
import { ImSearch } from 'react-icons/im';
import { FaShoppingCart } from 'react-icons/fa'
import Make from './components/Make';
import Category from './components/Category';
import "./styles.css"

const App = () => {
  return (
   <div>
      <p class="smallTitle"> Browse our complete catalog of OEM and licensed 
          British heritage parts for your classic British automobile. 
          | Kalamazoo, MI
      </p>

      <header class="website-contact">
        <img id="logo" alt="" src="./files/logo.png"/>
        <div class="contact-details">
          <h2>EnglishParts.com</h2>
          <div class="contact location">
            <i><MdLocationOn /></i>
            5850 Stadium Dr, Kalamazoo, MI 49009
          </div>
          <div class="contact phone">
            <i><RiPhoneFill /></i>
            866.467.1776
          </div>
          <div class="contact email">
            <i><MdEmail /></i>
            <a tabindex="0" class="small" href="#!!">
                sales@englishparts.com
            </a>
          </div>
        </div>
        <div class="toggle hide">
          <p>
            Parts
            <i><MdKeyboardArrowDown /></i>
          </p>
          <p>
            About Us
            <i><MdKeyboardArrowRight /></i>
          </p>
        </div>
        <div class="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
      </header>

      <nav>
        <div class="search"> 
          <i><ImSearch /></i>
          <input placeholder="Search by Keywords, Part Numbers or VIN"></input>
          <button>Go</button>
        </div>
        <div class="select">
            <p>Select Your Vehicle</p>
            <i><RiArrowDropDownLine /></i>
        </div>
        <div class="cart">
          <i><FaShoppingCart /></i>
          <p>0</p>
        </div>
      </nav>

      <a class="smallLink" href="#!" aria-label="">
        Welcome to EnglishParts.com, your home for Jaguar, 
        MG, Triumph and Austin Healey Parts!
      </a>

      <div class="jumbotron-top">
        <img src="./files/images/parts/heroes/default.jpg" alt="car"/>
        <h2 >
          Premium Austin Healey, Jaguar, MG, and Triumph Parts
        </h2>
        <p >
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
        <div class="divider"></div>
        <div class="carMakes">
          <Make title="Austin Healey" src="./files/austin-healey.png" />
          <Make title="Jaguar" src="files/jaguar.png" />
          <Make title="MG" src="files/mg.png" />
          <Make title="Triumph" src="files/triumph.png" />
        </div>
      </div>

      <div class="category">
        <h1>Select a Category</h1>
        <div class="divider"></div>
        <div class="categories">
          <Category title="Body" src="./files/body.jpg"/>
          <Category title="Brake System" src="./files/brake-system.jpg"/>
          <Category title="Cables" src="./files/cables.jpg"/>
          <Category title="Car Care, Tools and Shop Supplies" src="./files/car-care.jpg"/>
          <Category title="Competition Parts" src="./files/competition-parts.jpg"/>
          <Category title="Convertible Tops, Hard Tops and Tonneau Covers" src="./files/tops-covers.jpg"/>
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
      </div>

      <div class="jumbotron-bottom">
        <div class="jumbotron-grid">
          <div class="about">
            <ul>
                <h5>About</h5>
                <li><a href="#!" title="Accepted Payment">Accepted Payment</a></li>
                <li><a href="#!" title="Contact Us">Contact Us</a></li>
                <li><a href="#!" title="Policies">Policies</a></li>
                <li><a href="#!" title="Refunds">Refunds</a></li>
                <li><a href="#!" title="Returns">Returns</a></li>
              </ul>
          </div>

          <div class="legal">
            <ul>
              <h5>Legal</h5>
              <li title="Policies"><a href="#!" title="Policies">Policies</a></li>
            </ul>
          </div>
            
          <div class="links">
              <ul>
                <h5>Links</h5>	
                <li><a href="#!" title="My Information">My Information</a></li>
                <li><a href="#!" title="Testimonials">Testimonials</a></li>
              </ul>
          </div>
        </div>
        <div class="lightDivider"></div>

        <p class="warning">
          <i class="hide"><RiErrorWarningLine /></i>
					While every reasonable effort is made to ensure the accuracy 
          of this data, we are not responsible for any errors or 
          omissions contained on these pages. Please verify any 
          information in question with a sales representative.
        </p>

      </div>

      <footer>
        <div class="copyright">
          <img src="./files/images/logos/simplepart-logo-dark.png" alt="Simple Part"/>
          <p>© 2021 EnglishParts.com</p>
        </div>
        <p id="code">SPWEB49</p>
      </footer>

   </div>
  );
}

export default App;
