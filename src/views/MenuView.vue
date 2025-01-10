<script setup>

import { ref } from 'vue';
import { reactive } from "vue";

import MenuHero from '@/assets/images/MenuHero.jpg';
import Eggs from '@/assets/images/Eggs.jpeg';
import SmoothieBowl from '@/assets/images/SmoothieBowl.jpeg';
import Sandwich from '@/assets/images/Sandwiches.jpeg';
import Salad from '@/assets/images/Salad.jpeg';
import Spaghetti from '@/assets/images/Spaghetti.jpeg';
import Burger from '@/assets/images/Burger.jpeg';
import Soups from '@/assets/images/Soup.jpeg';
import Croissant from '@/assets/images/Croissants.jpeg';
import Spanakopita from '@/assets/images/Spanakopita.jpeg';
import lemon from '@/assets/images/lemon.jpeg';
import coffee from '@/assets/images/Coffee.jpeg';
import tea from '@/assets/images/tea.jpeg';
import TSmoothies from '@/assets/images/TSmoothie.jpeg';
import side from '@/assets/images/Sides.jpeg';

// Breakfast HotOptions Menu
const HotOptions = reactive([
  { name: "Classic Scrambled Eggs", description: "Served with crispy bacon and toasted sourdough.", price: 22 },
  { name: "Pancakes Stack", description: "Fluffy pancakes with maple syrup and fresh berries.", price: 19 },
  { name: "Breakfast Sandwich", description: "Egg, bacon, and cheddar on a toasted English muffin.", price: 23 },
  { name: "Veggie Omelette", description: "Filled with spinach, mushrooms, and cheese, served with toast.", price: 18 },
  { name: "Avocado Toast with Poached Egg", description: "Creamy avocado on multigrain bread, topped with a perfectly poached egg.", price: 19 },
]);

// Breakfast Cold Options Menu
const ColdOptions = reactive([
  { name: "Yogurt Parfait", description: " Layers of Greek yogurt, granola, and fresh fruit.", price: 22 },
  { name: "Smoothie Bowl", description: "Blended berries and banana, topped with seeds and coconut flakes.", price: 19 },
  { name: "Chilled Overnight Oats", description: "Creamy oats with almond milk, topped with nuts and honey.", price: 23 },
  { name: "Fresh Fruit Platter", description: "Seasonal fruit selection with a side of honey yogurt dip.", price: 18 },
  { name: "Bagel with Cream Cheese", description: "Served plain or topped with smoked salmon and capers.", price: 19 },
]);

// Lunch Menu
// Sandwiches & Wraps
const Sandwiches  = reactive([
  { name: "Chicken Pesto Sandwich", description: " Grilled chicken, pesto, mozzarella, and arugula on toasted sourdough.", price: 22 },
  { name: "Turkey and Avocado Wrap", description: "Sliced turkey, avocado, lettuce, and tomato wrapped in a whole grain tortilla.", price: 19 },
  { name: "Tuna Melt", description: "Tuna salad and melted cheese on toasted rye bread.", price: 23 },
  { name: "Caprese Sandwich", description: " Fresh mozzarella, tomato, basil, and balsamic glaze on a baguette.", price: 18 },
  { name: "Chicken Caesar Wrap", description: "Grilled chicken, romaine, Caesar dressing, and Parmesan in a flour tortilla.", price: 19 },
]);

// Salads
const Salads = reactive([
  { name: "Caesar Salad", description: "Romaine lettuce, croutons, Parmesan, and creamy Caesar dressing.", price: 10 },
  { name: "Greek Salad", description: "Cucumber, tomato, red onion, Kalamata olives, and feta cheese with olive oil dressing.", price: 10 },
  { name: "Quinoa Salad", description: "Quinoa with roasted vegetables, avocado, and a lemon vinaigrette.", price: 10 },
  { name: "Asian Sesame Chicken Salad", description: "Grilled chicken, mixed greens, cucumbers, and sesame dressing.", price: 10 },
  { name: "Cobb Salad", description: "Mixed greens, bacon, avocado, chicken, egg, and blue cheese with ranch dressing.", price: 10 },
]);

