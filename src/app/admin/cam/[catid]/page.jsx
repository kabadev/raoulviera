import React from "react";

import CamCat from "./CamCat";

const page = ({ params }) => {
	const { catid } = params;
	return (
		<div>
			<CamCat catId={catid} />
		</div>
	);
};

export default page;
