import React from "react";

import AnsysCat from "./AnsysCat";

const page = ({ params }) => {
	const { catid } = params;
	return (
		<div>
			<AnsysCat catId={catid} />
		</div>
	);
};

export default page;
