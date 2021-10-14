import React from "react";

export default function Form() {
    return (
        <div className="form-signin">
          <h2 className="form-signin-heading">test</h2>
          <input type="text" className="form-control" name="name" placeholder="product name" value />
          <input type="text" className="form-control" name="price" placeholder="price" value />
          <input type="text" className="form-control" name="description" placeholder="description" value />
          <button className="btn btn-lg btn-primary btn-block">Submit</button>
        </div>
    );
}