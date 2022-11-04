const Block1 = (props) => {
  return (
    <div className="block_container">
      <div className="block" onClick={props.onClick}>
        <p className="text">{props.text}</p>
      </div>
    </div>
  );
};

export default Block1;
