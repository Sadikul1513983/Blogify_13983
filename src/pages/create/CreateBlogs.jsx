import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateBlogs = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const navigate = useNavigate();

  const userDescription = useSelector(
    (state) => state?.updateAction?.isAuthObject?.token
  );

  console.log("userDescription", userDescription);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("tags", JSON.stringify(tags.split(",")));

      if (thumbnail) {
        formData.append("thumbnail", thumbnail);
      }

      const response = await axios.post(
        "http://localhost:3000/blogs/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${userDescription?.accessToken}`,
          },
        }
      );

      console.log("res", response);
      if (response.status === 201) {
        console.log("Blog created successfully");
        navigate("/");
      } else {
        console.error("Failed to create blog:");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <main>
      <section>
        <div className="container">
          <form className="createBlog" onSubmit={handleSubmit}>
            <div className="grid place-items-center bg-slate-600/20 h-[150px] rounded-md my-4">
              <div className="flex items-center gap-4 hover:scale-110 transition-all cursor-pointer">
                <input
                  aria-label="Upload Your Image"
                  type="file"
                  onChange={(e) => setThumbnail(e.target.files[0])}
                />
              </div>
            </div>
            <div className="mb-6 bg-slate-500 p-2 rounded-md">
              <input
                type="text"
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your blog title"
                className="bg-white border border-gray-300 p-2 rounded-md w-full"
              />
            </div>
            <div className="mb-6 bg-slate-500 p-2 rounded-md">
              <input
                type="text"
                id="tags"
                name="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                style={{ color: "white" }}
                placeholder="Your Comma Separated Tags Ex. JavaScript, React, Node, Express,"
              />
            </div>
            <div className="mb-6 bg-slate-500 p-2 rounded-md">
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                name="content"
                placeholder="Write your blog content"
                rows="8"
                className="bg-white border border-gray-300 p-2 rounded-md w-full"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
            >
              Create Blog
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default CreateBlogs;
