import React, { useRef } from "react";
import useFetch from "../useFetvhhook/CustomFetch";

const Scrolltothetop = () => {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100"
  );
  const listRef = useRef(null);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  if (pending) {
    return <h1>Loading...</h1>;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left:0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  return (
    <div>
      <h1>Scroll to the top </h1>
      <h3>This is the top section</h3>
      <button onClick={scrollToBottom}>Scroll to the Bottom</button>
      <ul ref={listRef}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li key={item.id}>{item.title}</li>)
          : null}
      </ul>
      <button onClick={scrollToTop}>Scroll to the Top</button>
      <h3>You reached the bottom</h3>
    </div>
  );
};

export default Scrolltothetop;
