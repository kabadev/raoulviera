import { NextResponse } from "next/server";
import { connect } from "../../../../config/dbConfig";
import CAMPost from "../../../../models/CAMPost";
import CAMCategory from "../../../../models/CAMCategory";

export async function POST(res) {
	await connect();
	try {
		const request = await res.json();
		const newCamCat = new CAMPost({
			title: request.title,
		});
		const saveCamCat = await newCamCat.save();
		return NextResponse.status(200).json(saveCamCat);
	} catch (err) {
		return NextResponse.status(500).json({ err: "Failed to post" });
	}
}
export async function GET(res) {
	await connect();
	try {
		const post = await CAMCategory.find();
		return NextResponse.json(post);
	} catch (err) {
		return NextResponse.json(err);
	}
}
