import Block1 from "./Block1";

const TextBlock = (props) => {
  const copyText = (e) => {
    const textToCopy = e.target.closest("div").querySelector("p").textContent;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => console.log("copied"))
      .catch((err) => alert(err));
  };

  return (
    <div className="topics-container-2">
      {props.textData.map((text, id) => {
        return <Block1 key={id} text={text} onClick={(e) => copyText(e)} />;
      })}
    </div>
  );
};

export default TextBlock;