// Hot Meals
const HotMeals = reactive([
  { name: "Spaghetti Bolognese", description: " Classic pasta with a hearty meat sauce made with tomatoes and herbs.", price: 22 },
  { name: "Chicken Alfredo", description: "Creamy Alfredo sauce with grilled chicken and fettuccine pasta.", price: 19 },
  { name: "Vegetable Stir-Fry", description: "A mix of seasonal vegetables stir-fried with soy sauce, served with rice.", price: 23 },
  { name: "Beef Chili", description: "Hearty chili with ground beef, beans, tomatoes, and spices.", price: 18 },
  { name: "Grilled Salmon with Veggies", description: "Grilled salmon fillet with roasted vegetables and a lemon butter sauce.", price: 19 },
]);

// Burgers
const Burgers = reactive([
  { name: "Classic Cheeseburger", description: " Beef patty with cheddar cheese, lettuce, tomato, and pickles on a brioche bun", price: 22 },
  { name: "BBQ Chicken Burger", description: "Grilled chicken, BBQ sauce, coleslaw, and pickles on a toasted bun.", price: 19 },
  { name: "Veggie Burger", description: "A plant-based patty with lettuce, tomato, and avocado on a whole wheat bun.", price: 23 },
  { name: "Sliders Trio", description: "Mini burgers with cheese, lettuce, and ketchup or BBQ sauce.", price: 18 },
  { name: "Mushroom Swiss Burger", description: "Beef patty, sautéed mushrooms, Swiss cheese, and garlic aioli on a brioche bun", price: 19 },
]);

// Soup
const Soup = reactive([
  { name: "Chicken Noodle Soup", description: "A creamy soup made with chicken broth, noodles, and vegetables.", price: 22 },
  { name: "Mushroom Cheddar Soup", description: "A creamy soup made with mushrooms, cheddar cheese, and vegetables.", price: 19 },
  { name: "Veggie Soup", description: "A healthy soup made with vegetables, beans, and spices.", price: 23 },
  { name: "Beef Noodle Soup", description: "A creamy soup made with beef broth, noodles, and vegetables.", price: 18 },
  { name: "Tofu Soup", description: "A creamy soup made with tofu, vegetables, and spices.", price: 19 },
  ]);

// Drinks
//Coffee
const Coffee = reactive([

  { name: "Latte", description: "Espresso with steamed milk, topped with a light foam.", price: 19 },
  { name: "Cappuccino", description: " Espresso with equal parts steamed milk and foam.", price: 23 },
  { name: "Americano", description: "Espresso diluted with hot water for a smoother, milder taste.", price: 18 },
  { name: "Mocha", description: "Beef patty, sautéed mushrooms, Swiss cheese, and garlic aioli on a brioche bun", price: 19 },
]);

//Tea
const Tea = reactive([
  { name: "Black Tea Latte", description: "A classic blend of black tea, steamed milk, and a hint of cinnamon.", price: 22 },
  { name: "Green Tea Latte", description: "A refreshing blend of green tea, steamed milk, and a hint of cinnamon.", price: 19 },
  { name: "Chai Latte", description: "  Spiced tea with steamed milk and a touch of sweetness.", price: 23 },
  { name: "Herbal Tea", description: "Caffeine-free blends like chamomile, peppermint, or lavender.", price: 18 },
  { name: "Iced Tea", description: "Beef patty, sautéed mushrooms, Swiss cheese, and garlic aioli on a brioche bun", price: 19 },
]);

//Smoothies
const Smoothies = reactive([
  { name: "Berry Smoothie", description: " A blend of strawberries, blueberries, and yogurt or almond milk.", price: 22 },
  { name: "Tropical Smoothie", description: "Mango, pineapple, and coconut milk, blended into a refreshing drink.", price: 19 },
  { name: "Chocolate Milkshake", description: "Creamy vanilla ice cream, chocolate syrup, and milk, topped with whipped cream.", price: 23 },
  { name: "Protein Smoothie", description: " Banana, spinach, protein powder, and almond milk.", price: 18 },
  { name: "Peanut Butter Banana Shake", description: "Peanut butter, banana, milk, and ice cream, blended into a creamy treat.", price: 19 },
]);

// Baked Goods Sweet Pastries
const SweetPastries = reactive([
  { name: "Chocolate Croissant", description: "Buttery and flaky with a rich chocolate filling.", price: 22 },
  { name: "Blueberry Muffin", description: "Blended berries and banana, topped with seeds and coconut flakes.", price: 19 },
  { name: "Almond Danish", description: "A sweet pastry topped with almond flakes and glaze.", price: 23 },
  { name: "Cinnamon Roll", description: "Swirled with cinnamon and sugar, finished with cream cheese icing.", price: 18 },
  { name: "Apple Turnover", description: "Puff pastry filled with spiced apple compote.", price: 19 },
]);

