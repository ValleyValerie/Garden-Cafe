<script setup>

import Booking from '@/assets/images/BookTable.jpg';

</script>

<template>
  <div class="bookatable">

    <div :style="{ backgroundImage: `url(${Booking})` }" class="relative bg-cover bg-center isolate px-6 pt-14 lg:px-8  w-full">
    <div class="mx-auto max-w-6xl py-32 sm:py-48 lg:py-56 px-6">
      <div class="text-left">
        <h1 class="text-balance text-with-shadow-3 text-3xl font-semibold tracking-tight text-white drop-shadow-2xl sm:text-5xl">
          Savor the Taste of Garden Cafe
        </h1>
        <p class="mt-8 text-pretty text-with-shadow-3 text-lg font-medium text-white drop-shadow-3xl sm:text-xl/8">
          Explore our carefully crafted menu, filled with fresh flavors and delightful sips.
        </p>
      </div>
    </div>
  </div>

  <div class="flex justify-center items-center py-6 bg-gray-200">
      <div class="flex space-x-4">
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-green-200 rounded-full border border-green-500"></div>
          <span class="text-sm font-medium text-gray-700">Available</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-yellow-200 rounded-full border border-yellow-500"></div>
          <span class="text-sm font-medium text-gray-700">Reserved</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-red-200 rounded-full border border-red-500"></div>
          <span class="text-sm font-medium text-gray-700">Occupied</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="w-4 h-4 bg-blue-200 rounded-full border border-blue-500"></div>
          <span class="text-sm font-medium text-gray-700">Available Soon</span>
        </div>
      </div>
    </div>

    <!-- Floor Plan -->
    <div class="relative w-full h-screen bg-gray-100 flex">

      <!-- Floor Layout -->
      <div class="relative w-3/4 h-full bg-white rounded-lg shadow-lg p-4 overflow-auto">

        <div
          v-for="table in tableData"
          :key="table.id"
          :style="getTableStyle(table)"
          :class="['absolute flex items-center justify-center', getTableClass(table.status)]"
          @click="selectTable(table)"
        >
          <span class="text-xs font-bold">{{ table.name }}</span>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="absolute right-0 top-0 w-1/4 bg-white h-full p-6 shadow-lg">
        <h4 class=" mb-4">Selected Table</h4>
        <div v-if="selectedTable" class="space-y-2">
          <p><strong>Name:</strong> {{ selectedTable.name }}</p>
          <p><strong>Seats:</strong> {{ selectedTable.seats }}</p>
          <p><strong>Status:</strong> {{ selectedTable.status }}</p>
          <div v-if="selectedTable.reservedAt">
            <p><strong>Reserved At:</strong> {{ selectedTable.reservedAt }}</p>
          </div>
          <div v-if="selectedTable.customerName">
            <p><strong>Customer Name:</strong> {{ selectedTable.customerName }}</p>
            <p><strong>Customer Surname:</strong> {{ selectedTable.customerSurname }}</p>
            <p><strong>Customer Email:</strong> {{ selectedTable.customerEmail }}</p>
          </div>
          <button
            v-if="selectedTable.status === 'Available'"
            class="mt-6 px-4 py-2 border-[#2e3f15] text-black border-2 rounded-xl"
            @click="openBookingModal"
          >
            Reserve Table
          </button>
          <p v-else class="text-gray-500 mt-4">This table is already reserved.</p>
        </div>
        <div v-else>
          <p>Select a table to view details.</p>
        </div>
      </div>
    </div>

    <!-- Booking Modal -->
    <div v-if="isBookingModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
  <div class="bg-white p-6 rounded-lg w-96">
    <h3 class="text-xl font-bold text-center mb-4">Reserve Table</h3>
    <div class="space-y-4">
      <div>
        <label class="block">Date:</label>
        <input
          type="date"
          v-model="bookingDate"
          :class="['w-full px-3 py-2 border rounded-lg', missingFields.includes('date') ? 'border-red-500' : 'border-gray-300']"
        />
      </div>
      <div>
        <label class="block">Time:</label>
        <input
          type="time"
          v-model="bookingTime"
          :class="['w-full px-3 py-2 border rounded-lg', missingFields.includes('time') ? 'border-red-500' : 'border-gray-300']"
        />
      </div>
      <div>
        <label class="block">Name:</label>
        <input
          type="text"
          v-model="customerName"
          placeholder="Jane"
          :class="['w-full px-3 py-2 border rounded-lg', missingFields.includes('name') ? 'border-red-500' : 'border-gray-300']"
        />
      </div>
      <div>
        <label class="block">Surname:</label>
        <input
          type="text"
          v-model="customerSurname"
          placeholder="Smith"
          :class="['w-full px-3 py-2 border rounded-lg', missingFields.includes('surname') ? 'border-red-500' : 'border-gray-300']"
        />
      </div>
      <div>
        <label class="block">Email:</label>
        <input
  type="email"
  v-model="customerEmail"
  class="w-full px-3 py-2 border rounded-lg"
  placeholder="Enter a valid email"
  required
  @blur="validateEmail"
