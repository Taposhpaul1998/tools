import React from 'react';
import Footer from '../Shear/Footer/Footer';

const Blog = () => {
    return (
        <div>
            <div className='bg-teal-600  p-10'>
                <h2 className='text-white text-xl font-semibold'> (1) How will you improve the performance of a React Application?</h2>
                <p className='text-white my-2'>
                    Five wayes to improve the performance of a React Application.
                    <ul>
                        <li>1.Keeping component state local where necessary.</li>
                        <li>2.Memoizing React components to prevent unnecessary re-renders.</li>
                        <li>3.Code-splitting in React using dynamic import().</li>
                        <li>4.Windowing or list virtualization in React.</li>
                        <li>5.Lazy loading images in React.</li>
                    </ul>
                </p>

                <h2 className='text-white text-xl font-semibold'> (2)What are the different ways to manage a state in a React application?</h2>
                <p className='text-white my-2'>
                    different wayw to mange a state in a React Application.
                    <ul>
                        <li>1.Local state.</li>
                        <li>2.Global state.</li>
                        <li>3.Server state.</li>
                        <li> 4.URL state.</li>
                    </ul>
                </p>

                <h2 className='text-white text-xl font-semibold'> (3)  How does prototypical inheritance work?</h2>
                <p className='text-white my-2'>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.prototypical inheritance refers to the ability to access object properties from another object. getPrototypeOf and Object. It is a method by which an object can inherit the properties and methods of another object.A prototype is a working object instance. Objects inherit directly from other objects
                </p>

                <h2 className='text-white text-xl font-semibold'> (4) You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p className='text-white my-2'>

                    const product = products.find(product => product.name)
                </p>

                <h2 className='text-white text-xl font-semibold'> (5)  What is a unit test? Why should write unit tests?</h2>
                <p className='text-white my-2'>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended.UNIT TESTING is a type of software testing where individual units or components of a software are tested.
                    In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code.The purpose of a unit test in software engineering is to verify the behavior of a relatively small piece of software, independently from other parts.
                </p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;