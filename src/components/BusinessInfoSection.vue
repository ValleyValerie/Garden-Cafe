<template>
  <section class="bg-[#2e3f15] text-white py-6 items-center ">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-6xl">
        <!-- Operational Hours -->
        <div class="flex flex-col items-center">
          <div class="text-3xl mb-2">
              <i class="fa-regular fa-clock" style="color: #ffffff;"></i>
          </div>
          <div>
            <p class="font-semibold">Mon - Sat</p>
            <p>8 AM to 8 PM</p>
          </div>
        </div>

        <!-- Location -->
        <div class="flex flex-col items-center">
          <div class="text-3xl mb-2">
              <i class="fa-solid fa-location-dot"></i>
          </div>
          <div>
            <p>123 Garden street,</p>
            <p>Food city, KL 3471</p>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="flex flex-col items-center">
          <div class="text-3xl mb-2">
              <i class="fa-regular fa-comments" style="color: #ffffff;"></i>
          </div>
          <div>
            <p>(012) 345-6789</p>
            <p>GardenCafe@email.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BusinessInfoSection",
};
</script>

<style scoped>
/* Optional custom styles */
</style>
