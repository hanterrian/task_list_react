const API_URL = process.env.API_URL;

export async function POST(request) {
	const res = await request.json()

	const req = await fetch(`${API_URL}/auth/login`, {
		next: { revalidate: 60 },
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(res)
	});

	const data = await req.json();

	return Response.json(data);
}
