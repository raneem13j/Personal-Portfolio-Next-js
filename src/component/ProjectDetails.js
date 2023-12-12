import Image from "next/image";
import React from "react";

const ProjectDetails = (props) => {
  return (
    <>
      <div className="singleproject-container">
        <div className="main-singleproject-container-title">
          <h2 className="">{props.data.title}</h2>
          <p>{props.data.details}</p>
        </div>
        <div className="singleproject-details">
          <div className="IMAGE-CONTAINER">
            {props.data.imageArray.map((item) => {
              return (
                <Image
                  key={item.id}
                  src={item} // Assuming `item` is the image URL
                  alt={props.data.title} // You might want to use a meaningful alt text
                  width={500}
                  height={300}
                  className="singleproject-image"
                />
              );
            })}
          </div>
          <div className="singleproject-details2">
            <p className="singleproject-details2-p">{props.data.moreDetails}</p>
            <div className="links-single">
              {props.data.videoDemo ? (
                <a href={props.data.videoDemo} target="_blank">
                  Video Demo
                </a>
              ) : (
                ""
              )}
              {props.data.deployed ? (
                <a href={props.data.deployed} target="_blank">
                  Deployed Link
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
