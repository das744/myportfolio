import React from 'react'
import { NavLink } from 'react-router-dom';

const PCard = (props) => {
    return (
      <>
          <div className="col-md-4 col-10 mx-auto ">
                    <div className="card gb-10" >
                      <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                      <div className="card-body projbox">
                        <h5 className="card-title mt-0 font-weight-bold text-center text-uppercase">{props.title} </h5>
                        <p>{props.content}</p>
                        <a href={props.link} target="_blank"><button className="portfolio-btn">Visit Website</button></a>
                        {/* <NavLink to ={props.link} className="portfolio-btn">
                              Visit Website
                        </NavLink> */}
                      </div>
                    </div>
                  </div>
  
          
      </>
    )
  }

export default PCard