// Baked Goods Savory Pastries
const SavoryPastries = reactive([
  { name: "Spinach and Feta Roll", description: "A flaky pastry filled with a savory spinach and feta mixture.", price: 22 },
  { name: "Cheese and Onion Quiche", description: "Mini quiche with a creamy cheese and caramelized onion filling.", price: 19 },
  { name: "Sausage Roll", description: "Puff pastry filled with seasoned sausage meat.", price: 23 },
  { name: "Mushroom and Herb Tart", description: "A savory tart with sautéed mushrooms and fresh herbs.", price: 18 },
  { name: "Ham and Cheese Croissant", description: "A flaky croissant filled with smoked ham and melted cheese.", price: 19 },
]);

// Baked Goods Desserts
const Desserts = reactive([

  { name: "Lemon Tart", description: "A crisp pastry crust filled with tangy lemon curd.", price: 19 },
  { name: "Cheesecake Slice", description: "Creamy and smooth with a graham cracker crust.", price: 23 },
  { name: "Fruit Tart", description: "A delicate tart shell filled with custard and topped with fresh fruit.", price: 18 },
  { name: "Carrot Cake", description: "Moist spiced cake with cream cheese frosting.", price: 19 },
  { name: "Chocolate Cake", description: "Moist spiced cake with cream cheese frosting.", price: 19 },
]);

//sides
const Sides = reactive([
  { name: "Fries", description: "Crispy golden fries, served with ketchup or aioli.", price: 22 },
  { name: "Garlic Bread", description: "Toasted bread with a buttery garlic spread.", price: 19 },
  { name: "Coleslaw", description: " Fresh shredded cabbage with a tangy dressing", price: 23 },
  { name: "Mixed Green Salad", description: "A light salad with seasonal greens, cherry tomatoes, and a balsamic vinaigrette.", price: 18 },
  { name: "Onion Rings", description: "Crispy rings of onions, served with ketchup.", price: 19 },
]);

// Reactive state for active menu
const activeMenu = ref('breakfast');

</script>
<template>
  <div class="menu">
    <div :style="{ backgroundImage: `url(${MenuHero})` }" class="relative bg-cover bg-center isolate px-6 pt-14 lg:px-8 z-50 w-full">
    <div class="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56 px-6">
      <div class="text-left">
        <h1 class="text-balance text-with-shadow-2 text-3xl font-semibold tracking-tight text-white drop-shadow-2xl sm:text-5xl">
          Savor the Taste of Garden Cafe
        </h1>
        <p class="mt-8 text-pretty text-with-shadow-2 text-lg font-medium text-white drop-shadow-3xl sm:text-xl/8">
          Explore our carefully crafted menu, filled with fresh flavors and delightful sips.
        </p>
      </div>
    </div>
  </div>
 <!-- Navbar -->

<div class="menu-view ">
    <nav class="menu-navbar  py-5">
      <button @click="activeMenu = 'breakfast'" class="nav-item" :class="{ 'active': activeMenu === 'breakfast' }">Breakfast</button>
      <button @click="activeMenu = 'lunch'" class="nav-item" :class="{ 'active': activeMenu === 'lunch' }">Lunch </button>
      <button @click="activeMenu = 'Soup'" class="nav-item" :class="{ 'active': activeMenu === 'Soup' }">Soup</button>
      <button @click="activeMenu = 'bakedGoods'" class="nav-item" :class="{ 'active': activeMenu === 'bakedGoods' }">Baked goods</button>
      <button @click="activeMenu = 'Drinks'" class="nav-item" :class="{ 'active': activeMenu === 'Drinks' }">Drinks </button>
      <button @click="activeMenu = 'Sides'" class="nav-item" :class="{ 'active': activeMenu === 'Sides' }">Sides </button>
    </nav>

