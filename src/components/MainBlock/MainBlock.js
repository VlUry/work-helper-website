import { useState } from "react";
import { textData } from "../../data/data";
import GoBack from "../GoBack";
import TextBlock from "./TextBlock";
import TopicBlock from "./TopicBlock";

const MainBlock = () => {
  const [choosedTopic, setChoosedTopic] = useState("");
  const [choosedTopic2, setChoosedTopic2] = useState("");

  const topics = Object.keys(textData);
  const topics2 = (key) => {
    return Object.keys(textData[key]);
  };

  const chooseClass = (arr) => {
    return arr.length > 4 ? "topics-container-2" : "topics-container";
  };

  return (
    <>
      {choosedTopic2 ? (
        <TextBlock
          className={chooseClass(textData[choosedTopic][choosedTopic2])}
          textData={textData[choosedTopic][choosedTopic2]}
          setState={setChoosedTopic2}
        />
      ) : choosedTopic ? (
        <TopicBlock
          className={chooseClass(topics2(choosedTopic))}
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
