import React from "react";
import Sdata from "./Sdata";
import SCard from "./SCard";

const Skills = () => {
  return (
    <>
      <div className="container tab">
        <div className="mt-5">
          <h3 className="text-center"> My Technical Skills and Knowledge</h3>
        </div>

        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {Sdata.map((val, ind) => {
                  return (
                    <SCard
                      imgsrc={val.imgsrc}
                      title={val.title}
                      content={val.content}
                      text={val.text}
                      text2={val.text2}
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

export default Skills;
