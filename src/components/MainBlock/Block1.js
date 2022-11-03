const Block1 = (props) => {
  return (
    <div className="block_container" onClick={props.onClick}>
      <div
        className={
          props.BlockClassName ? `block ${props.BlockClassName}` : "block"
        }
      >
        <p className="text">{props.text}</p>
      </div>
    </div>
  );
};

export default Block1;
