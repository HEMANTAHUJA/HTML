import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { z } from 'zod';
import { signup } from '../redux/slices/authSlice';

const Signup = () => {
    const validationSchema = z.object({
        name: z.string().min(1, "Name is required").max(40, "Name cannot exceed 40 characters"),
        email: z.string().min(1, "Email is required").email("Invalid email"),
        password: z.string()
            .min(8, "Password must be at least 8 characters")
            .regex(/[A-Z]/, "Password must contain at least 1 uppercase letter")
            .regex(/[a-z]/, "Password must contain at least 1 lowercase letter")
            .regex(/[0-9]/, "Password must contain at least 1 number")
            .regex(/[\W_]/, "Password must contain at least 1 special character"),
        phoneNumber: z.string().min(1, "Phone number is required")
    });

    const dispatch = useDispatch();
    const { isLoading, error } = useSelector((state) => state.auth);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(validationSchema)
    });

    const onSubmit = async (data) => {
        dispatch(signup(data));
    };

    useEffect(() => {
        if (error) {
            alert(error.message);
        }
    }, [error]);

    return (
        <div className='flex flex-col md:flex-row w-full h-screen justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className='hidden md:block md:w-1/2 h-full'>
                <img src="https://th.bing.com/th/id/OIP.oiGZChbKgg-vXPPbsrd5QQHaFN?rs=1&pid=ImgDetMain" alt="Signup Visual" className="object-cover w-full h-full" />
            </div>
            <div className='w-full md:w-1/2 h-full flex flex-col justify-center items-center bg-white shadow-lg p-8 rounded-lg'>
                <h1 className='text-4xl font-bold text-indigo-800 mb-6'>Join Us!</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                        <div>
                            <label className='block text-gray-700 font-medium'>Name</label>
                            <input type="text" className={`block p-3 w-full border rounded-lg shadow-sm ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-600`} {...register("name")} />
                            {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>}
                        </div>
                        <div>
                            <label className='block text-gray-700 font-medium'>Email</label>
                            <input type="email" className={`block p-3 w-full border rounded-lg shadow-sm ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-600`} {...register("email")} />
                            {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
                        </div>
                        <div>
                            <label className='block text-gray-700 font-medium'>Password</label>
                            <input type="password" className={`block p-3 w-full border rounded-lg shadow-sm ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-600`} {...register("password")} />
                            {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
                        </div>
                        <div>
                            <label className='block text-gray-700 font-medium'>Phone Number</label>
                            <input type="number" className={`block p-3 w-full border rounded-lg shadow-sm ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-600`} {...register("phoneNumber")} />
                            {errors.phoneNumber && <p className='text-red-500 text-sm mt-1'>{errors.phoneNumber.message}</p>}
                        </div>
                    </div>
                    <button type="submit" className={`w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-indigo-700 active:bg-indigo-800`}>
                        {isLoading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Signup;
