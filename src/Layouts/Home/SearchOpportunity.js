import React from "react";

const SearchOpportunity =()=>{
    return (
        <>
<div className="container">
  <div className="never-want">
    <div className="row">
      <div className="col-md-6 col-12">
        <h4>Never want to miss any job news</h4>
      </div>
      <div className="col-md-6 col-12">
        <div className="never-want-inner">
          <div className="never-want-in">
            <input
              type="text"
              placeholder="Enter email"
              name=""
              className="form-control w-75"
            />
          </div>
          <button type="button" className="btn btn-dark px-4">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default SearchOpportunity;