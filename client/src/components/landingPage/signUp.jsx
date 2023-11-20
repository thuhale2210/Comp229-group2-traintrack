import * as yup from 'yup';
import { useFormik, ErrorMessage } from 'formik';
import axios from 'axios';

const SignUp = ({ signIn }) => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			gender: 'male',
			email: '',
			password: '',
			confirmPassword: '',
			role: 'customer',
		},
		onSubmit: (values) => {
			handleSignUp();
		},
		validationSchema: yup.object().shape({
			firstName: yup.string().required('First name is required'),
			lastName: yup.string().required('Last name is required'),
			gender: yup.string().oneOf(['male', 'female'], 'Required').required('Gender is required'),
			email: yup.string().email('Email is invalid').required('Email is required'),
			password: yup
				.string()
				.min(6, 'Password must be at least 6 characters')
				.required('Password is required'),
			confirmPassword: yup
				.string()
				.oneOf([yup.ref('password')], 'Password not matched')
				.required('Password is required'),
			role: yup
				.string()
				.required()
				.oneOf(['customer', 'trainer'], 'Selecting user type is required'),
		}),
	});

	const handleSignUp = () => {
		//console.log(formik.values);
		var newUser = {
			firstName: formik.values.firstName,
			lastName: formik.values.lastName,
			gender: formik.values.gender,
			email: formik.values.email,
			password: formik.values.password,
			role: formik.values.role,
		};

		axios
			.post('http://localhost:4000/addAccount', newUser)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	};

	return (
		<div
			className={`absolute top-0 h-full transition-all duration-600 ease-in-out left-0 w-1/2 ${
				!signIn ? 'transform translate-x-full opacity-100 z-5' : 'opacity-0 z-1'
			}`}
		>
			<form
				className="bg-white flex items-center justify-center flex-col px-10 h-full text-center"
				onSubmit={formik.handleSubmit}
			>
				<h4 className="font-bold my-5 text-black">Create Account</h4>
				<input
					className="rounded-lg bg-gray-200 border-none p-3 my-2 w-full text-base"
					type="text"
					name="firstName"
					placeholder="Enter your First Name"
					value={formik.values.firstName}
					onChange={formik.handleChange}
				/>
				{/* <ErrorMessage className="text-red-500 text-xs" name="firstName" component="div" /> */}
				<input
					className="rounded-lg bg-gray-200 border-none p-3 my-2 w-full text-base"
					type="text"
					name="lastName"
					placeholder="Enter your Last Name"
					value={formik.values.lastName}
					onChange={formik.handleChange}
				/>
				{/* <ErrorMessage className="text-red-500 text-xs" name="lastName" component="div" /> */}
				<div className="flex items-center justify-items-stretch">
					<div className="col-auto">
						<p className="text-black text-sm font-hairline tracking-wide my-5 mb-8">Gender</p>
					</div>
					<div className="col-auto">
						<input
							className="rounded-lg bg-gray-200 border-none p-3 my-2 w-full text-base"
							type="radio"
							name="gender"
							checked={formik.values.gender === 'male'}
							onChange={() => formik.setFieldValue('gender', 'male')}
						></input>
						<label className="text-black text-sm">Male</label>
					</div>
					<div className="col-auto">
						<input
							className="rounded-lg bg-gray-200 border-none p-3 my-2 w-full text-base"
							type="radio"
							name="gender2"
							checked={formik.values.gender === 'female'}
							onChange={() => formik.setFieldValue('gender', 'female')}
						></input>
						<label className="text-black text-sm">Female</label>
					</div>
				</div>
				{/* <ErrorMessage className="text-red-500 text-xs" name="gender" component="div" /> */}
				<input
					className="rounded-lg bg-gray-200 border-none p-3 my-2 w-full text-base"
					type="email"
					name="email"
					placeholder="Email"
					value={formik.values.email}
					onChange={formik.handleChange}
				/>
				{/* <ErrorMessage className="text-red-500 text-xs" name="email" component="div" /> */}
				<input
					className="rounded-lg bg-gray-200 border-none p-3 my-2 w-full text-base"
					type="password"
					name="password"
					placeholder="Password"
					value={formik.values.password}
					onChange={formik.handleChange}
				/>
				{/* <ErrorMessage className="text-red-500 text-xs" name="password" component="div" /> */}
				<input
					className="rounded-lg bg-gray-200 border-none p-3 my-2 w-full text-base"
					type="password"
					name="confirmPassword"
					placeholder="Confirm your password"
					value={formik.values.confirmPassword}
					onChange={formik.handleChange}
				/>
				{/* <ErrorMessage className="text-red-500 text-xs" name="confirmPassword" component="div" /> */}
				<div className="flex items-center left-0">
					<div className="col-auto">
						<input
							className="rounded-lg bg-gray-200 border-none p-3 my-2 w-full text-base"
							type="radio"
							name="role"
							checked={formik.values.role === 'customer'}
							onChange={() => formik.setFieldValue('role', 'customer')}
						></input>
						<label className="text-black text-sm">Customer</label>
					</div>
					<div className="col-auto">
						<input
							className="rounded-lg bg-gray-200 border-none p-3 my-2 w-full text-base"
							type="radio"
							name="role2"
							checked={formik.values.role === 'trainer'}
							onChange={() => formik.setFieldValue('role', 'trainer')}
						></input>
						<label className="text-black text-sm">Personal Trainer</label>
					</div>
				</div>
				{/* <ErrorMessage className="text-red-500 text-xs" name="role" component="div" /> */}
				<button
					className="rounded-full border-2 border-solid border-orange-500 bg-orange-500 text-white font-bold text-xs md:text-sm lg:text-base px-12 md:px-16 py-2 md:py-3 uppercase tracking-wide transition-transform duration-80 ease-in focus:outline-none active:scale-95"
					type="submit"
				>
					Sign up
				</button>
			</form>
		</div>
	);
};

export default SignUp;