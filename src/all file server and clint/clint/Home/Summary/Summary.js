import React from 'react';

const Summary = () => {
    return (
        <div className='py-6'>
            <h2 className='text-white font-semibold text-2xl text-center mb-8'>Business Summary</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 m-10 py-6 bg-base-200 rounded'>
                <div class="p-6 text-center w-96 gap-4">
                    <h2 className='flex justify-center'><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg></h2>
                    <h2 className='font-bold text-2xl text-teal-900 mb-4'> 33K+ </h2>
                    <p className='font-bold text-xl text-teal-700'>Reviews</p>
                </div>
                <div class="p-6 text-center w-96 gap-4">
                    <h2 className='flex justify-center'><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-2 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg></h2>
                    <h2 className='font-bold text-2xl text-teal-900 mb-4'> 40+ </h2>
                    <p className='font-bold text-xl text-teal-700'>Tools</p>
                </div>
                <div class=" p-6 text-center  w-96 gap-4">
                    <h2 className='flex justify-center '><svg className='w-10 mt-2 text-teal-600' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg></h2>
                    <h2 className='font-bold text-2xl text-teal-900 mb-4'> 100+ </h2>
                    <p className='font-bold text-xl text-teal-700'>customers</p>
                </div>
            </div>
        </div>
    );
};

export default Summary;