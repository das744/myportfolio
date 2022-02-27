import React from 'react'

import perimg from "../images/img1.jpg"

const Home = () => {
  return (
    <>
	<div class="content">
		<div class="model">
			<img src={perimg} className="profileimg" />
		</div>
	
		<div class="main-text">
			<h2>Hello, this is Ajanta </h2>
			<h4>who is passionate, creative, detail-oriented and self-taught UI/UX designer and developer.  </h4> <br></br>
			<h6> I love to learn new technologies that brings efficiencies and increase productivity to my workflow.</h6> <br/>
				<h6>This is my portfolio website to learn more about me, my technical skills, experience, knowledge and my working projects.</h6>	
			{/* <a href="ADas.pdf" class="portfolio-btn">Download My CV</a> */}
		</div>
	</div>
    </>
  )
}

export default Home