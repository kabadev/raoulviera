import { NextResponse } from "next/server";
import { connect } from "../../../../config/dbConfig";
import Resume from "../../../../models/Resume";

export async function GET(req, { params }) {
	await connect();
	try {
		const Id = params.id;
		const post = await Resume.findById(Id);
		return NextResponse.json(post);
	} catch (err) {
		return NextResponse.json(err);
	}
}

export async function PUT(req, { params }) {
	await connect();
	try {
		const Id = params.id;
		const request = await res.json();
		const resume = await Resume.findById(Id);
		const data = {
			category: request.category,
			title: request.title,
			year: request.year,
			desc: request.desc,
		};
		await resume.deleteOne();
		return NextResponse.json("The Resume has been deleted");
	} catch (err) {
		return NextResponse.json(err);
	}
}
export async function DELETE(req, { params }) {
	await connect();
	try {
		const Id = params.id;
		const resume = await Resume.findById(Id);
		await resume.deleteOne();
		return NextResponse.json("The Resume has been deleted");
	} catch (err) {
		return NextResponse.json(err);
	}
}
