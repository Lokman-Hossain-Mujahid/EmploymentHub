import React from 'react';

const Blog = () => {
    return (
        <div className='bg-purple-100 rounded-lg mt-7 p-3'>
            <div className='mt-20'>
                <h1 className='text-6xl font-semibold font-sans'>
                    Blog
                </h1>
            </div>
            <div className='text-left mt-10 pl-3'>
                <div className='mt-5'>
                    <h1 className='text-3xl font-semibold font-sans'>A. When should you use context API?</h1>
                    <p className='text-xl px-3 pt-2'><span className='font-bold'>Ans:</span> You should use the Context API in React when you need to share data across multiple components, have a deeply nested component tree, have data that needs to be accessed by multiple components at different levels, or have data that needs to be updated frequently. The Context API simplifies the process of passing data down through each component level via props and provides a more efficient way to manage the state of your application.</p>
                </div>
                <div className='mt-5'>
                    <h1 className='text-3xl font-semibold font-sans'>B. What is a custom hook?</h1>
                    <p className='text-xl px-3 pt-2'><span className='font-bold'>Ans:</span> In React, a custom hook is a reusable JavaScript function that encapsulates stateful logic and can be used across multiple functional components. Custom hooks enable the extraction of common functionality into a single location and follow the naming convention of using the word "use" followed by a descriptive name. They provide a way to abstract away complex logic into reusable units, making code more readable, maintainable, and easier to test.</p>
                </div>
                <div className='mt-5'>
                    <h1 className='text-3xl font-semibold font-sans'>C. What is useRef?</h1>
                    <p className='text-xl px-3 pt-2'><span className='font-bold'>Ans:</span> In React, the useRef hook provides a way to access and manipulate the DOM elements or mounted components directly. It returns a mutable ref object that can hold a value and can be used to access the DOM elements or store mutable values. By using the useRef hook, you can avoid causing a re-render of the component when the value of the ref object is updated. This makes it useful for implementing features like managing focus, animations, or interacting with third-party libraries.</p>
                </div>
                <div className='mt-5'>
                    <h1 className='text-3xl font-semibold font-sans'>D. What is useMemo?</h1>
                    <p className='text-xl px-3 pt-2'><span className='font-bold'>Ans:</span> In React, useMemo is a hook that helps optimize the performance of functional components that rely on expensive computations or calculations. It allows you to memoize the result of a function and only recompute it when one of its dependencies changes. The useMemo hook is useful for avoiding unnecessary re-renders and improving the overall performance of your application. By caching the result of the function, you can prevent it from being computed again until the dependencies change, which helps reduce the computational overhead and improves the rendering speed of your application.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;