<script setup>
import AboutUsHero from '@/assets/images/AboutUsHero-Section.jpg';
import  '@/assets/images/AboutUs1.jpg';

import { PlusIcon } from '@heroicons/vue/20/solid'
</script>

<template>
  <div class="about">
  <div :style="{ backgroundImage: `url(${AboutUsHero})` }" class="relative bg-cover bg-center isolate px-6 pt-14 lg:px-8 z-50 w-full">
    <div class="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56 px-6">
      <div class="text-left">
        <h1 class="text-balance text-with-shadow text-3xl font-semibold tracking-tight text-white drop-shadow-2xl sm:text-5xl">
          Coffee. Community. Comfort.
        </h1>
        <p class="mt-8 text-pretty text-with-shadow text-lg font-medium text-white drop-shadow-3xl sm:text-xl/8">
          Serving artisanal coffee, fresh pastries, and a warm welcome in the heart of Food city.
        </p>
      </div>
    </div>
  </div>

  <div class="relative isolate overflow-hidden bg-white px-6 py-14 sm:py-20 lg:overflow-visible lg:px-0">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">

            <h2 class="mt-2 text-pretty  font-semibold tracking-tight text-[#2e3f15] ">About Us</h2>
            <p class="mt-4  text-black">Welcome to Garden Cafe, a cozy corner where the aroma of freshly brewed coffee and the warmth of heartfelt conversations fill the air. Nestled in the heart of Food city, we take pride in offering a welcoming space for our community to gather, relax, and indulge.</p>
          </div>
        </div>
      </div>
      <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="@/assets/images/AboutUs1.jpg" alt="" />
      </div>
      <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-6">
        <div class="lg:pr-4">
          <h3 class=" text-pretty  font-semibold tracking-tight text-[#2e3f15] ">What We Offer</h3>
          <div class="max-w-xl mt-2 text-base/7 text-black lg:max-w-lg">
            <p>At Garden Cafe, we believe in serving more than just food and drinks we serve experiences. Our menu is crafted with care, featuring:</p>
            <ul role="list" class="mt-4 space-y-4 text-gray-900">
              <li class="flex gap-x-3">
                <PlusIcon class="mt-1 size-5 flex-none text-[#2e3f15]" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">Artisan Coffees:</strong> Brewed to perfection with beans sourced from sustainable farms.</span>
              </li>
              <li class="flex gap-x-3">
                <PlusIcon class="mt-1 size-5 flex-none text-[#2e3f15]" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">Homemade Pastries:</strong> Baked fresh daily with love.</span>
              </li>
              <li class="flex gap-x-3">
                <PlusIcon class="mt-1 size-5 flex-none text-[#2e3f15]" aria-hidden="true" />
                <span><strong class="font-semibold text-gray-900">Hearty Meals:</strong> From breakfast favorites to light lunches, every dish is prepared with quality ingredients and attention to detail.</span>
              </li>
            </ul>
            <h3 class="mt-8 text-pretty  font-semibold tracking-tight text-[#2e3f15] ">Our Values</h3>
            <p class="mt-4">We’re passionate about fostering community, supporting local producers, and operating with sustainability in mind. Every cup of coffee and every bite you take supports our mission to make the world a little brighter.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<style>

</style>
