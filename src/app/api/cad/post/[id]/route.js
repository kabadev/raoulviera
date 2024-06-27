import { NextResponse } from "next/server";
import { connect } from "../../../../../config/dbConfig";
import CADPost from "../../../../../models/CADPost";

export async function GET(req, { params }) {
	await connect();
	try {
		const catId = params.id;
		const post = await CADPost.findById(catId);
		return NextResponse.json(post);
	} catch (err) {
		return NextResponse.json(err);
	}
}
