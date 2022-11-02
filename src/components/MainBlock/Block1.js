const Block1 = (props) => {
  return (
    <div className="block_container" onClick={props.onClick}>
      <div className="block">
        <p className="text">{props.text}</p>
      </div>
    </div>
  );
};

export default Block1;
