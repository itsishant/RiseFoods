import react from "react";

class UserClass extends react.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      count1: 0,
      count2: 2,
    };
  }

  render() {
    const { name } = this.props;
    const { count1 } = this.state;

    return (
      <div>
        <h3>Count1: {count1}</h3>
        <h3>Count2: {this.state.count2}</h3>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Counter Increase
        </button>
        <h3>Name: {name}</h3>
        <h4>Location: New Delhi</h4>
        <h5>X- @itsishnat</h5>
      </div>
    );
  }
}

export default UserClass;
