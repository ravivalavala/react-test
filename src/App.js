import "./styles.css";
import Articles from "./component/Articles";
import React, {useState, useEffect, useRef} from 'react';

export default function App({articles}) {
  const upVoteBut = useRef(null)
  const dateBut = useRef(null)

  return (
    <div className="App">
      {/* <h8k-navbar header={title}></h8k-navbar> */}
      <div className="layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
          <button data-testid="most-upvoted-link" className="small" ref={upVoteBut}>Most Upvoted</button>
          <button data-testid="most-recent-link" className="small" ref={dateBut}>Most Recent</button>
      </div>
      <Articles articles={articles} upVoteBut={upVoteBut} dateBut={dateBut}/>
    </div>
  );
}

