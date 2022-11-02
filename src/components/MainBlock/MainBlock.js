import { useState } from "react";
import { textData } from "../../data/data";
import TextBlock from "./TextBlock";
import Block1 from "./Block1";
import GoBack from "../GoBack";

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
        <div className={chooseClass()}>
          <GoBack setState={setChoosedTopic} />
          {topics2(choosedTopic).map((topic) => (
            <Block1
              key={topic}
              text={topic}
              onClick={() => setChoosedTopic2(topic)}
            />
          ))}
        </div>
      ) : (
        <div className={"topics-container"}>
          {topics.map((topic) => (
            <Block1
              key={topic}
              text={topic}
              onClick={() => setChoosedTopic(topic)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MainBlock;
