import React, { Component } from 'react';

const NewsItem = (props) => {

    let { title, description, imageURL, newsURL, author, date, source } = props;
    return (
      <div className="card my-4" style={{ width: '18rem' }}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'40px'}}>{source}</span>
        <img src={imageURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toTimeString()}</small></p>
          <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    )
}

export default NewsItem;
