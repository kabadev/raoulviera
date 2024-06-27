import { NextResponse } from "next/server";
import { connect } from "../../../../../config/dbConfig";
import CADCategory from "../../../../../models/CADCategory";

export async function GET(req, { params }) {
	await connect();
	try {
		const catId = params.catId;
		const post = await CADCategory.findById(catId);
		return NextResponse.json(post);
	} catch (err) {
		return NextResponse.json(err);
	}
}
