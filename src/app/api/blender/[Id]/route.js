import { NextResponse } from "next/server";
import { connect } from "../../../../config/dbConfig";
import BlenderPost from "../../../../models/BlenderPost";

export async function GET(req, { params }) {
	await connect();
	try {
		const Id = params.Id;
		const post = await BlenderPost.findById(Id);
		return NextResponse.json(post);
	} catch (err) {
		return NextResponse.json(err);
	}
}
