import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <section id="main">
		<nav>
		
    <NavLink class="navbar-brand" to="/">
              MY PORTFOLIO
    </NavLink>
		
			<input class="menu-btn" type="checkbox" id="menu-btn"/>
			<label class="menu-icon" for="menu-btn">
				<span class="nav-icon"></span>
			</label>

			<ul class="menu">
				<li><NavLink class=" pl-20 active " aria-current="page" to="/">
                    Home
                  </NavLink></li>
				<li>
        <NavLink class="" to="/Skills">
                    Skills
                  </NavLink>
        </li>
				<li>
        <NavLink class="" to="/Experience">
                    Experience
                  </NavLink>

        </li>
				<li>
        <NavLink class="" to="/Projects">
                  Projects
                  </NavLink>

        </li>
				<li>
        <NavLink class="" to="/Contact">
                    Contact
                  </NavLink>
        </li>
			</ul>
      <NavLink className="hey" to="/Contact">
                   Say Hi!
                  </NavLink>
       
			{/* <a href="#" class="hey">Say Hi!</a> */}
		</nav>
	</section>

      {/* <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10 col-md-12 mx-auto">

          <nav class="navbar navbar-expand-lg text-white text-weight-bold">
          <div class="container-fluid">
            <NavLink class="navbar-brand" to="/">
              MY PORTFOLIO
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class=" container collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav col-lg-10 col-md-10 mb-2 mb-lg-0 text-white nav_menu">
                <li class="nav-item list-item text-white nav_link">
                  <NavLink class="nav-link pl-20 active " aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/Skills">
                    Skills
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/Experience">
                    Experience
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/Projects">
                  Projects
                  </NavLink>
                </li>
                
                <li class="nav-item">
                  <NavLink class="nav-link" to="/Contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>

          </div>
        </div>
        
      </div> */}
    </>
  );
};

export default Navbar;
