import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const LoanForm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [startDate, setStartDate] = useState(new Date());
    const [birthDate, setBirthDate] = useState(new Date());
    const [toggleState, setToggleState] = useState(1);
    const handleSaveLoanData = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const age = form.age.value;
        const account = form.account.value;
        console.log(name, age, account);


    }
    console.log(startDate);
    return (
        <div className='mx-auto w-2/3 mt-10 bg-gray-200 border'>
            <div className='flex gap-6'>
                <div onClick={() => setToggleState(1)} className={`cursor-pointer px-6 py-2 ${toggleState === 1 ? 'bg-gray-100  border-t-2 border-blue-600' : ''} `}>Tab 1</div>
                <div onClick={() => setToggleState(2)} className={`cursor-pointer px-6 py-2 ${toggleState === 2 ? 'bg-gray-100  border-t-2 border-blue-600' : ''}`}>Tab 2</div>
                <div onClick={() => setToggleState(3)} className={`cursor-pointer px-6 py-2 ${toggleState === 3 ? 'bg-gray-100  border-t-2 border-blue-600' : ''}`}>Tab 3</div>
            </div>

            <form onSubmit={handleSubmit(handleSaveLoanData)} className="bg-gray-100 flex flex-col items-start px-10 py-6 ">
                {/* First tab Code */}
                <div className={`p-2 w-full ${toggleState === 1 ? 'block' : 'hidden'}`}>
                    <div className=' flex gap-6 justify-between w-full mb-4'>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">First Name</label>
                            <input
                                type="text"
                                {...register("firstName", {
                                    required: 'First name is required'
                                })}
                                placeholder="Enter your first name"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md"
                            />
                            {errors.firstName && <p className='text-red-600 mt-1 text-sm'>{errors.firstName?.message}</p>}
                        </div>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">Last Name</label>
                            <input
                                type="text"
                                {...register("lastName", {
                                    required: 'Last name is required'
                                })}
                                placeholder="Enter your last name"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md "
                            />
                            {errors.lastName && <p className='text-red-600 mt-1 text-sm'>{errors.lastName?.message}</p>}
                        </div>
                    </div>
                    <div className=' flex gap-6 justify-between w-full'>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">Phone Number</label>
                            <input
                                type="number"
                                {...register("phone", {
                                    required: 'Phone number is required'
                                })}
                                placeholder="Enter your phone number"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md"
                            />
                            {errors.phone && <p className='text-red-600 mt-1 text-sm'>{errors.phone?.message}</p>}
                        </div>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">Date of Birth</label>
                            <DatePicker
                                {...register("dateOfBirth", {
                                    required: 'Date of birth is required'
                                })}
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                            {errors.dateOfBirth && <p className='text-red-600 mt-1 text-sm'>{errors.dateOfBirth?.message}</p>}
                        </div>
                    </div>
                    <div className='flex justify-end mt-6'>
                        <button onClick={() => setToggleState(toggleState + 1)} className='px-6 py-2 bg-blue-600 rounded-lg text-white flex items-center hover:bg-blue-700 duration-300'>Next <AiOutlineDoubleRight className='text-xl text-white' /></button>
                    </div>
                </div>
                {/* Second Tab Code */}
                <div className={`p-2 w-full  ${toggleState === 2 ? 'block' : 'hidden'}`}>
                    <div className=' flex gap-6 justify-between w-full mb-4'>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">Business Name</label>
                            <input
                                type="text"
                                {...register("businessName", {
                                    required: 'Business name is required'
                                })}
                                placeholder="Enter your business name"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md"
                            />
                            {errors.businessName && <p className='text-red-600 mt-1 text-sm'>{errors.businessName?.message}</p>}
                        </div>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">GST No.</label>
                            <input
                                type="text"
                                {...register("gstNo", {
                                    required: 'GST number is required'
                                })}
                                placeholder="Enter GST number"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md "
                            />
                            {errors.gstNo && <p className='text-red-600 mt-1 text-sm'>{errors.gstNo?.message}</p>}
                        </div>
                    </div>
                    <div className=' flex gap-6 justify-between w-full'>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">Address</label>
                            <input
                                type="text"
                                {...register("address", {
                                    required: 'Address is required'
                                })}
                                placeholder="Enter your address"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md"
                            />
                            {errors.address && <p className='text-red-600 mt-1 text-sm'>{errors.address?.message}</p>}
                        </div>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">Email</label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: 'Email is required'
                                })}
                                placeholder="Enter your email"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md "
                            />
                            {errors.email && <p className='text-red-600 mt-1 text-sm'>{errors.email?.message}</p>}
                        </div>
                    </div>
                    <div className='flex justify-end mt-6'>
                        <button onClick={() => setToggleState(toggleState + 1)} className='px-6 py-2 bg-blue-600 rounded-lg text-white flex items-center hover:bg-blue-700 duration-300'>Next <AiOutlineDoubleRight className='text-xl text-white' /></button>
                    </div>
                </div>
                {/* Third tab code */}
                <div className={`p-2 w-full  ${toggleState === 3 ? 'block' : 'hidden'}`}>
                    <div className=' flex gap-6 justify-between w-full mb-4'>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">Loan Amount</label>
                            <input
                                type="text"
                                {...register("amount", {
                                    required: 'Business name is required'
                                })}
                                placeholder="Enter your business name"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md"
                            />
                            {errors.amount && <p className='text-red-600 mt-1 text-sm'>{errors.amount?.message}</p>}
                        </div>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">Interest Rate</label>
                            <input
                                type="text"
                                {...register("interestRate", {
                                    required: 'GST number is required'
                                })}
                                placeholder="Enter GST number"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md "
                            />
                            {errors.interestRate && <p className='text-red-600 mt-1 text-sm'>{errors.interestRate?.message}</p>}
                        </div>
                    </div>
                    <div className=' flex gap-6 justify-between w-full'>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">Loan Tenure</label>
                            <input
                                type="text"
                                {...register("loanTenure", {
                                    required: 'Address is required'
                                })}
                                placeholder="Enter your address"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md"
                            />
                            {errors.loanTenure && <p className='text-red-600 mt-1 text-sm'>{errors.loanTenure?.message}</p>}
                        </div>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">Date</label>
                            {/* <input
                                type="email"
                                {...register("email", {
                                    required: 'Email is required'
                                })}
                                placeholder="Enter your email"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md "
                            /> */}
                            <DatePicker className='w-full p-2 shadow-md shadow-black/5 rounded-md' selected={startDate} onChange={(date) => setStartDate(date)} />
                            {errors.email && <p className='text-red-600 mt-1 text-sm'>{errors.email?.message}</p>}
                        </div>
                    </div>
                    <div className='flex justify-end mt-6'>
                        <button type='submit' className='px-6 py-2 bg-blue-600 rounded-lg text-white flex items-center hover:bg-blue-700 duration-300'>Submit </button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default LoanForm;