import React from 'react'

const Contact = () => {
  return (
    <section id="contact"
      class="container mx-auto py-20  px-4 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3  bg-white"
    >
      <div class="p-5 space-y-5 shadow-xl">
        <h4 class="text-center text-2xl sm:text-3xl">Contact Us</h4>

        <form>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
              placeholder="First Name"
            />
            <input
              type="text"
              class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
              placeholder="Last Name"
            />
            <input
              type="email"
              class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 md:col-span-2"
              placeholder="Email"
            />
            <input
              type="tel"
              class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 md:col-span-2"
              placeholder="Phone"
            />
            <textarea
              class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 md:col-span-2"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send Message"
            class="focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold w-full hover:bg-purple-600 transition-colors duration-200"
          />
        </form>
      </div>
    </section>
  )
}

export default Contact