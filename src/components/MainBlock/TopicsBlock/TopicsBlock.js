import { useState } from "react";
import { textData } from "../../../data/data";
import Block1 from "./Block1";

const TopicsBlock = () => {
  const [choosedTopic, setChoosedTopic] = useState("");

  const topics = Object.keys(textData);
  const topics2 = (key) => {
    return Object.keys(textData[key]);
  };

  const chooseClass = () => {
    let one = topics2(choosedTopic);
    return one.length > 4 ? "topics2-container" : "topics-container";
  };

  return (
    <>
      {choosedTopic ? (
        <div className={chooseClass()}>
          {topics2(choosedTopic).map((topic) => (
            <Block1 key={topic} topicText={topic} onClick={() => {}} />
          ))}
        </div>
      ) : (
        <div className="topics-container">
          {topics.map((topic) => (
            <Block1
              key={topic}
              topicText={topic}
              onClick={() => setChoosedTopic(topic)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default TopicsBlock;
