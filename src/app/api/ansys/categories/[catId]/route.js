import { NextResponse } from "next/server";
import { connect } from "../../../../../config/dbConfig";
import AnsysCategory from "../../../../../models/AnsysCategory";

export async function GET(req, { params }) {
	await connect();
	try {
		const catId = params.catId;
		const post = await AnsysCategory.findById(catId);
		return NextResponse.json(post);
	} catch (err) {
		return NextResponse.json(err);
	}
}
