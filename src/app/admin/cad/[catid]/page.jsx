import React from "react";
import CadCat from "./CadCat";

const page = ({ params }) => {
	const { catid } = params;
	return (
		<div>
			<CadCat catId={catid} />
		</div>
	);
};

export default page;
