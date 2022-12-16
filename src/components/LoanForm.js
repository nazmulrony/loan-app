import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const LoanForm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [toggleState, setToggleState] = useState(1);
    const handleSaveLoanData = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const age = form.age.value;
        const account = form.account.value;
        console.log(name, age, account);


    }
    return (
        <div className='mx-auto w-2/3 mt-10 bg-gray-200 border'>
            <div className='flex gap-6'>
                <div onClick={() => setToggleState(1)} className={`cursor-pointer px-6 py-2 ${toggleState === 1 ? 'bg-gray-100  border-t-2 border-blue-600' : ''} `}>Tab 1</div>
                <div onClick={() => setToggleState(2)} className={`cursor-pointer px-6 py-2 ${toggleState === 2 ? 'bg-gray-100  border-t-2 border-blue-600' : ''}`}>Tab 2</div>
                <div onClick={() => setToggleState(3)} className={`cursor-pointer px-6 py-2 ${toggleState === 3 ? 'bg-gray-100  border-t-2 border-blue-600' : ''}`}>Tab 3</div>
            </div>

            <form onSubmit={handleSubmit(handleSaveLoanData)} className="bg-gray-100 flex flex-col items-start px-10 ">
                {/* First tab Code */}
                <div className={`p-2 ${toggleState === 1 ? 'block' : 'hidden'}`}>
                    <div className='flex flex-col items-start'>
                        <label className="label">Email</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: 'Email is required'
                            })}
                            placeholder="Enter Email"
                            className="p-2"
                        />
                    </div>
                </div>
                {/* Second Tab Code */}
                <div className={`p-2 ${toggleState === 2 ? 'block' : 'hidden'}`}>
                    <input type="text" name='age' />
                </div>
                {/* Third tab code */}
                <div className={`p-2 ${toggleState === 3 ? 'block' : 'hidden'}`}>
                    <input type="text" name='account' />
                    <input type="submit" value="submit" className='bg-blue-600' />
                </div>
            </form>

        </div>
    );
};

export default LoanForm;