"use client";
import "./resume.css";
import { useEffect, useState } from "react";
import { ImStack } from "react-icons/im";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Progress } from "@mantine/core";
import { Modal, useMantineTheme } from "@mantine/core";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

import axios from "axios";
import React from "react";
const Resume = () => {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	const [openedEdit, setOpenedEdit] = useState(false);
	const [deleteModal, setdeleteModal] = useState(false);
	const [resume, setResume] = useState([]);

	const [text, setText] = useState("");
	const [title, setTitle] = useState("");
	const [category, setCategory] = useState("");
	const [year, setYear] = useState("");

	const [editText, setEditText] = useState("");
	const [editTitle, setEditTitle] = useState("");
	const [editCategory, setEditCategory] = useState("");
	const [editYear, setEditYear] = useState("");

	const [message, setMessage] = useState("");

	const [id, setId] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [uploadPercentage, setUploadPercentage] = useState(0);
	const [progressModal, setProgressModal] = useState(false);

	const getResume = async () => {
		const res = await axios.get(`/api/resume`);
		if (res.data !== null) {
			setResume(res.data);
		}
	};

	useEffect(() => {
		getResume();
	}, []);

	const submitNewHandler = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setProgressModal(true);
		const data = {
			title: title,
			desc: text,
			year: year,
			category: category,
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
		setMessage("Final Uploading....");

		await axios.post(`/api/resume`, data, options);
		setMessage("Image Uploading....");
		getResume();
		setIsLoading(false);
		setProgressModal(false);
		setOpened(false);
	};

	const editHandler = async (id) => {
		setOpenedEdit(true);
		setId(id);

		const res = await axios.get(`/api/resume/${id}`);
		setEditTitle(res.data.title);
		setEditText(res.data.desc);
		setEditYear(res.data.year);
		setEditCategory(res.data.category);
	};

	const updateForm = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		setProgressModal(true);
		const data = {
			title: editTitle,
			desc: editText,
			year: editYear,
			category: editCategory,
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

		setMessage("Final Uploading....");

		await axios.put(`/api/resume/${id}`, data, options);
		setMessage("Image Uploading....");
		getResume();
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

		await axios.delete(`/api/resume/${id}`);
		getResume();
		setIsLoading(false);
		setdeleteModal(false);
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
				opened={opened}
				onClose={() => setOpened(false)}
			>
				<form onSubmit={submitNewHandler}>
					<div className="inputs">
						<div className="input">
							<label htmlFor="Nmae">Category</label>
							<select
								name=""
								id=""
								onChange={(e) => setCategory(e.target.value)}
							>
								<option disabled selected>
									Select Category
								</option>
								<option value="education">Education</option>
								<option value="experience">Experience</option>
							</select>
						</div>
						<div className="input">
							<label htmlFor="Nmae">Title</label>
							<input
								type="text"
								placeholder="Title"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
							/>
						</div>
						<div className="input">
							<label htmlFor="Nmae">Year</label>
							<input
								type="text"
								placeholder="Year"
								value={year}
								onChange={(e) => setYear(e.target.value)}
							/>
						</div>
						<div className="input">
							<label htmlFor="Nmae">Description</label>
							<textarea
								type="text"
								placeholder="Description.."
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
				overlayBlur={3}
				opened={openedEdit}
				onClose={() => setOpenedEdit(false)}
			>
				<form onSubmit={updateForm}>
					<div className="inputs">
						<div className="input">
							<label htmlFor="Nmae">Category</label>
							<select value={editCategory} id="">
								<option value="education">Education</option>
								<option value="experience">Experience</option>
							</select>
						</div>
						<div className="input">
							<label htmlFor="Nmae">Title</label>
							<input
								type="text"
								placeholder="Title"
								value={editTitle}
								onChange={(e) => setEditTitle(e.target.value)}
							/>
						</div>
						<div className="input">
							<label htmlFor="Nmae">Year</label>
							<input
								type="text"
								placeholder="Year"
								value={editYear}
								onChange={(e) => setEditYear(e.target.value)}
							/>
						</div>
						<div className="input">
							<label htmlFor="Nmae">Description</label>
							<textarea
								type="text"
								placeholder="Description.."
								defaultValue={editText}
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
							<h3>Resume Details</h3>
							<button
								className="btn btn-primary"
								onClick={() => setOpened(true)}
							>
								Add New
							</button>
						</div>
						<div className="card_items">
							{resume.map((re, index) => (
								<div className="card cat" key={index}>
									<span className="icon">
										<ImStack />
									</span>
									<span className="title">{re.title}</span>
									<p className="year">{re.year}</p>
									<p className="des">
										{re.desc ? re.desc.slice(0, 50) + "..." : null}
									</p>
									<div className="actions">
										<FiEdit
											className="icon_btn"
											onClick={() => editHandler(re._id)}
										/>

										<AiOutlineDelete
											className="icon_btn"
											onClick={() => getDeleteIdHandler(re._id)}
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

export default Resume;