<!-- Menu Content -->
<!-- Breakfast Section -->
    <div class="menu-content">
      <div v-if="activeMenu === 'breakfast'">
        <section class="menu-section tart-menu bg-cover bg-center bg-no-repeat h-auto py-10  px-24" :style="{ backgroundImage: `url(${Eggs})` }">
      <h2 class="font-bold tracking-tight text-center text-black">Breakfast</h2>
      <div class="container mx-auto flex flex-col items-center lg:items-start">
        <div class="menu-content bg-white/90 p-6 w-full max-w-md rounded-lg">
          <h2 class="text-2xl font-bold  mb-4 text-center ">Hot options</h2>
          <ul>
            <li
              v-for="item in HotOptions"
              :key="item.name"
              class="flex justify-between  py-2 border-b border-gray-300"
            >
              <span>
                <span class="font-semibold text-with-light">{{ item.name }}</span> <br />
                <span class="text-sm text-with-light ">{{ item.description }}</span>
              </span>
              <span class="font-bold text-with-light ">${{ item.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ColdOptions Section -->
    <section class="menu-section cake-menu bg-cover bg-center bg-no-repeat h-auto py-10  px-24" :style="{ backgroundImage: `url(${SmoothieBowl})` }">
      <div class="container mx-auto flex flex-col items-center lg:items-end">
        <div class="menu-content bg-white/90 p-6 w-full max-w-md rounded-lg">
          <h2 class="text-2xl font-bold text-black mb-4 text-center ">Cold Options</h2>
          <ul>
            <li
              v-for="item in ColdOptions"
              :key="item.name"
              class="flex justify-between text-black py-2 border-b border-gray-300"
            >
              <span>
                <span class="font-semibold">{{ item.name }}</span> <br />
                <span class="text-sm">{{ item.description }}</span>
              </span>
              <span class="font-bold">${{ item.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
      </div>

<!-- lunch section-->
       <!-- Sandwiches -->
      <div v-if="activeMenu === 'lunch'">
        <section class="menu-section tart-menu bg-cover bg-center bg-no-repeat h-auto py-10  px-24" :style="{ backgroundImage: `url(${Sandwich})` }">
      <h2 class="font-bold tracking-tight text-center text-black text-with-light">Lunch</h2>
      <div class="container mx-auto flex flex-col items-center lg:items-start">
        <div class="menu-content bg-white/90 p-6 w-full max-w-md rounded-lg">
          <h2 class="text-2xl font-bold  mb-4 text-center ">Sandwiches</h2>
          <ul>
            <li
              v-for="item in Sandwiches "
              :key="item.name"
              class="flex justify-between  py-2 border-b border-gray-300"
            >
              <span>
                <span class="font-semibold text-with-light">{{ item.name }}</span> <br />
                <span class="text-sm text-with-light ">{{ item.description }}</span>
              </span>
              <span class="font-bold text-with-light ">${{ item.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- Salads  -->
    <section class="menu-section cake-menu bg-cover bg-center bg-no-repeat h-auto py-10  px-24" :style="{ backgroundImage: `url(${Salad})` }">
      <div class="container mx-auto flex flex-col items-center lg:items-end">
        <div class="menu-content bg-white/90 p-6 w-full max-w-md rounded-lg">
          <h2 class="text-2xl font-bold text-black mb-4 text-center ">Salad</h2>
          <ul>
            <li
              v-for="item in Salads"
              :key="item.name"
              class="flex justify-between text-black py-2 border-b border-gray-300"
            >
              <span>
                <span class="font-semibold">{{ item.name }}</span> <br />
                <span class="text-sm">{{ item.description }}</span>
              </span>
              <span class="font-bold">${{ item.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!--Hot Meals-->
    <section class="menu-section tart-menu bg-cover bg-center bg-no-repeat h-auto py-10  px-24" :style="{ backgroundImage: `url(${Spaghetti})` }">
      <div class="container mx-auto flex flex-col items-center lg:items-start">
        <div class="menu-content bg-white/90 p-6 w-full max-w-md rounded-lg">
          <h2 class="text-2xl font-bold  mb-4 text-center ">Hot Meals</h2>
          <ul>
            <li
              v-for="item in HotMeals "
              :key="item.name"
              class="flex justify-between  py-2 border-b border-gray-300"
            >
              <span>
                <span class="font-semibold text-with-light">{{ item.name }}</span> <br />
                <span class="text-sm text-with-light ">{{ item.description }}</span>
              </span>
              <span class="font-bold text-with-light ">${{ item.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!--Burgers-->
    <section class="menu-section cake-menu bg-cover bg-center bg-no-repeat h-auto py-10  px-24" :style="{ backgroundImage: `url(${Burger})` }">
      <div class="container mx-auto flex flex-col items-center lg:items-end">
        <div class="menu-content bg-white/90 p-6 w-full max-w-md rounded-lg">
          <h2 class="text-2xl font-bold text-black mb-4 text-center ">Burger</h2>
          <ul>
            <li
              v-for="item in Burgers"
              :key="item.name"
              class="flex justify-between text-black py-2 border-b border-gray-300"
            >
              <span>
                <span class="font-semibold">{{ item.name }}</span> <br />
                <span class="text-sm">{{ item.description }}</span>
              </span>
              <span class="font-bold">${{ item.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
 </div>

<!-- Soup section -->
      <div v-if="activeMenu === 'Soup'">
        <section class="menu-section tart-menu bg-cover bg-center bg-no-repeat h-auto py-10  px-24" :style="{ backgroundImage: `url(${Soups})` }">
      <h2 class="font-bold tracking-tight text-center text-black">Soup</h2>
      <div class="container mx-auto flex flex-col items-center lg:items-start">
        <div class="menu-content bg-white/90 p-6 w-full max-w-md rounded-lg">
          <ul>
            <li
              v-for="item in Soup"
              :key="item.name"
              class="flex justify-between  py-2 border-b border-gray-300"
            >
              <span>
                <span class="font-semibold text-with-light">{{ item.name }}</span> <br />
                <span class="text-sm text-with-light ">{{ item.description }}</span>
              </span>
              <span class="font-bold text-with-light ">${{ item.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
      </div>

<!-- baked goods section -->
      <div v-if="activeMenu === 'bakedGoods'">
        <!--SweetPastries-->
        <section class="menu-section tart-menu bg-cover bg-center bg-no-repeat h-auto py-10  px-24" :style="{ backgroundImage: `url(${Croissant})` }">
      <h2 class="font-bold tracking-tight text-center text-black">Baked Goods</h2>
      <div class="container mx-auto flex flex-col items-center lg:items-start">
        <div class="menu-content bg-white/90 p-6 w-full max-w-md rounded-lg">
          <h2 class="text-2xl font-bold  mb-4 text-center ">Sweet Pastries</h2>
          <ul>
            <li
              v-for="item in SweetPastries"
              :key="item.name"
              class="flex justify-between  py-2 border-b border-gray-300"
            >
              <span>
                <span class="font-semibold text-with-light">{{ item.name }}</span> <br />
                <span class="text-sm text-with-light ">{{ item.description }}</span>
              </span>
              <span class="font-bold text-with-light ">${{ item.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SavoryPastries -->
    <section class="menu-section cake-menu bg-cover bg-center bg-no-repeat h-auto py-10  px-24" :style="{ backgroundImage: `url(${Spanakopita})` }">
      <div class="container mx-auto flex flex-col items-center lg:items-end">
        <div class="menu-content bg-white/90 p-6 w-full max-w-md rounded-lg">
          <h2 class="text-2xl font-bold text-black mb-4 text-center ">Savory Pastries </h2>
          <ul>
            <li
              v-for="item in SavoryPastries"
              :key="item.name"
              class="flex justify-between text-black py-2 border-b border-gray-300"
            >
              <span>
                <span class="font-semibold">{{ item.name }}</span> <br />
                <span class="text-sm">{{ item.description }}</span>
              </span>
              <span class="font-bold">${{ item.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

<!-- Desserts -->
    <section class="menu-section tart-menu bg-cover bg-center bg-no-repeat h-auto py-10  px-24" :style="{ backgroundImage: `url(${lemon})` }">
      <div class="container mx-auto flex flex-col items-center lg:items-start">
        <div class="menu-content bg-white/90 p-6 w-full max-w-md rounded-lg">
          <h2 class="text-2xl font-bold  mb-4 text-center ">Desserts</h2>
          <ul>
            <li
              v-for="item in Desserts"
              :key="item.name"
              class="flex justify-between  py-2 border-b border-gray-300"
            >
              <span>
                <span class="font-semibold text-with-light">{{ item.name }}</span> <br />
                <span class="text-sm text-with-light ">{{ item.description }}</span>
              </span>
              <span class="font-bold text-with-light ">${{ item.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </div>


<!-- Drinks section -->
      <div v-if="activeMenu === 'Drinks'">
        <!-- Coffee -->
        <section class="menu-section tart-menu bg-cover bg-center bg-no-repeat h-auto py-10  px-24" :style="{ backgroundImage: `url(${coffee})` }">
      <h2 class="font-bold tracking-tight text-center text-black">Drinks</h2>
      <div class="container mx-auto flex flex-col items-center lg:items-start">
        <div class="menu-content bg-white/90 p-6 w-full max-w-md rounded-lg">
          <h2 class="text-2xl font-bold  mb-4 text-center ">Coffee</h2>
          <ul>
            <li
              v-for="item in Coffee"
              :key="item.name"
              class="flex justify-between  py-2 border-b border-gray-300"
            >
              <span>
                <span class="font-semibold text-with-light">{{ item.name }}</span> <br />
                <span class="text-sm text-with-light ">{{ item.description }}</span>
              </span>
              <span class="font-bold text-with-light ">${{ item.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Tea -->
    <section class="menu-section cake-menu bg-cover bg-center bg-no-repeat h-auto py-10  px-24" :style="{ backgroundImage: `url(${tea})` }">
      <div class="container mx-auto flex flex-col items-center lg:items-end">
        <div class="menu-content bg-white/90 p-6 w-full max-w-md rounded-lg">
          <h2 class="text-2xl font-bold text-black mb-4 text-center ">Tea</h2>
          <ul>
            <li
              v-for="item in Tea"
              :key="item.name"
              class="flex justify-between text-black py-2 border-b border-gray-300"
            >
              <span>
                <span class="font-semibold">{{ item.name }}</span> <br />
                <span class="text-sm">{{ item.description }}</span>
              </span>
              <span class="font-bold">${{ item.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

     <!-- Smoothies -->
     <section class="menu-section tart-menu bg-cover bg-center bg-no-repeat h-auto py-10  px-24" :style="{ backgroundImage: `url(${TSmoothies})` }">
      <div class="container mx-auto flex flex-col items-center lg:items-start">
        <div class="menu-content bg-white/90 p-6 w-full max-w-md rounded-lg">
          <h2 class="text-2xl font-bold  mb-4 text-center ">Smoothie</h2>
          <ul>
            <li
              v-for="item in Smoothies"
              :key="item.name"
              class="flex justify-between  py-2 border-b border-gray-300"
            >
              <span>
                <span class="font-semibold text-with-light">{{ item.name }}</span> <br />
                <span class="text-sm text-with-light ">{{ item.description }}</span>
              </span>
              <span class="font-bold text-with-light ">${{ item.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
      </div>

<!-- Sides section -->
      <div v-if="activeMenu === 'Sides'">

        <section class="menu-section tart-menu bg-cover bg-center bg-no-repeat h-auto py-10  px-24" :style="{ backgroundImage: `url(${side})` }">
          <h2 class="font-bold tracking-tight text-center text-black">Sides</h2>
      <div class="container mx-auto flex flex-col items-center lg:items-start">
        <div class="menu-content bg-white/90 p-6 w-full max-w-md rounded-lg">

          <ul>
            <li
              v-for="item in Sides"
              :key="item.name"
              class="flex justify-between  py-2 border-b border-gray-300"
            >
              <span>
                <span class="font-semibold text-with-light">{{ item.name }}</span> <br />
                <span class="text-sm text-with-light ">{{ item.description }}</span>
              </span>
              <span class="font-bold text-with-light ">${{ item.price }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
      </div>
    </div>
  </div>



  </div>

</template>

<style scoped>
.menu-navbar {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  justify-items: center;
}

.menu-section {
  min-height: 40vh;
}

.nav-item {
  cursor: pointer;
  padding: 10px 20px;
  border: 1px solid #2e3f15;
  border-radius: 20px;
  background-color: #f9f9f9;
  transition: background-color 0.3s ease;
}

.nav-item:hover {
  background-color: #2e3f15;
  color: #fff;
}

.nav-item.active {
  background-color: #2e3f15;
  font-weight: bold;
  color:#fff;
}

.menu-content {
  text-align: center;

}

@media (min-width: 768px) {
  .menu-navbar {
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    gap: 20px;
  }
}

</style>

<script>
// export default {
//  name: 'MenuView',

//};
</script>
