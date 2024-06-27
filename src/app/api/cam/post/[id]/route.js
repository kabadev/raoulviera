import { NextResponse } from "next/server";
import { connect } from "../../../../../config/dbConfig";
import CAMPost from "../../../../../models/CAMPost";

export async function GET(req, { params }) {
	await connect();
	try {
		const catId = params.id;
		const post = await CAMPost.findById(catId);
		return NextResponse.json(post);
	} catch (err) {
		return NextResponse.json(err);
	}
}
