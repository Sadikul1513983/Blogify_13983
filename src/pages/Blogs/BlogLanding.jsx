/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import SingleBlog from "./SingleBlog";

const blogsPerPage = 10;

const BlogLanding = () => {
  const [landingData, setLandingData] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [popular, setPopular] = useState([]);
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/blogs/popular`);
        const result = await res.json();
        setPopular(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    return () => {};
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `http://localhost:3000/blogs?limit=${blogsPerPage}?skip=${page * blogsPerPage}`
      );
      const data = await response.json();

      if (data.blogs.length === 0) {
        setHasMore(false);
        alert("No more data available")
      } else {
        setLandingData((prevBlogs) => [...prevBlogs, ...data.blogs]);
        setPage((prevPage) => prevPage + 1);
      }
    };

    const onIntersection = (items) => {
      const loaderItem = items[0];

      if (loaderItem.isIntersecting && hasMore) {
        fetchProducts();
      }
    };

    const observer = new IntersectionObserver(onIntersection);

    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    // cleanup
    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasMore, page]);

  return (
    <div>
      <SingleBlog
        data={landingData}
        setData={setLandingData}
        popular={popular}
      />
      {hasMore && <div ref={loaderRef}>Loading more blogs...</div>}
    </div>
  );
};

export default BlogLanding;
