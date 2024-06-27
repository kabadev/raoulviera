import mongoose from "mongoose";

const SettingSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			default: "",
		},
		short: {
			type: String,
			default: "",
		},
		email: {
			type: String,
			default: "",
		},
		mobile: {
			type: String,
			default: "",
		},
		website: {
			type: String,
			default: "",
		},
		facebook: {
			type: String,
			default: "",
		},
		instagram: {
			type: String,
			default: "",
		},
		youtube: {
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
	},
	{ timestamps: true }
);

// module.exports = mongoose.model("Setting", SettingSchema);
const Setting =
	mongoose.models.Setting || mongoose.model("Setting", SettingSchema);

export default Setting;
