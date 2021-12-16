import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";

import Options from "../components/Options/Options";
import LinkList from "../components/LinkList/LinkList";
import OptionList from  "../components/Options/OptionList";

import ActionProvider from  "../handlers/ActionProvider";

const config = {
  initialMessages: [createChatBotMessage(`What do you want to learn about?`, {
      widget: "options"
    })],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <OptionList {...props} />,
      props:{
        options: [
          {
            text: "XAI",
            handler:"handleXaiList",
            id: 1,
          },
          {
            text: "Blockchain",
            handler: "",
            id: 2,
          },
          {
            text: "NLP",
            url: "",
            id: 3,
          },
        ],
      }
    },
   //  {
   //    widgetName: "javascriptLinks",
   //    widgetFunc: (props) => {
   //      return <LinkList {...props} />},
   //    props: {
   //     options: [
   //       {
   //         text: "Introduction to JS",
   //         url:
   //           "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
   //         id: 1,
   //       },
   //       {
   //         text: "Mozilla JS Guide",
   //         url:
   //           "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
   //         id: 2,
   //       },
   //       {
   //         text: "Frontend Masters",
   //         url: "https://frontendmasters.com",
   //         id: 3,
   //       },
   //     ],
   //   }
   // },
   {
     widgetName: "xaiTest",
     widgetFunc: (props) => {
       return <OptionList {...props} />},
     props: {
      options: [
        {
          text: "Vidoes",
          handler: "handleJavascriptList",
          id: 1,
        },
        {
          text: "Blogs",

          id: 2,
        }
      ],
    }
   }
 ]
}

export default config
