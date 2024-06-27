"use client";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import axios from "axios";
import React from "react";

import { Modal, useMantineTheme } from "@mantine/core";

const Settings = () => {
	const [text, setText] = useState("");
	const theme = useMantineTheme();
	const [deleteModal, setdeleteModal] = useState(false);

	const getSettings = async () => {
		const res = await axios.get(`/api/settings`);
		setText(res.data.desc);
	};
	useEffect(() => {
		getSettings();
	}, []);

	const uploadSetting = async (e) => {
		e.preventDefault();
		setdeleteModal(true);
		const data = {
			desc: text,
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
		<div className="story">
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
							<h3>About You</h3>
						</div>

						<form onSubmit={uploadSetting}>
							<div className="editor">
								<textarea
									className="w-full min-h-[400px]"
									name=""
									id=""
									value={text}
									onChange={(e) => setText(e.target.value)}
								></textarea>
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
