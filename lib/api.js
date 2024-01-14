async function fetchApi(url, { variables }, method = "POST") {
	const header = {
		"Accept": "application/json",
		"Content-Type": "application/json",
	};

	const res = await fetch(url, {
		method: method,
		headers: headers,
		body: JSON.stringify(variables)
	});

	const json = res.json();

	if (json.errors) {
		console.error(json.errors);
		throw new Error("Failed to fetch API");
	}

	return json.data;
}
