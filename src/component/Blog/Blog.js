import React from "react";
import qsnBgImg from "../../media/image/background-img.jpg";

const Blog = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url('${qsnBgImg}')` }}
        className="qsn-container m-10 p-7 rounded-lg shadow-2xl text-[#f9f8f0]"
      >
        <h2 className="text-2xl mt-7 mb-10 ">
          Q.1 What is the purpose of react touter?
        </h2>
        <p className="mt-5 mx-10">
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application, allows changing the browser URL, and keeps the UI in sync
          with the URL.
          <br />
          <br />
          It is mainly used for developing Single Page Web Applications. React
          Router is used to define multiple routes in the application. When a
          user types a specific URL into the browser, and if this URL path
          matches any 'route' inside the router file, the user will be
          redirected to that particular route.
        </p>
      </div>
      <div
        style={{ backgroundImage: `url('${qsnBgImg}')` }}
        className="qsn-container m-10 p-7 rounded-lg shadow-2xl text-[#f9f8f0]"
      >
        <h2 className="text-2xl mt-7 mb-10 ">
          Q.2 How does context API works?
        </h2>
        <p className="mt-5 mx-10">
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
          <br />
          <br />
          Context is primarily used when some data needs to be accessible by
          many components at different nesting levels. Apply it sparingly
          because it makes component reuse more difficult. If you only want to
          avoid passing some props through many levels, component composition is
          often a simpler solution than context.
        </p>
      </div>
      <div
        style={{ backgroundImage: `url('${qsnBgImg}')` }}
        className="qsn-container m-10 p-7 rounded-lg shadow-2xl text-[#f9f8f0]"
      >
        <h2 className="text-2xl mt-7 mb-10 ">
          {" "}
          Q.3 What do you understand by useRef hook?
        </h2>
        <p className="mt-5 mx-10">
          The useRef Hook allows you to persist values between renders. It can
          be used to store a mutable value that does not cause a re-render when
          updated. It can be used to access a DOM element directly.
          <br />
          <br />
          If we tried to count how many times our application renders using the
          useState Hook, we would be caught in an infinite loop since this Hook
          itself causes a re-render. To avoid this, we can use the useRef Hook.
          <br />
          <br />
          useRef() only returns one item. It returns an Object called current.
          When we initialize useRef we set the initial value: useRef(0). We can
          access the count by using count.current. Run this on your computer and
          try typing in the input to see the application render count increase.
        </p>
      </div>
    </div>
  );
};

export default Blog;
