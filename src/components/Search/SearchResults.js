import { textData } from "../../data/data";

const SearchResult = (props) => {
  const input = props.input;

  const getResults = () => {
    const search = Object.keys(textData).filter((key) => {
      return key.toLowerCase().includes(input);
    });

    let result = [];
    search.forEach((searchResult) => {
      result = [...result, ...Object.keys(textData[searchResult])];
    });

    return result[0] ? result : ["Ничего не найдено"];
  };

  return (
    <div className="search_results">
      {input &&
        getResults().map((result, key) => {
          return (
            <p className="text" key={key}>
              {result}
            </p>
          );
        })}
    </div>
  );
};

export default SearchResult;
