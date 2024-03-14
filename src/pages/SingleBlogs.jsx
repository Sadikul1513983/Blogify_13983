import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { formatDateString } from "../utils/formatDateString";
import { useSelector } from "react-redux";

const SingleBlogs = () => {
  const [singleBlog, setSingleBlog] = useState();

  const [comment, setComment] = useState("");

  const location = useLocation();
  const blogId = location?.state?.item?.id;

  const profile = useSelector(state=> state?.updateAction?.isAuthObject?.user)

  useEffect(() => {
    async function fetchBlog() {
      try {
        const apiUrl = `http://localhost:3000/blogs/${blogId}`;

        const response = await axios.get(apiUrl);

        setSingleBlog(response?.data);
      } catch (error) {
        if (error.response) {
          console.error("Response:", error);
        }
      }
    }
    fetchBlog();
  }, [blogId]);

  const tags = singleBlog?.tags?.split(",");

  return (
    <main>
      <section>
        <div className="container text-center py-8">
          <h1 className="font-bold text-3xl md:text-5xl">
            Integer Maecenas Eget Viverra
          </h1>
          <div className="flex justify-center items-center my-4 gap-4">
            <div className="flex items-center capitalize space-x-2">
              <div className="avater-img bg-indigo-600 text-white">
                <span className="">
                  {singleBlog?.author?.firstName?.charAt(0)}
                </span>
              </div>
              <h5 className="text-slate-500 text-sm">{`${singleBlog?.author?.firstName} ${singleBlog?.author?.lastName}`}</h5>
            </div>
            <span className="text-sm text-slate-700 dot">
              {formatDateString(singleBlog?.createdAt)}
            </span>
            <span className="text-sm text-slate-700 dot">100 Likes</span>
          </div>
          <img
            className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
            src={singleBlog?.author?.avatar}
            alt=""
          />
          <ul className="tags">
            {tags?.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
            {setSingleBlog?.content}
          </div>
        </div>
      </section>
      <section id={singleBlog?.id}>
        <div className="mx-auto w-full md:w-10/12 container">
          <h2 className="text-3xl font-bold my-8">
            {`${singleBlog?.comments?.length} comments`}
          </h2>
          <div className="flex items -center space-x-4">
            <div className="avater-img bg-indigo-600 text-white">
              <span className="">
                {singleBlog?.author?.firstName?.charAt(0)}
              </span>
            </div>
            <div className="w-full">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target?.value)}
                className="w-full bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
                placeholder="Write a comment"
              ></textarea>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
                  onClick={(e) => {
                    e.preventDefault();

                    setSingleBlog({
                      ...singleBlog,
                      comments: [
                        ...singleBlog.comments,
                        {
                          author:{
                            avatar:singleBlog?.author?.avatar,
                            id:profile?.id,
                            firstName: profile?.firstName,
                            lastName : profile?.lastName
                          },
                          content:comment,
                          id:singleBlog?.comment?.id
                        },
                      ],
                    });
                    setComment("")
                  }}
                >
                  Comment
                </button>
              </div>
            </div>
          </div>

          {singleBlog?.comments?.map((item) => (
            <div key={item?.id} className="flex items-start space-x-4 my-8">
              <div className="avater-img bg-orange-600 text-white">
                <span className="">{item?.author?.firstName?.charAt(0)}</span>
              </div>

              <div className="w-full">
                <h5 className="text-slate -500 font-bold">{`${item?.author?.firstName} ${item?.author?.lastName}`}</h5>
                <p key={item?.id} className="text-slate-300">
                  {item?.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SingleBlogs;
