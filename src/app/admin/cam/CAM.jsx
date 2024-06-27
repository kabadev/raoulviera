"use client";
import { useContext, useEffect, useState } from "react";
import { ImStack } from "react-icons/im";

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Modal, useMantineTheme } from "@mantine/core";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import React from "react";
import Link from "next/link";
const CAM = () => {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	const [openedEdit, setOpenedEdit] = useState(false);
	const [deleteModal, setdeleteModal] = useState(false);

	const [category, setCategory] = useState([]);
	const [editValue, setEditValue] = useState("");
	const [addvalue, setAddvalue] = useState("");
	const [id, setId] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const getCategory = async () => {
		const res = await axios.get(`/api/cam/categories/`);
		setCategory(res.data);
	};

	useEffect(() => {
		getCategory();
	}, []);

	const submitNewHandler = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		const data = {
			title: addvalue,
		};
		await axios.post(`/api/cam/categories/`, data);
		getCategory();
		setIsLoading(false);
		setOpened(false);
		setAddvalue("");
	};

	const editHandler = async (id, title) => {
		setOpenedEdit(true);
		setEditValue(title);
		setId(id);
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		const data = {
			title: editValue,
		};
		await axios.put(`/api/cam/categories/${id}`, data);
		getCategory();
		setIsLoading(false);
		setOpenedEdit(false);
	};

	const getDeleteIdHandler = async (id) => {
		setdeleteModal(true);
		setId(id);
	};

	const deleteHandler = async (e) => {
		setIsLoading(true);
		await axios.delete(`/api/cam/categories/${id}`);
		getCategory();
		setIsLoading(false);
		setdeleteModal(false);
	};

	return (
		<div className="cam categorygrid">
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
							<label htmlFor="Nmae">Category Title</label>
							<input
								type="text"
								placeholder="Category Name"
								value={addvalue}
								onChange={(e) => setAddvalue(e.target.value)}
							/>
						</div>
					</div>
					<div className="btn_submit">
						<button className="btn btn-primary">
							{isLoading ? "Adding...." : "Submit"}
						</button>
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
				<form onSubmit={submitHandler}>
					<div className="inputs">
						<div className="input">
							<label htmlFor="Nmae">Edit Category Title</label>
							<input
								type="text"
								placeholder="Category Name"
								value={editValue}
								onChange={(e) => setEditValue(e.target.value)}
							/>
						</div>
					</div>
					<div className="btn_submit">
						<button className="btn btn-primary" disabled={isLoading}>
							{isLoading ? "Loading...." : "Update"}
						</button>
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

			<div className="containers">
				<Sidebar />
				<main>
					<Navbar />
					<div className="content">
						<div className="page_header">
							<h3>CAM Category</h3>
							<button
								className="btn btn-primary"
								onClick={() => setOpened(true)}
							>
								Add New
							</button>
						</div>
						<div className="card_items">
							{category?.map((cat, index) => (
								<div className="card cat" key={index}>
									<span className="icon">
										<ImStack />
									</span>
									<span className="title">{cat.title}</span>
									<div className="actions">
										<FiEdit
											className="icon_btn"
											onClick={() => editHandler(cat._id, cat.title)}
										/>
										<Link
											href={`/admin/cam/${cat._id}`}
											className="btn btn-primary"
										>
											View
										</Link>
										<AiOutlineDelete
											className="icon_btn"
											onClick={() => getDeleteIdHandler(cat._id)}
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

export default CAM;
