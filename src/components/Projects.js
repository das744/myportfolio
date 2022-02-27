import React from "react";
import Pdata from "./Pdata";
import PCard from "./PCard";

const Projects = () => {
  return (
    <>
      <div className="container tab">
        <div className="mt-5">
          <h3 className="text-center"> My Projects</h3>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {Pdata.map((val, ind) => {
                  return (
                    <PCard
                      imgsrc={val.imgsrc}
                      title={val.title}
                      content={val.content}
                      link={val.links}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
