import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='md:flex justify-around md:text-left mt-6 p-3 bg-purple-100 rounded-lg pt-10 pb-5'>
                <div>
                    <h1 className=' text-2xl font-semibold font-sans'>EmploymentHub</h1>
                    <p className='md:mt-2 mt-4'>There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
                </div>
                <div>
                    <h1 className='mt-3 md:mt-0 text-2xl font-semibold font-sans'>Company</h1>
                    <ul className='md:mt-2 mt-4'>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div>
                    <h1 className='mt-3 md:mt-0 text-2xl font-semibold font-sans'>Product</h1>
                    <ul className='md:mt-2 mt-4'>
                        <li>Prototype</li>
                        <li>Plans & Pricing</li>
                        <li>Customers</li>
                        <li>Integrations</li>
                    </ul>
                </div>
                <div>
                    <h1 className='mt-3 md:mt-0 text-2xl font-semibold font-sans'>Support</h1>
                    <ul className='md:mt-2 mt-4pl-2 '>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Becomes a Partner</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div>
                    <h1 className='mt-3 md:mt-0 text-2xl font-semibold font-sans'>Contact</h1>
                    <ul className='md:mt-2 mt-4'>
                        <li>Modhubagh, Moghbazar</li>
                        <li>+1777-999-4444</li>
                    </ul>
                </div>
            </div>
            <hr className='mt-3' />
            <div className='md:flex justify-between text-slate-600 mt-3'>
                <p>@2023 CareerHub. All Rights Reserved</p>
                <p className='md:mt-0 mt-2'>Powered by EmploymentHub</p>
            </div>
        </div>
    );
};

export default Footer;