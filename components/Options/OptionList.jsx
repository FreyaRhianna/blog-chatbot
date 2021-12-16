import React from "react";

import "./Options.css";

const OptionList = (props) => {
  // const options = [
  //   { text: "Javascript", handler: props.actionProvider.handleJavascriptList, id: 1 },
  //   { text: "Data visualization", handler: () => {}, id: 2 },
  //   { text: "APIs", handler: () => {}, id: 3 },
  //   { text: "Security", handler: () => {}, id: 4 },
  //   { text: "Interview prep", handler: () => {}, id: 5 },
  // ];
  const optionsMarkup = props.options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick = {()=> {
        var fn = props.actionProvider[option.handler]
        fn()
      }}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default OptionList;
