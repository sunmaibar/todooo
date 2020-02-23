import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              value={item}
              onChange={handleChange}
              type="text"
              placeholder="該做什麼呢？"
              className="form-control text-capitalize"
            />
          </div>
          <button type="submit" className="btn btn-block btn-primary mt-3">
            新增項目
          </button>
        </form>
      </div>
    );
  }
}
