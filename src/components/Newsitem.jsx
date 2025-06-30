import React from "react";

const Newsitem = ({title,description,url,src}) => {
  return (
    <div className="card bg-dark text-white mb-3 d-inline-block place-self-center mx-3 my-3 px-2 py-2" style={{maxWidth:"345px"}}>
      <img src={src} style={{height:"200px",width:"360px"}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">
         {description?description.slice(0,100):"News information not available"}
        </p>
        <a href={url} className="btn btn-primary">
          Go To Full News
        </a>
      </div>
    </div>
  );
};

export default Newsitem;
