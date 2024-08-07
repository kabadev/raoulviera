import { NextResponse } from "next/server";
import { connect } from "../../../config/dbConfig";
import BlenderPost from "../../../models/BlenderPost";
import Resume from "../../../models/Resume";

export async function POST(res) {
  await connect();
  try {
    const request = await res.json();
    const newData = new Resume({
      catId: request.catId,
      title: request.title,
      desc: request.desc,
      img: request.img,
      imgId: request.imgId,
      zip: request.zip,
    });
    const savedPost = await newData.save();
    return NextResponse.status(200).json(savedPost);
  } catch (err) {
    return NextResponse.status(500).json({ err: "Failed to post" });
  }
}
export async function GET(res) {
  await connect();
  try {
    const post = await Resume.find();
    return NextResponse.json(post);
  } catch (err) {
    return NextResponse.json(err);
  }
}
