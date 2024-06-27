import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema(
	{
		category: {
			type: String,
		},
		title: {
			type: String,
			default: "",
		},
		year: {
			type: String,
			default: "",
		},

		desc: {
			type: String,
			default: "",
		},
	},
	{ timestamps: true }
);

// module.exports = mongoose.model("Resume", ResumeSchema);
const Resume = mongoose.models.Resume || mongoose.model("Resume", ResumeSchema);

export default Resume;
