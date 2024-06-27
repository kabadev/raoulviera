import { NextResponse } from "next/server";
import cloudinary from "../../../utils/cloudinary";
import Setting from "../../../models/Settings";
import { connect } from "../../../config/dbConfig";

export async function PUT(res) {
	await connect();
	try {
		const setting = await Setting.findById("634fc5fb9ba7c0c7bf483e7a");
		const request = await res.json();

		const data = {
			name: request.name,
			short: request.short,
			email: request.email,
			mobile: request.mobile,
			website: request.website,
			instagram: request.instagram,
			facebook: request.facebook,
			youtube: request.youtube,
			desc: request.desc,
		};
		if ("img" in request) {
			data.img = request.img;
			data.imgId = request.imgId;
			const path = setting.imgId;
			await cloudinary.uploader.destroy(path);
		}

		await setting.updateOne({ $set: data });
		return NextResponse.status(200).json("The Settings has been updated");
	} catch (err) {
		return NextResponse.status(500).json({ err: "Failed to post" });
	}
}
export async function GET(res) {
	await connect();
	try {
		const seting = await Setting.findById("634fc5fb9ba7c0c7bf483e7a");
		return NextResponse.json(seting);
	} catch (err) {
		return NextResponse.json(err);
	}
}
