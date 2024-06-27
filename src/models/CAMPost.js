import mongoose from "mongoose";

const CAMPostSchema = new mongoose.Schema(
	{
		catId: {
			type: String,
		},
		title: {
			type: String,
			default: "",
		},

		desc: {
			type: String,
			default: "",
		},
		img: {
			type: String,
			default: "",
		},
		imgId: {
			type: String,
			default: "",
		},
		zip: {
			type: String,
			default: "",
		},
	},
	{ timestamps: true }
);

const CAMPost =
	mongoose.models.CAMPost || mongoose.model("CAMPost", CAMPostSchema);

export default CAMPost;
