"use client";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Progress } from "@mantine/core";
import { Modal, useMantineTheme } from "@mantine/core";

import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

import axios from "axios";
import React from "react";
import Image from "next/image";

const Blender = ({ catId }) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [openedEdit, setOpenedEdit] = useState(false);
  const [deleteModal, setdeleteModal] = useState(false);
  const [posts, setPosts] = useState([]);

  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useState("");
  const [img, setImg] = useState(null);

  const [editText, setEditText] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editPreview, setEditPreview] = useState("");
  const [editImg, setEditImg] = useState(null);

  const [message, setMessage] = useState("");

  const [id, setId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [progressModal, setProgressModal] = useState(false);

  const getPosts = async () => {
    const res = await axios.get(`/api/blender`);
    if (res.data !== null) {
      setPosts(res.data);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const getImage = (e) => {
    let file = e.target.files[0];
    setImg(file);
  };

  // edit functions
  const getEditImage = (e) => {
    let file = e.target.files[0];
    setEditImg(file);
  };

  const submitNewHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setProgressModal(true);
    const data = {
      title: title,
      desc: text,
      link: preview,
    };

    // progresslistening
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);

        if (percent < 100) {
          setUploadPercentage(percent);
        }
      },
    };
    if (img) {
      setMessage("Image Uploading....");
      const formdata = new FormData();
      formdata.append("name", img.name);
      formdata.append("file", img);
      const uploadRes = await axios.post("/api/upload", formdata, options);
      data.img = uploadRes.data.url;
      data.imgId = uploadRes.data.imageId;
      setEditImg(null);
    } else {
      setMessage("Saving.....");
    }

    await axios.post(`/api/blender`, data, options);
    setMessage("");
    setTitle("");
    setText("");
    getPosts();
    setIsLoading(false);
    setProgressModal(false);
    setOpened(false);
  };

  const editHandler = async (id) => {
    setOpenedEdit(true);
    setId(id);

    const res = await axios.get(`/api/blender/${id}`);
    setEditTitle(res.data.title);
    setEditPreview(res.data.link);
    setEditText(res.data.desc);
  };

  const updateForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setProgressModal(true);
    const data = {
      catId: catId,
      title: editTitle,
      desc: editText,
      link: editPreview,
    };

    // progresslistening
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);

        if (percent < 100) {
          setUploadPercentage(percent);
        }
      },
    };
    if (editImg) {
      setMessage("Image Uploading....");
      const formdata = new FormData();
      formdata.append("name", editImg.name);
      formdata.append("file", editImg);
      const uploadRes = await axios.post("/api/upload", formdata, options);
      data.img = uploadRes.data.url;
      data.imgId = uploadRes.data.imageId;
      setEditImg(null);
    } else {
      setMessage("Saving.....");
    }

    await axios.put(`/api/blender/${id}`, data, options);
    setMessage("");
    getPosts();
    setIsLoading(false);
    setProgressModal(false);
    setOpenedEdit(false);
  };

  const getDeleteIdHandler = async (id) => {
    setdeleteModal(true);
    setId(id);
  };

  const deleteHandler = async (e) => {
    setIsLoading(true);

    await axios.delete(`/api/blender/post/${id}`);
    getPosts();
    setIsLoading(false);
    setdeleteModal(false);
  };

  return (
    <div className="cad project">
      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={opened}
        size="55%"
        onClose={() => setOpened(false)}
        title="Add New Project"
      >
        <form onSubmit={submitNewHandler}>
          <div className="inputs">
            <div className="input">
              <label htmlFor="Nmae">Project Title</label>

              <input
                type="text"
                placeholder="Project Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="input">
              <label htmlFor="Nmae">Youtube Link</label>
              <input
                type="text"
                placeholder="Preview Link"
                value={preview}
                onChange={(e) => setPreview(e.target.value)}
              />
            </div>
            <div className="input">
              <label htmlFor="Nmae">Image</label>
              <input
                type="file"
                accept="image/*"
                name="image"
                onChange={getImage}
              />
            </div>

            <div className="input">
              <label htmlFor="Nmae">Project Description</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="btn_submit">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </Modal>

      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        size="55%"
        overlayBlur={3}
        opened={openedEdit}
        onClose={() => setOpenedEdit(false)}
        title="Edit Project"
      >
        <form onSubmit={updateForm}>
          <div className="inputs">
            <div className="input">
              <label htmlFor="Nmae">Project Title</label>

              <input
                type="text"
                placeholder="Project Name"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </div>
            <div className="input">
              <label htmlFor="Nmae">Youtube Link</label>
              <input
                type="text"
                placeholder="Preview Link"
                value={editPreview}
                onChange={(e) => setEditPreview(e.target.value)}
              />
            </div>
            <div className="input">
              <label htmlFor="Nmae">Image</label>
              <input
                type="file"
                accept="image/*"
                name="image"
                onChange={getEditImage}
              />
            </div>

            <div className="input">
              <label htmlFor="Nmae">Project Description</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="btn_submit">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </Modal>

      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={deleteModal}
        onClose={() => setdeleteModal(false)}
      >
        <div className="delete_modal">
          <p>Do you want to Delete this?</p>
          <div className="delete_buttons">
            <button
              className="btn btn-outline"
              onClick={() => setdeleteModal(false)}
            >
              Cancel
            </button>
            <button
              className="btn btn-primary"
              onClick={deleteHandler}
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={progressModal}
      >
        <div className="progress_modal">
          <p>{message}</p>
          <Progress
            value={uploadPercentage}
            label={`${uploadPercentage}%`}
            size="xl"
            radius="xl"
          />
        </div>
      </Modal>

      <div className="containers">
        <Sidebar />
        <main>
          <Navbar />
          <div className="content">
            <div className="page_header">
              <h3>Blender Projects</h3>
              <button
                className="btn btn-primary"
                onClick={() => setOpened(true)}
              >
                Add New
              </button>
            </div>
            <div className="card_items">
              {posts.map((post, index) => (
                <div className="card " key={index}>
                  <span className="image">
                    <Image
                      width={100}
                      height={100}
                      src={post.img}
                      alt=""
                      priority={true}
                    />
                  </span>
                  <span className="title">{post.title}</span>
                  <div className="actions">
                    <FiEdit
                      className="icon_btn"
                      onClick={() => editHandler(post._id)}
                    />
                    <AiOutlineDelete
                      className="icon_btn"
                      onClick={() => getDeleteIdHandler(post._id)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Blender;
