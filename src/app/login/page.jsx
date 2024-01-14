"use client"

export default function Login() {
	async function onSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);
		const response = await fetch('/api/auth/login', {
			method: "POST",
			data: formData
		});

		const data = await response.json();

		console.log(data);
	}

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="">
				<form onSubmit={onSubmit}>
					<div>
						<label>Email</label>
						<input name="email" type="email"/>
					</div>
					<div>
						<label>Password</label>
						<input name="password" type="password"/>
					</div>
					<input type="submit" value="Login"/>
				</form>
			</div>
		</main>
	);
}
