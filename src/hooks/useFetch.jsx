"use client";
import { useState, useEffect } from "react";

export function useFetch(type) {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`);
				if (!res.ok) {
					throw new Error(`HTTP error! Status: ${res.status}`);
				}
				const result = await res.json();
				setData(result);
				setIsLoading(false);
			} catch (err) {
				setError(err);
				setIsLoading(false);
			}
		}

		fetchData();
	}, [type]);

	return { isLoading, error, data };
}
