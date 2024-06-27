import mongoose from "mongoose";

var AnsysCategorySchema = mongoose.Schema(
	{
		title: {
			type: String,
			default: "",
		},
	},
	{ timestamps: true }
);

// module.exports = mongoose.model("AnsysCategory", AnsysCategorySchema);

const AnsysCategory =
	mongoose.models.AnsysCategory ||
	mongoose.model("AnsysCategory", AnsysCategorySchema);

export default AnsysCategory;
