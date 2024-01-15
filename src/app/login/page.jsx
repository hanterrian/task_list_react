"use client"

import { useState } from "react";
import * as yup from 'yup';
import { useFormik } from 'formik';

export default function Login() {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [items, setItems] = useState([]);

	const validationSchema = yup.object({
		email: yup.string().email().required(),
		password: yup.string().required(),
	});

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema,
		onSubmit: (values) => {
			setIsLoading(true)

			fetch('/api/login', {
				method: "POST",
				body: JSON.stringify(values)
			})
				.then(res => res.json())
				.then(
					(result) => {
						setIsLoading(false);
						setItems(result);
					},
					// Note: it's important to handle errors here
					// instead of a catch() block so that we don't swallow
					// exceptions from actual bugs in components.
					(error) => {
						setIsLoading(false);
						setError(error);
					}
				)
				.catch((error) => console.log(error));

			console.log(items);
			console.log(error);
		}
	});

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="">
				<form onSubmit={formik.handleSubmit}>
					<div>
						<label>Email</label>
						<input name="email" type="email"
							   value={formik.values.email}
							   onChange={formik.handleChange}
							   onBlur={formik.handleBlur}
						/>
						{formik.touched.email && Boolean(formik.errors.email) ? `<span>${formik.errors.email}</span>` : ''}
					</div>
					<div>
						<label>Password</label>
						<input name="password" type="password"
							   value={formik.values.password}
							   onChange={formik.handleChange}
							   onBlur={formik.handleBlur}/>
						{formik.touched.password && Boolean(formik.errors.password) ? `<span>${formik.errors.password}</span>` : ''}
					</div>
					<button type={"submit"}>Login</button>
				</form>
			</div>
		</main>
	);
}
