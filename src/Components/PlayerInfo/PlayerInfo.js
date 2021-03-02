import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const PlayerInfo = (props) => {
  const { name, salary, image } = props.singlePlayer;
  const divStyle = {
    margin: "40px",
    padding: "40px",
    border: "2px solid lightBlue",
    borderRadius: "10px",
  };
  const detailsStyle = {
    margin: "20px",
  };

  return (
    <div style={divStyle}>
      <div>
        <img src={image} alt="" />
      </div>
      <div style={detailsStyle}>
        <h2>Name: {name}</h2>
        <p>Salary: {salary}</p>
        <button
          className="btn btn-info"
          onClick={() => props.handleTeam(props.singlePlayer)}
        >
          <FontAwesomeIcon icon={faUserPlus} /> Add to team
        </button>
      </div>
    </div>
  );
};

export default PlayerInfo;
