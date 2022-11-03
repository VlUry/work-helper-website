import { useState } from "react";
import { textData } from "../../data/data";
import TextBlock from "./TextBlock";
import TopicBlock from "./TopicBlock";

const MainBlock = () => {
  const [choosedTopic, setChoosedTopic] = useState("");
  const [choosedTopic2, setChoosedTopic2] = useState("");

  const topics = Object.keys(textData);
  const topics2 = (key) => {
    return Object.keys(textData[key]);
  };

  const chooseClass = () => {
    let one = topics2(choosedTopic);
    return one.length > 4 ? "topics-container-2" : "topics-container";
  };

  return (
    <>
      {choosedTopic2 ? (
        <TextBlock
          textData={textData[choosedTopic][choosedTopic2]}
          setState={setChoosedTopic2}
        />
      ) : choosedTopic ? (
        <TopicBlock
          className={chooseClass()}
          topics={topics2(choosedTopic)}
          onClick={setChoosedTopic2}
          goBack={setChoosedTopic}
        />
      ) : (
        <TopicBlock
          className={"topics-container"}
          topics={topics}
          onClick={setChoosedTopic}
          debug={choosedTopic}
        />
      )}
    </>
  );
};

export default MainBlock;
