"use client";
import { useState } from "react";
import "./setting.css";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { BsFillCameraFill } from "react-icons/bs";
import axios from "axios";
import React from "react";

import { useEffect } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import Image from "next/image";

const Settings = () => {
  const theme = useMantineTheme();

  const [deleteModal, setdeleteModal] = useState(false);
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");
  const [fullName, setFullName] = useState("");
  const [short, setShort] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [image, setImage] = useState("");

  const getSettings = async () => {
    const res = await axios.get(`/api/settings`);
    setFullName(res.data.name);
    setInstagram(res.data.instagram);
    setFacebook(res.data.facebook);
    setYoutube(res.data.youtube);
    setEmail(res.data.email);
    setMobile(res.data.mobile);
    setWebsite(res.data.website);
    setShort(res.data.short);
    setImage(res.data.img);
  };

  useEffect(() => {
    getSettings();
  }, []);

  const getImage = async (e) => {
    if (e.target.files && e.target.files[0]) {
      let file = e.target.files[0];
      let name = e.target.files[0].name;

      const updateData = {};
      const formdata = new FormData();
      formdata.append("name", name);
      formdata.append("file", file);
      try {
        // uploading images
        const uploadRes = await axios.post(`/api/upload`, formdata);
        updateData.img = uploadRes.data.url;
        updateData.imgId = uploadRes.data.imageId;

        // if images are uploaded successfully then upload to the database
        if (uploadRes.status === 200) {
          try {
            const res = await axios.put(`/api/settings`, updateData);
            getSettings();
          } catch (err) {
            console.log(err);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const uploadSetting = async (e) => {
    e.preventDefault();
    setdeleteModal(true);
    const data = {
      name: fullName,
      short: short,
      email: email,
      mobile: mobile,
      website: website,
      instagram: instagram,
      facebook: facebook,
      youtube: youtube,
    };
    try {
      await axios.put(`/api/settings`, data);
      getSettings();
      setdeleteModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cam">
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
          <p>Loading....?</p>
        </div>
      </Modal>

      <div className="containers">
        <Sidebar />
        <main>
          <Navbar />
          <div className="content">
            <div className="page_header">
              <h3>Settings</h3>
            </div>

            <form onSubmit={uploadSetting}>
              <div className="settingsform">
                <div className="inputs">
                  <div className="myimage">
                    <Image
                      height={100}
                      width={100}
                      src={image}
                      alt=""
                      priority={true}
                    />
                    <label htmlFor="myimage" className="edit_myimage">
                      <BsFillCameraFill />
                    </label>
                    <input type="file" id="myimage" onChange={getImage} />
                  </div>
                  <div className="input">
                    <label htmlFor="Nmae">Facebook</label>
                    <input
                      type="text"
                      placeholder="Enter UserName only eg vierrams..."
                      value={facebook}
                      onChange={(e) => setFacebook(e.target.value)}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="Nmae">Instagram</label>
                    <input
                      type="text"
                      placeholder="Enter UserName only eg vierrams..."
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="Nmae">Youtube</label>
                    <input
                      type="text"
                      placeholder="Enter Channel Link"
                      value={youtube}
                      onChange={(e) => setYoutube(e.target.value)}
                    />
                  </div>
                </div>
                <div className="inputs">
                  <div className="input">
                    <label htmlFor="Nmae">Full Name</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="Nmae">
                      Short Description 200 Characters
                    </label>
                    <textarea
                      type="text"
                      placeholder="Short Description.."
                      maxLength={200}
                      defaultValue={short}
                      onChange={(e) => setShort(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="input">
                    <label htmlFor="Nmae">Email</label>
                    <input
                      type="email"
                      placeholder="Email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="Nmae">Mobile</label>
                    <input
                      type="number"
                      placeholder="Mobile..."
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="Nmae">Website</label>
                    <input
                      type="text"
                      placeholder="Website Url..."
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="btn_submit">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Settings;
