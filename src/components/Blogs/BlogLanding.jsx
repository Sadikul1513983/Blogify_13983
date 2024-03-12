/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import SingleBlog from "./SingleBlog";

const BlogLanding = () => {
  const [continueScroll, setContinueScroll] = useState(true);
  const [pageSize, setPageSize] = useState(1);
  const scrollRef = useRef(null);
  const [landingData, setLandingData] = useState([]);
  const [popular,setPopular]=useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {

        const res = await fetch(`http://localhost:3000/blogs/popular`)
        const result = await res.json()
        setPopular(result)

        if (continueScroll) {
          const response = await fetch(
            `http://localhost:3000/blogs?page=${pageSize}`
          );
          const result = await response.json();

          if (result.blogs.length === 0) {
            setContinueScroll(false);
          } else {
            setLandingData((prevData) => [...prevData, ...result.blogs]);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {};
  }, [pageSize, continueScroll]);

  return (
    <div>
      <SingleBlog data={landingData} setData={setLandingData} popular={popular} />
      <div ref={scrollRef}>{continueScroll && <p> ...Loading</p>}</div>
    </div>
  );
};

export default BlogLanding;
