import { NextResponse } from "next/server";
import { connect } from "../../../../config/dbConfig";
import BlenderPost from "../../../../models/BlenderPost";
import CAMPost from "../../../../models/CAMPost";

export async function GET(req, { params }) {
	await connect();
	try {
		const catId = params.catId;
		const post = await CAMPost.find({ catId: catId });
		return NextResponse.json(post);
	} catch (err) {
		return NextResponse.json(err);
	}
}
