import React from 'react'
import prod1 from './assets/1.webp'
import prod2 from './assets/2.webp'
import prod3 from './assets/3.webp'
import prod4 from './assets/4.webp'
import prod5 from './assets/5.webp'
import prod6 from './assets/6.jpg'
import prod7 from './assets/7.webp'
import prod8 from './assets/8.webp'
const Product = () => {
  return (
    <section class="products" id="products">
      <h1
        class="text-center   p-4 w-/4 text-4xl font-bold"
      >
        Products
      </h1>
      /
      <div
        class="flex flex-wrap justify-center items-stretch m-auto max-w-[90vw]"
      >
        <div
          class="transition-all duration-200 flex flex-col items-center cursor-pointer m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
        >
          <img
            src={prod1}
            alt="1st product"
            class="w-full h-[40vh]"
          />
          <h4 class="text-lg font-semibold">CYAN T-SHIRT</h4>
          <h5 class="text-md">$100</h5>
        </div>
        <div
          class="transition-all duration-200 flex flex-col items-center cursor-pointer m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
        >
          <img
            src={prod2}
            alt="1st product"
            class="w-full h-[40vh]"
          />
          <h4 class="text-lg font-semibold">CYAN T-SHIRT</h4>
          <h5 class="text-md">$100</h5>
        </div>
        <div
          class="transition-all duration-200 flex flex-col items-center cursor-pointer m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
        >
          <img
            src={prod3}
            alt="1st product"
            class="w-full h-[40vh]"
          />
          <h4 class="text-lg font-semibold">CYAN T-SHIRT</h4>
          <h5 class="text-md">$100</h5>
        </div>
        <div
          class="transition-all duration-200 flex flex-col items-center cursor-pointer m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
        >
          <img src={prod4} alt="1st product" class="w-full h-auto" />
          <h4 class="text-lg font-semibold">CYAN T-SHIRT</h4>
          <h5 class="text-md">$100</h5>
        </div>

        <div
          class="transition-all duration-200 flex flex-col items-center cursor-pointer m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
        >
          <img src={prod5} alt="1st product" class="w-full h-auto" />
          <h4 class="text-lg font-semibold">CYAN T-SHIRT</h4>
          <h5 class="text-md">$100</h5>
        </div>

        <div
          class="transition-all duration-200 flex flex-col items-center cursor-pointer m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
        >
          <img src={prod6} alt="1st product" class="w-full h-auto" />
          <h4 class="text-lg font-semibold">CYAN T-SHIRT</h4>
          <h5 class="text-md">$100</h5>
        </div>

        <div
          class="transition-all duration-200 flex flex-col items-center cursor-pointer m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
        >
          <img src={prod7} alt="1st product" class="w-full h-auto" />
          <h4 class="text-lg font-semibold">CYAN T-SHIRT</h4>
          <h5 class="text-md">$100</h5>
        </div>

        <div
          class="transition-all duration-200 flex flex-col items-center cursor-pointer m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
        >
          <img src={prod8} alt="1st product" class="w-full h-auto" />
          <h4 class="text-lg font-semibold">CYAN T-SHIRT</h4>
          <h5 class="text-md">$100</h5>
        </div>
      </div>
    </section>
  )
}

export default Product