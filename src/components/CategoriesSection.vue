<template>
  <div class="bg-white">
    <div class="mx-auto  max-w-6xl px-6 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 class="font-bold tracking-tight text-center text-gray-900">Categories</h2>

        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
          <div v-for="callout in callouts" :key="callout.name" class="group relative">
            <img :src="callout.imageSrc" :alt="callout.imageAlt" class="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-[2/1] lg:aspect-square" />
            <h4 class="mt-6  text-gray-600">
              <a :href="callout.href">
                <span class="absolute inset-0" />
                {{ callout.name }}
              </a>
            </h4>
            <p class="text-sm font-semibold text-gray-900">{{ callout.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import SavoryDishes from '@/assets/images/SavoryDishes.jpeg';
import Drinks from '@/assets/images/Drinks.jpeg';
import Desserts from '@/assets/images/Desserts.jpeg';
import Soups from '@/assets/images/Soups.jpeg';

const callouts = [
  {
    name: 'Savory Dishes',
    description: 'Indulge in our selection of hearty, savory dishes, perfect for balancing out the sweetness of our cakes and desserts.',
    imageSrc: SavoryDishes,
    imageAlt: 'hearty, savory dishes,.',
    href: '#',
  },
  {
    name: 'Drinks',
    description: 'Complement your meal with our variety of hot and cold beverages',
    imageSrc: Drinks,
    imageAlt: 'hot and cold beverages',
    href: '#',
  },
  {
    name: 'Desserts',
    description: 'From delicate macarons to rich brownies, each dessert is a celebration of flavor and craftsmanship',
    imageSrc: Desserts,
    imageAlt: 'dessert menu',
    href: '#',
  },
  {
    name: 'Soup',
    description: 'Warm up with our comforting soups, made fresh daily with wholesome ingredients.',
    imageSrc: Soups,
    imageAlt: 'our comforting soups',
    href: '#',
  },
]
</script>
