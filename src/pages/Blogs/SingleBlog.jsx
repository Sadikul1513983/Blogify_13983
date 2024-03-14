/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import threeDots from "../../assets/icons/3dots.svg";
import edit from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import { formatDateString } from "../../utils/formatDateString";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SingleBlog = ({ data, setData, popular }) => {
  const profile = useSelector(
    (state) => state?.updateAction?.isAuthObject?.user
  );

  let comments = popular?.blogs;
  
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const handleEditClick = (e, index) => {
    e.preventDefault();
    let selectedRowDto = [...data];
    let selectedRow = selectedRowDto[index];
    if (selectedRow) {
      setSelectedRowIndex(index);
    }
    setData(selectedRowDto);
  };

  const handleOutsideClick = (e) => {
    if (
      e.target.closest(".action-modal-container") === null &&
      e.target.closest(".absolute.right-0.top-0 button") === null
    ) {
      setSelectedRowIndex(null);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <main>
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            <div className="space-y-3 md:col-span-5">
              {Array.isArray(data) &&
                data?.length > 0 &&
                data?.map((item, i) => (
                  <div className="blog-card" key={item?.id}>
                    <img
                      className="blog-thumb"
                      src={item?.thumbnail}
                      alt="thumbnail"
                    />
                    <div className="mt-2 relative">
                      <Link to="/singleBlog" state={{ item }}>
                        <h3 className="text-slate-300 text-xl lg:text-2xl">
                          <Link to="/singleBlog"  state={{ item }} >{item?.title}</Link>
                        </h3>
                      </Link>
                      <p className="mb-6 text-base text-slate-500 mt-1">
                        {item?.content}
                      </p>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center capitalize space-x-2">
                          <div className="avater-img bg-indigo-600 text-white">
                            <span className="">
                              {item?.author?.firstName.charAt(0)}
                            </span>
                          </div>

                          <div>
                            <h5 className="text-slate-500 text-sm">
                              <Link
                                to="/profile"
                                state={{ popular }}
                              >{`${item?.author?.firstName} ${item?.author?.lastName}`}</Link>
                            </h5>
                            <div className="flex items-center text-xs text-slate-700">
                              <span>{formatDateString(item?.createdAt)}</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-sm px-2 py-1 text-slate-700">
                          <span>{item?.likes?.length} likes</span>
                        </div>
                      </div>

                      <div className="absolute right-0 top-0">
                        <button
                          onClick={(e) => {
                            handleEditClick(e, i);
                          }}
                        >
                          <img src={threeDots} alt="3dots of Action" />
                        </button>

                        {selectedRowIndex === i &&
                          item?.author?.firstName === profile?.firstName &&
                          item?.author?.lastName === profile?.lastName && (
                            <div className="action-modal-container">
                              <button className="action-menu-item hover:text-lwsGreen">
                                <img src={edit} alt="Edit" />
                                Edit
                              </button>
                              <button
                                className="action-menu-item hover:text-red-500"
                                onClick={() => {
                                  const remainItem = data?.filter(
                                    (el) => el?.id !== item?.id
                                  );
                                  setData(remainItem);
                                }}
                              >
                                <img src={deleteIcon} alt="Delete" />
                                Delete
                              </button>
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="md:col-span-2 h-full w-full space-y-5">
              <div className="sidebar-card">
                <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
                  Most Popular 👍️
                </h3>
                {Array?.isArray(comments) &&
                  comments?.length > 0 &&
                  comments?.map((comment) => (
                    <>
                      <ul className="space-y-5 my-5" key={comment?.id}>
                        <li>
                          <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                            {comment?.title}
                          </h3>
                          <p className="text-slate-600 text-sm">
                            by
                            <Link to="./profile">{`  ${comment?.author?.firstName} ${comment?.author?.lastName}`}</Link>
                            <span></span> {comment?.likes?.length}
                          </p>
                        </li>
                      </ul>
                    </>
                  ))}
              </div>
              <div className="sidebar-card">
                <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
                  Your Favourites ❤️
                </h3>

                <ul className="space-y-5 my-5">
                  <li>
                    <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
                      How to Auto Deploy a Next.js App on Ubuntu from GitHub
                    </h3>
                    <p className="text-slate-600 text-sm"></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleBlog;
