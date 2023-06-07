import check from "../assets/check.svg";
import ButtonCategory from "./ButtonCategory";
const Task = () => {
  return (
    <>
      <div className="task-container">
        <div className="container-check">
          <img className="check" src={check} alt="check" />
        </div>
        <p className="textTask">Memorize the fifty states and their capitals</p>
        <div className="btnTask">
          <ButtonCategory name="Completed" color="green" />
        </div>
      </div>
      <hr className="line"></hr>
    </>
  );
};

export default Task;
