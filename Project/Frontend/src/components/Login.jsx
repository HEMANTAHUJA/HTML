import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { z } from 'zod';
import { login } from '../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const validationSchema = z.object({
        email: z.string().min(1, "Email is required").email("Invalid Email"),
        password: z.string().min(1, "Password is required")
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, error, isAuth } = useSelector((state) => state.auth);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(validationSchema)
    });

    const onSubmit = async (data) => {
        dispatch(login(data));
    }

    useEffect(() => {
        if (error) {
            alert(error.message)
        }
    }, [error]);

    useEffect(() => {
        if (isAuth) {
            navigate("/")
        }
    }, [isAuth]);

    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:5000/api/auth/google';
    };

    return (
        <div className='flex flex-col md:flex-row w-full h-screen justify-center items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500'>
            <div className='hidden md:block md:w-1/2 h-full'>
                <img src="https://th.bing.com/th/id/OIP.oiGZChbKgg-vXPPbsrd5QQHaFN?rs=1&pid=ImgDetMain" alt="Login Visual" className="object-cover w-full h-full" />
            </div>
            <div className='w-full md:w-1/2 h-full flex flex-col justify-center items-center bg-white shadow-lg p-8 rounded-lg'>
                <h1 className='text-4xl font-bold text-purple-800 mb-6'>Welcome Back!</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                    <div className='mb-4'>
                        <label className='block text-gray-700 font-medium'>Email</label>
                        <input type="email" className={`block p-3 w-full border rounded-lg shadow-sm ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-600`} {...register("email")} />
                        {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 font-medium'>Password</label>
                        <input type="password" className={`block p-3 w-full border rounded-lg shadow-sm ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-purple-600`} {...register("password")} />
                        {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
                    </div>
                    <button type="submit" className={`w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-purple-700 active:bg-purple-800`}>
                        {isLoading ? "Logging In..." : "Log In"}
                    </button>
                </form>
                <p className="text-gray-500 my-4">Or</p>
                <button onClick={handleGoogleLogin} className='w-full py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-red-700 active:bg-red-800'>
                    Log In with Google
                </button>
            </div>
        </div>
    )
}

export default Login;
