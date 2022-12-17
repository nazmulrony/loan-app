import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-hot-toast';

const LoanForm = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [birthDate, setBirthDate] = useState(new Date());
    const [toggleState, setToggleState] = useState(1);
    const [loading, setLoading] = useState(false);
    //form handle 
    const handleSaveLoanData = (data) => {
        setLoading(true);
        const dateOfBirth = birthDate.toLocaleDateString();
        const loanData = {
            name: `${data.firstName} ${data.lastName}`,
            dateOfBirth: dateOfBirth,
            phone: data.phone,
            businessName: data.businessName,
            address: data.address,
            gstNo: data.gstNo,
            email: data.email,
            loanAmount: data.amount,
            interestRate: data.interestRate,
            loanTenure: data.loanTenure,
            income: data.income
        }
        console.log(loanData);
        fetch("https://loan-app-server.vercel.app/loans", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(loanData)
        })
            .then(res => res.json())
            .then(formData => {
                if (formData.acknowledged) {
                    reset();
                    toast.success('Your application successfully submitted.')
                }
                console.log(formData);
                setLoading(false);
            })

    }
    // console.log(errors);
    return (
        <div className='mx-auto lg:w-2/3 mt-10 bg-gray-200 border shadow-lg shadow-black/10'>
            <div className='flex gap-6'>
                <div onClick={() => setToggleState(1)} className={`cursor-pointer px-6 py-2 ${toggleState === 1 ? 'bg-gray-50  border-t-2 border-blue-600' : ''} `}>Tab 1</div>
                <div onClick={() => setToggleState(2)} className={`cursor-pointer px-6 py-2 ${toggleState === 2 ? 'bg-gray-50  border-t-2 border-blue-600' : ''}`}>Tab 2</div>
                <div onClick={() => setToggleState(3)} className={`cursor-pointer px-6 py-2 ${toggleState === 3 ? 'bg-gray-50  border-t-2 border-blue-600' : ''}`}>Tab 3</div>
            </div>

            <form onSubmit={handleSubmit(handleSaveLoanData)} className="bg-gray-50 flex flex-col items-start px-10 py-6 ">
                {/* First tab Code */}
                <div className={`p-2 w-full ${toggleState === 1 ? 'block' : 'hidden'}`}>
                    <div className=' flex flex-col lg:flex-row gap-6 justify-between w-full mb-4'>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">First Name</label>
                            <input
                                type="text"
                                {...register("firstName", {
                                    required: 'First name is required'
                                })}
                                placeholder="Enter your first name"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md border"
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
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md border "
                            />
                            {errors.lastName && <p className='text-red-600 mt-1 text-sm'>{errors.lastName?.message}</p>}
                        </div>
                    </div>
                    <div className=' flex flex-col lg:flex-row gap-6 justify-between w-full'>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">Phone Number</label>
                            <input
                                type="text"
                                {...register("phone", {
                                    required: 'Phone number is required',
                                    pattern: { value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/, message: 'Invalid phone number' }
                                })}
                                placeholder="Enter your phone number"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md border"
                            />
                            {errors.phone && <p className='text-red-600 mt-1 text-sm'>{errors.phone?.message}</p>}
                        </div>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">Date of Birth</label>
                            <DatePicker
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md border"
                                selected={birthDate}
                                onChange={(date) => setBirthDate(date)}
                            />
                        </div>
                    </div>
                    <div className='flex justify-end mt-6'>
                        <label onClick={() => setToggleState(toggleState + 1)} className='px-6 py-2 bg-blue-600 rounded-lg text-white flex items-center hover:bg-blue-700 duration-300'>Next <AiOutlineDoubleRight className='text-xl text-white' /></label>
                    </div>
                </div>
                {/* Second Tab Code */}
                <div className={`p-2 w-full  ${toggleState === 2 ? 'block' : 'hidden'}`}>
                    <div className=' flex flex-col lg:flex-row gap-6 justify-between w-full mb-4'>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">Business Name</label>
                            <input
                                type="text"
                                {...register("businessName", {
                                    required: 'Business name is required'
                                })}
                                placeholder="Enter your business name"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md border"
                            />
                            {errors.businessName && <p className='text-red-600 mt-1 text-sm'>{errors.businessName?.message}</p>}
                        </div>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">GST No.</label>
                            <input
                                type="text"
                                {...register("gstNo", {
                                    required: 'GST number is required',
                                    minLength: { value: 15, message: 'GST number must 15 characters long.' }
                                })}
                                placeholder="Enter GST number"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md border"
                            />
                            {errors.gstNo && <p className='text-red-600 mt-1 text-sm'>{errors.gstNo?.message}</p>}
                        </div>
                    </div>
                    <div className=' flex flex-col lg:flex-row gap-6 justify-between w-full'>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">Address</label>
                            <input
                                type="text"
                                {...register("address", {
                                    required: 'Address is required'
                                })}
                                placeholder="Enter your address"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md border"
                            />
                            {errors.address && <p className='text-red-600 mt-1 text-sm'>{errors.address?.message}</p>}
                        </div>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">Email</label>
                            <input
                                type="email"
                                {...register("email", {
                                    required: 'Email is required',
                                    pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Invalid email' }
                                })}
                                placeholder="Enter your email"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md border"
                            />
                            {errors.email && <p className='text-red-600 mt-1 text-sm'>{errors.email?.message}</p>}
                        </div>
                    </div>
                    <div className='flex justify-end mt-6'>
                        <label onClick={() => setToggleState(toggleState + 1)} className='px-6 py-2 bg-blue-600 rounded-lg text-white flex items-center hover:bg-blue-700 duration-300'>Next <AiOutlineDoubleRight className='text-xl text-white' /></label>
                    </div>
                </div>
                {/* Third tab code */}
                <div className={`p-2 w-full  ${toggleState === 3 ? 'block' : 'hidden'}`}>
                    <div className=' flex flex-col lg:flex-row gap-6 justify-between w-full mb-4'>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">Loan Amount</label>
                            <input
                                type="text"
                                {...register("amount", {
                                    required: 'Business name is required',
                                    pattern: { value: /^[1-9]\d*(\.\d+)?$/, message: 'Please enter a valid loan amount' }
                                })}
                                placeholder="Enter your business name"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md border"
                            />
                            {errors.amount && <p className='text-red-600 mt-1 text-sm'>{errors.amount?.message}</p>}
                        </div>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">Interest Rate</label>
                            {/* <input
                                type="text"
                                {...register("interestRate", {
                                    required: 'Interest rate is required'
                                })}
                                placeholder="Enter interest rate"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md "
                            /> */}
                            <select
                                {...register("interestRate", {
                                    required: 'Interest rate is required'
                                })}
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md border"
                            >
                                <option value="5">5%</option>
                                <option value="10">10%</option>
                                <option value="15">15%</option>
                            </select>
                            {errors.interestRate && <p className='text-red-600 mt-1 text-sm'>{errors.interestRate?.message}</p>}
                        </div>
                    </div>
                    <div className=' flex flex-col lg:flex-row gap-6 justify-between w-full'>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">Income</label>
                            <input
                                type="text"
                                {...register("income", {
                                    required: 'Income is required',
                                    pattern: { value: /^[1-9]\d*(\.\d+)?$/, message: 'Please enter a valid income amount' }
                                })}
                                placeholder="Enter your income"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md border"
                            />
                            {errors.income && <p className='text-red-600 mt-1 text-sm'>{errors.income?.message}</p>}
                        </div>
                        <div className='flex w-full flex-col items-start'>
                            <label className="label">Loan Tenure</label>
                            <input
                                type="text"
                                {...register("loanTenure", {
                                    required: 'Loan tenure is required',
                                    pattern: { value: /^[1-9]\d*(\.\d+)?$/, message: 'Invalid loan tenure' }
                                })}
                                placeholder="Enter loan tenure (years)"
                                className="p-2 w-full shadow-md shadow-black/5 rounded-md border"
                            />
                            {errors.loanTenure && <p className='text-red-600 mt-1 text-sm'>{errors.loanTenure?.message}</p>}
                        </div>
                    </div>
                    {Object.keys(errors)?.length > 0 && <p className='text-red-600 text-left mt-4'>Please fix the red marked fields</p>}
                    <div className='flex justify-end mt-6'>
                        <input type='submit' value={loading ? 'Loading...' : 'Submit'} className='px-6 py-2 cursor-pointer bg-blue-600 rounded-lg text-white flex items-center hover:bg-blue-700 duration-300' />
                    </div>
                </div>
            </form>

        </div>
    );
};

export default LoanForm;