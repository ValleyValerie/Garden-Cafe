<script setup>

import heroSection from '@/assets/images/hero-Section.jpeg';
import PerfectLatte from '@/assets/images/PerfectLatte.jpeg';

import BusinessInfoSection from '@/components/BusinessInfoSection.vue';

import TopProducts from '@/components/TopProducts.vue';
import CategoriesSection from '@/components/CategoriesSection.vue';
// import CtaSection from './components/CtaSection.vue';


</script>

<template>
  <div :style="{ backgroundImage: `url(${heroSection})` }" class="relative bg-cover bg-center isolate px-6 pt-14 lg:px-8 z-50">
    <div class="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56 px-6">
      <div class="text-left">
        <h1 class="text-balance text-with-shadow text-5xl font-semibold tracking-tight text-white drop-shadow-2xl sm:text-7xl">
          Welcome to Garden cafe
        </h1>
        <p class="mt-8 text-pretty text-with-shadow text-lg font-medium text-white drop-shadow-2xl sm:text-xl/8">
          Where coffee meets community. Indulge in our hand-crafted beverages and freshly prepared treats, all served with love in a cozy atmosphere.
        </p>
      </div>
    </div>
  </div>
  <BusinessInfoSection />
  <TopProducts />
  <section :style="{ backgroundImage: `url(${PerfectLatte})` }" class="relative bg-cover bg-center isolate px-6 pt-14 lg:px-8 z-50">
    <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 class="max-w-2xl mx-auto text-2xl text-with-shadow font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
            Enjoy expertly crafted beverages made from the finest coffee beans.
        </h2>
        <p class="max-w-4xl mt-6 text-center text-white text-with-shadow">
           Locally roasted coffee, supporting both your taste buds and the local community.
        </p>
    </div>
</section>
<CategoriesSection />
</template>
