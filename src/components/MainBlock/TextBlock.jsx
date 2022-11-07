import { useState } from "react";
import GoBack from "../GoBack";
import Block1 from "./Block1";

const TextBlock = (props) => {
  const [showCopiedBlock, setShowCopiedBlock] = useState(false);

  const handleCopyText = (e) => {
    const textToCopy = e.target
      .closest("div")
      .querySelector(".text").textContent;
    navigator.clipboard
      .writeText(textToCopy)
      .then(triggerShowCopiedBlock)
      .catch((err) => console.error(err));
  };

  const triggerShowCopiedBlock = () => {
    setShowCopiedBlock(true);
    setTimeout(() => setShowCopiedBlock(false), 700);
  };

  const handleToggleCopiedBlock = (e) => {
    const blocks =
      e.target.closest(".topics-container") ||
      e.target.closest(".topics-container-2");
    const copiedBlock = e.target.closest("div");
    const allBlocks = blocks.querySelectorAll(".block");

    allBlocks.forEach((block) => {
      block.classList.remove("copied");
    });
    copiedBlock.classList.add("copied");
  };

  return (
    <>
      {showCopiedBlock && (
        <div style={{ position: "absolute", top: "20px" }}>
          <p className="text">Скопировано</p>
        </div>
      )}
      <GoBack setState={props.setState} />
      <div className={props.className}>
        {props.textData.map((text, id) => (
          <Block1
            key={id}
            text={text}
            onClick={(e) => {
              handleCopyText(e);
              handleToggleCopiedBlock(e);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default TextBlock;