/>

      </div>
      <div v-if="errorMessage" class="text-red-500 text-sm mt-2">{{ errorMessage }}</div>
      <div class="flex justify-between items-center mt-4">
        <button @click="closeBookingModal" class="px-4 py-2 border-[#2e3f15] text-black border-2 rounded-xl">Cancel</button>
        <button @click="validateAndConfirmBooking" class="px-4 py-2 bg-[#2e3f15] text-white rounded-xl">Confirm</button>
      </div>
    </div>
  </div>
</div>


    <!-- Confirmation Popup -->
    <div v-if="isConfirmationPopupVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-100">
      <div class="bg-white p-6 rounded-lg w-96 text-center">
        <h3 class="text-xl font-bold mb-4">Reservation Confirmed!</h3>
        <p class="text-lg">Table {{ selectedTable.name }} has been reserved. Check your email for confirmation. {{ selectedTable.reservedAt }}.</p>
        <button @click="closeConfirmationPopup" class="mt-4 px-4 py-2 bg-[#2e3f15] text-white rounded-lg">
          Close
        </button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      tableData: [
        { id: 1, name: "T-01", seats: 4, x: 50, y: 100, shape: "circle", status: "Available" },
        { id: 2, name: "T-02", seats: 8, x: 200, y: 100, shape: "rectangle", status: "Reserved" },
        { id: 3, name: "T-03", seats: 6, x: 350, y: 150, shape: "circle", status: "Occupied" },
        { id: 4, name: "T-04", seats: 10, x: 500, y: 200, shape: "rectangle", status: "Available Soon" },
        { id: 5, name: "T-05", seats: 2, x: 650, y: 100, shape: "circle", status: "Available" },
        { id: 6, name: "T-06", seats: 7, x: 50, y: 250, shape: "rectangle", status: "Reserved" },
        { id: 7, name: "T-07", seats: 4, x: 200, y: 300, shape: "circle", status: "Occupied" },
        { id: 8, name: "T-08", seats: 8, x: 350, y: 400, shape: "rectangle", status: "Available" },
        { id: 9, name: "T-09", seats: 2, x: 500, y: 450, shape: "circle", status: "Available Soon" },
        { id: 10, name: "T-10", seats: 4, x: 650, y: 300, shape: "rectangle", status: "Available" },
        { id: 11, name: "T-11", seats: 4, x: 50, y: 500, shape: "circle", status: "Reserved" },
        { id: 12, name: "T-12", seats: 10, x: 200, y: 550, shape: "rectangle", status: "Occupied" },
        { id: 13, name: "T-13", seats: 8, x: 350, y: 600, shape: "circle", status: "Available Soon" },
        { id: 14, name: "T-14", seats: 4, x: 500, y: 650, shape: "rectangle", status: "Available" },
        { id: 15, name: "T-15", seats: 2, x: 50, y: 700, shape: "circle", status: "Available" },
      ],
      selectedTable: null,
      isBookingModalOpen: false,
      bookingDate: '',
      bookingTime: '',
      customerName: '',
      customerSurname: '',
      customerEmail: '',
      isConfirmationPopupVisible: false,
      missingFields: [],
      errorMessage: '',
    };
  },
  methods: {
    async validateAndConfirmBooking() {
  // Validate fields
  if (!this.bookingDate || !this.bookingTime || !this.customerName || !this.customerSurname || !this.customerEmail) {
    this.missingFields = [];
    if (!this.bookingDate) this.missingFields.push("date");
    if (!this.bookingTime) this.missingFields.push("time");
    if (!this.customerName) this.missingFields.push("name");
    if (!this.customerSurname) this.missingFields.push("surname");
    if (!this.customerEmail) this.missingFields.push("email");
    this.errorMessage = "Please fill out all required fields.";
    return;
  }

       // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(this.customerEmail)) {
    this.errorMessage = "Please enter a valid email address.";
    return;
  }


  // Validate booking date and time
  const selectedDate = new Date(this.bookingDate);
  const selectedTime = this.bookingTime.split(':');
  const selectedHour = parseInt(selectedTime[0], 10);
  const selectedMinute = parseInt(selectedTime[1], 10);

  // Check if the selected date is a weekday (Monday to Friday)
  const dayOfWeek = selectedDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    this.errorMessage = "Bookings are only available from Monday to Friday.";
    return;
  }

  // Check if the selected time is within operating hours (08:00 to 17:00)
  if (
    selectedHour < 8 ||
    (selectedHour === 17 && selectedMinute > 0) ||
    selectedHour >= 17
  ) {
    this.errorMessage = "Bookings are only available between 08:00 and 17:00.";
    return;
  }

      // Send data to Formspree
  try {
    const response = await fetch("https://formspree.io/f/mannaypw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.customerEmail, // User's email
        name: this.customerName,
        date: this.bookingDate,
        time: this.bookingTime,
        message: `Hi ${this.customerName}, your booking for ${this.bookingDate} at ${this.bookingTime} has been confirmed.`,
        _replyto: this.customerEmail, // Send confirmation to the user
        _cc: "admin@gardencafe.online", // Send a copy to yourself
      }),
    });

    if (response.ok) {
      alert("Booking confirmed! Check your email for confirmation.");
      this.closeBookingModal();
      this.confirmBooking(); // Update table status
    } else {
      alert("Failed to confirm booking. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again.");
  }
},
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.customerEmail)) {
        alert("Please enter a valid email address.");
        this.customerEmail = ""; // Clear invalid email
      }
    },
    getTableStyle(table) {
      return {
        top: `${table.y}px`,
        left: `${table.x}px`,
        width: table.shape === "circle" ? "50px" : "80px",
        height: "50px",
        borderRadius: table.shape === "circle" ? "50%" : "8px",
      };
    },
    getTableClass(status) {
      const classes = {
        Available: "bg-green-200 text-green-700",
        Reserved: "bg-yellow-200 text-yellow-700",
        Occupied: "bg-red-200 text-red-700",
        "Available Soon": "bg-blue-200 text-blue-700",
      };
      return classes[status] || "bg-gray-200";
    },
    selectTable(table) {
      if (table.status === "Reserved" || table.status === "Occupied") {
        return;
      }
      this.selectedTable = table;
      this.openBookingModal();
    },
    openBookingModal() {
      this.isBookingModalOpen = true;
    },
    closeBookingModal() {
      this.isBookingModalOpen = false;
      this.resetForm();
    },
    resetForm() {
      this.bookingDate = '';
      this.bookingTime = '';
      this.customerName = '';
      this.customerSurname = '';
      this.customerEmail = '';
      this.missingFields = [];
      this.errorMessage = '';
    },
    confirmBooking() {
      const reservedAt = `${this.bookingDate} ${this.bookingTime}`;
      this.selectedTable.status = "Reserved";
      this.selectedTable.reservedAt = reservedAt;
      this.selectedTable.customerName = this.customerName;
      this.selectedTable.customerSurname = this.customerSurname;
      this.selectedTable.customerEmail = this.customerEmail;

      this.isConfirmationPopupVisible = true;
    },
    closeConfirmationPopup() {
      this.isConfirmationPopupVisible = false;
    },
  },
};
</script>


<style>
body {
  @apply bg-gray-100;
}


.text-with-shadow-3 {
  text-shadow: 1px 3px 2px rgb(0, 0, 0);
}
</style>
