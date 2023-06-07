import ButtonCategory from "./ButtonCategory";
const LeftPanel = () => {
  return (
    <div className="left-panel">
      <h2 className="subtitle">
        <span>Categories</span>
      </h2>
      <div className="categories">
        <ButtonCategory name="Completed" color="green" />
        <ButtonCategory name="Urgent" color="red" />
        <ButtonCategory name="Important" color="yellow" />
        <ButtonCategory name="Later" color="blue" />
        <ButtonCategory name="To study" color="orange" />
      </div>
      <div className="add-category">
        <ButtonCategory name="Add category" color="#38938A" />
      </div>
    </div>
  );
};

export default LeftPanel;
