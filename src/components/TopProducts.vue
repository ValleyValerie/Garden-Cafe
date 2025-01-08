<template>
  <div class="bg-white">
    <div class="mx-auto max-w-6xl px-6 py-10 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">
      <h2 class=" font-bold tracking-tight text-center text-gray-900">Top Products</h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id" class="group relative">
          <img :src="product.imageSrc" :alt="product.imageAlt" class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="product.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ product.sides }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import FrenchCroqueMadame from '@/assets/images/FrenchCroqueMadame.jpeg';
import SpinachRicottaQuiche from '@/assets/images/SpinachRicottaQuiche.jpeg';
import SouthwestChickenWrap from '@/assets/images/SouthwestChickenWrap.jpeg';
import CreamyTuscanRavioli from '@/assets/images/CreamyTuscanRavioli.jpeg';

const products = [
  {
    id: 1,
    name: ' French Croque Madame',
    href: '#',
    imageSrc:  FrenchCroqueMadame,
    imageAlt: "delicious sandwich features layers of savory ham, melted Gruyère cheese, and a creamy béchamel sauce, topped with a perfectly cooked egg.",
    price: '$10',
    sides: 'with a salad or chips',
  },
  {
    id: 2,
    name: 'Spinach and Ricotta Quiche',
    href: '#',
    imageSrc:  SpinachRicottaQuiche,
    imageAlt: "delicious sandwich features layers of savory ham, melted Gruyère cheese, and a creamy béchamel sauce, topped with a perfectly cooked egg.",
    price: '$8',

  },
  {
    id: 3,
    name: ' Southwest Chicken Wrap',
    href: '#',
    imageSrc:  SouthwestChickenWrap,
    imageAlt: "juicy chicken, fresh veggies, and a creamy chipotle sauce.",
    price: '$15',
    sides: 'with a salad or chips',
  },
  {
    id: 4,
    name: 'Tuscan Ravioli',
    href: '#',
    imageSrc:  CreamyTuscanRavioli,
    imageAlt: "Creamy Tuscan Ravioli.",
    price: '$15',

  },
]
</script>
