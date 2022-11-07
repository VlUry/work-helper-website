import Block1 from "./Block1";
import GoBack from "../GoBack";

const TopicBlock = (props) => {
  return (
    <>
      {props.goBack && <GoBack setState={props.goBack} />}
      <div className={props.className}>
        {props.topics.map((topic, id) => (
          <Block1 key={id} text={topic} onClick={() => props.onClick(topic)} />
        ))}
      </div>
    </>
  );
};

export default TopicBlock;
