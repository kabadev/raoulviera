"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Preview = ({ data }) => {
	return (
		<div>
			<iframe
				src={data}
				className="min-h-[400px] w-full"
				sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
			></iframe>
		</div>
	);
};

export default Preview;
