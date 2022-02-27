import React from 'react'


const SCard = (props) => {
  return (
    <>
    <div className="col-md-4 col-10 mx-auto">
                  <div className="card" >
                      {/* <div className="icon-img">{props.imgclass}</div> */}
  
                    <div className="card-body">
                      <h3 className="card-title font-weight-bold text-center text-capitalize">{props.title}</h3>
                      <ol>
                        <li> {props.content} </li>
                        <li> {props.text} </li>
                          {/* <li> {props.text2}</li> */}
                      </ol>
                    
                    </div>
                  </div>
                </div>

    </>
  )
}

export default SCard