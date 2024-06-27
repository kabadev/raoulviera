import mongoose from "mongoose";

var CAMCategorySchema = mongoose.Schema(
	{
		title: {
			type: String,
			default: "",
		},
	},
	{ timestamps: true }
);

const CAMCategory =
	mongoose.models.CAMCategory ||
	mongoose.model("CAMCategory", CAMCategorySchema);

export default CAMCategory;
