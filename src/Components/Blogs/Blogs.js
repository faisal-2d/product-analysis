import React from "react";

const Blogs = () => {
  return (
    <div>
      <article className="container text-left bg-teal-100 mb-10 mx-auto">
        <h1 className="text-2xl bg-teal-200 mb-5 px-5">What is Context API?</h1>
        <p className="px-5 pb-5">
          The Context API is feature of React App, which is an effective way to
          create global variables that can be passed to child components.
          Context API allows us transfering properties without "prop drilling".
          So, in react tree structure, we create a context in a parent component
          using .createContext() and to consume, we use useContext() hook in any
          child component. It is used in many cases, for example: state
          management, theme - (Dark, Light), translating web page.
        </p>
      </article>
      <article className="container text-left bg-teal-100 mb-10 mx-auto">
        <h1 className="text-2xl bg-teal-200 mb-5 px-5">
          What is Semantic Tag?
        </h1>
        <div className="px-5 pb-5">
          <p>
            Semantic HTML tag refers to Meaningful tag. Because, it is easily
            understood by developer and browser.
          </p>
          <p>
            Semantic tags have greater accessibility and offer a better user
            experience. The semantic tags help the search engines to find out
            the result reasily. They also help devices to determine the
            important context of web pages.
          </p>
          <p>example: nav, header, footer, article, time etc.</p>
        </div>
      </article>
    </div>
  );
};

export default Blogs;
