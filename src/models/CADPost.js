import mongoose from "mongoose";

const CADPostSchema = new mongoose.Schema(
	{
		catId: {
			type: String,
		},
		title: {
			type: String,
			default: "",
		},
		preview: {
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

// module.exports = mongoose.model("CADPost", CADPostSchema);
const CADPost =
	mongoose.models.CADPost || mongoose.model("CADPost", CADPostSchema);

export default CADPost;
