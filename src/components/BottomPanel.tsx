import Task from "./Task";

const BottomPanel = () => {
  return (
    <div className="botton-panel">
      <div className="tasks-container">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
      <div className="text-span">
        <h2>
          Active <span> All </span> Completed
        </h2>
      </div>
    </div>
  );
};

export default BottomPanel;
