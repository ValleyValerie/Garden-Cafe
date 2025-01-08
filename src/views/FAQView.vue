<script setup>
import FAQ from '@/assets/images/FAQ.jpg';
import  '@/assets/images/AboutUs1.jpg';

</script>

<template>
  <div class="faq">
  <div :style="{ backgroundImage: `url(${FAQ})` }" class="relative bg-cover bg-center isolate px-6 pt-14 lg:px-8 z-50 w-full">
    <div class="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56 px-6">
      <div class="text-left">
        <h1 class="text-balance text-with-shadow text-3xl font-semibold tracking-tight text-white drop-shadow-2xl sm:text-5xl">
          Your Questions, Answered!
        </h1>
        <p class="mt-8 text-pretty text-with-shadow text-lg font-medium text-white drop-shadow-3xl sm:text-xl/8">
          Discover everything you need to know about Garden Cafe. From our menu to our services, we’re here to help.
        </p>
      </div>
    </div>
  </div>

  <section class="bg-white ">
    <div class="container px-6 py-12 mx-auto">
        <h3 class=" font-semibold text-black lg:text-3xl ">Frequently asked questions.</h3>

        <div class="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <div class="inline-block p-3 text-white bg-[#2e3f15] rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 class="text-xl font-semibold text-black ">What can i expect at my first consultation?</h1>

                    <p class="mt-2 text-sm text-gray-800 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident placeat, consequatur eveniet veritatis quos dignissimos beatae dolores exercitationem laboriosam officia magnam atque blanditiis illum doloremque magni ex corrupti tempora quis.
                    </p>
                </div>
            </div>

            <div>
                <div class="inline-block p-3 text-white bg-[#2e3f15] rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 class="text-xl font-semibold text-black">What are your opening house?</h1>

                    <p class="mt-2 text-sm text-gray-800">
                      We’re open daily from: <br>

Monday to Friday: 7:00 AM – 9:00 PM <br>
Saturday and Sunday: 8:00 AM – 8:00 PM
                    </p>
                </div>
            </div>

            <div>
                <div class="inline-block p-3 text-white bg-[#2e3f15] rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 class="text-xl font-semibold text-black ">Do you have vegetarian or vegan options?</h1>

                    <p class="mt-2 text-sm text-gray-800">
                      Absolutely! We offer a range of vegetarian and vegan dishes, including our popular Avocado Toast, Veggie Wrap, and plant-based milk options for your coffee.
                    </p>
                </div>
            </div>

            <div>
                <div class="inline-block p-3 text-white bg-[#2e3f15] rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 class="text-xl font-semibold text-black">Do you have free Wi-Fi?</h1>

                    <p class="mt-2 text-sm text-gray-800">
                      Yes, we provide free Wi-Fi for our customers. Just ask our staff for the password when you visit.
                    </p>
                </div>
            </div>

            <div>
                <div class="inline-block p-3 text-white bg-[#2e3f15] rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 class="text-xl font-semibold text-black"> Can I host private events at the cafe?</h1>

                    <p class="mt-2 text-sm text-gray-800">
                      Yes, we’d love to help you host your event! Our space is perfect for small gatherings like birthdays, book clubs, or business meetings. Contact us for more details about availability and pricing.
                    </p>
                </div>
            </div>

            <div>
                <div class="inline-block p-3 text-white bg-[#2e3f15] rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 class="text-xl font-semibold text-black">Are pets allowed?</h1>

                    <p class="mt-2 text-sm text-gray-800">
                      We welcome pets in our outdoor seating area. Unfortunately, pets are not allowed inside due to health regulations, except for service animals.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

  </div>
</template>

<style>

</style>
