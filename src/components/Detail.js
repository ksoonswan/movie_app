import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="Movie_detail">
          <h1>{location.state.title}</h1>
          <img src={location.state.poster} />
          <h3>{location.state.year}</h3>
          <p>{location.state.summary}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
