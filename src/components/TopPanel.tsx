import ButtonCategory from "./ButtonCategory";

const TopPanel = () => {
  return (
    <div className="top-panel">
      <div className="add-task">
        <div className="task-text">
          <h2>5 Task</h2>
        </div>
        <div className="add-task-bt">
          <ButtonCategory name="Add category" color="#38938A" />
        </div>
        <div className="task-text">
          <h2>Clear completed</h2>
        </div>
      </div>
    </div>
  );
};

export default TopPanel;
