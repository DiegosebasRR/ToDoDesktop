type MyComponentProps = {
  name: string;
  color: string;
};

const ButtonCategory: React.FC<MyComponentProps> = ({ name, color }) => {
  return (
    <button className="button-category" style={{ backgroundColor: color }}>
      {name}
    </button>
  );
};

export default ButtonCategory;
