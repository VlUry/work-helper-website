import { useState } from "react";
import GoBack from "../GoBack";
import Block1 from "./Block1";

const TextBlock = (props) => {
  const [showCopiedBlock, setShowCopiedBlock] = useState(false);
  const [blockClassname, setBlockClassname] = useState("");

  const copyText = (e) => {
    const textToCopy = e.target
      .closest("div")
      .querySelector(".text").textContent;
    navigator.clipboard
      .writeText(textToCopy)
      .then(triggerShowCopiedBlock)
      .catch((err) => alert(err));
  };

  const triggerShowCopiedBlock = () => {
    setShowCopiedBlock(true);
    setTimeout(() => setShowCopiedBlock(false), 700);
  };

  return (
    <>
      {showCopiedBlock && (
        <div style={{ position: "absolute", top: "20px" }}>
          <p className="text">Скопировано</p>
        </div>
      )}
      <div className="topics-container-2">
        <GoBack setState={props.setState} />
        {props.textData.map((text, id) => (
          <Block1
            key={id}
            text={text}
            onClick={(e) => copyText(e)}
            blockClassName={blockClassname}
          />
        ))}
      </div>
    </>
  );
};

export default TextBlock;
