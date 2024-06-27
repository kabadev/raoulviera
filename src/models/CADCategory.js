import mongoose from "mongoose";

var CadCategorySchema = mongoose.Schema(
	{
		title: {
			type: String,
			default: "",
		},
	},
	{ timestamps: true }
);

// module.exports = mongoose.model("CadCategory", CadCategorySchema);
const CADCategory =
	mongoose.models.CadCategory ||
	mongoose.model("CadCategory", CadCategorySchema);

export default CADCategory;
