import React from 'react'; //optional

function TweetForm(){

  const question = "What are you humming about?";

  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" onSubmit={(event) => {
          event.preventDefault();
          console.log("event", event);
        }}>
        <textarea className="form__textarea" name="text" placeholder={question}></textarea>
        <input type="submit" value="Tweet" className="form__input"/>
        <span className="form__counter">140</span>
      </form>
    </section>
  );
}

export default TweetForm;

// import React, { Component } from "react";

// class TweetForm extends Component {
//   constructor() {

//   }
//   render() {
//     return (
//       <section class="newtweet">
//         <form method="post" action="/tweets" class="newtweet__form">
//           <textarea class="form__textarea" name="text" placeholder="What are you humming about?"></textarea>
//           <input type="submit" value="Tweet" class="form__input" />
//           <span class="form__counter">140</span>
//         </form>
//       </section>
//     );
//   }
// }

// export default TweetForm;