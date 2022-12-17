import React, { useEffect, useState } from 'react';

const LoanApplications = () => {
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        fetch('https://loan-app-server.vercel.app/loans')
            .then(res => res.json())
            .then(data => setLoans(data));
    }, [])
    // console.log(loans);
    return (
        <div className='px-4 lg:px-12 lg:py-6'>
            <h3 className='text-2xl text-blue-600 text-center'>Loan Applications</h3>

            <div className='my-4 overflow-x-auto'>
                <table className='w-full shadow-lg shadow-black/10'>
                    <thead className='bg-blue-600 text-white'>
                        <tr >
                            <th className='px-4 py-2'>S/N</th>
                            <th className='px-4 py-2'>Name</th>
                            <th className='px-4 py-2'>Phone</th>
                            <th className='px-4 py-2'>Business Name</th>
                            <th className='px-4 py-2'>Loan Amount</th>
                            <th className='px-4 py-2'>Interest Rate</th>
                            <th className='px-4 py-2'>Loan Tenure</th>
                        </tr>
                    </thead>
                    <tbody className=' divide-y divide-gray-300'>
                        {
                            loans.length ? loans.map((loan, i) => <tr
                                key={loan._id}
                                className='text-center bg-gray-100 hover:bg-gray-200'
                            >
                                <td className='px-4 py-2'>{i + 1}</td>
                                <td className='px-4 py-2'>{loan.name}</td>
                                <td className='px-4 py-2'>{loan.phone}</td>
                                <td className='px-4 py-2'>{loan.businessName}</td>
                                <td className='px-4 py-2'>{loan.loanAmount}</td>
                                <td className='px-4 py-2'>{loan.interestRate}</td>
                                <td className='px-4 py-2'>{loan.loanTenure} years</td>

                            </tr>) : null
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default LoanApplications;