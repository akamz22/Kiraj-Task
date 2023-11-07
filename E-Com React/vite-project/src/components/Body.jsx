import React from 'react'
import home from './assets/home.jpg'
const Body = () => {
    return (
        <section id="home"
            class="flex flex-col md:flex-row items-center justify-center min-h-[100vh]"
        >
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="flex flex-col md:w-1/2 w-full md:pr-10 md:py-6">
                    <h1
                        class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
                    >
                        Live Your Life In...
                    </h1>
                    <h2
                        class="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900"
                    >
                        A New Style!
                    </h2>
                    <p class="lg:w-2/3 leading-relaxed text-base">
                        They say first impression is the last impression. Don't wait, Bless
                        yourself with perfect clothing
                    </p>
                    <button
                        class="flex mt-8 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                    >
                        Explore Now →
                    </button>
                </div>
                <div class="md:w-1/2 w-full">
                    <img
                        class="object-cover object-center rounded-lg"
                        src={home}
                        alt="home"
                    />
                </div>
            </div>
        </section>
    )
}

export default Body