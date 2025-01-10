<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you are looking for doesn't exist.</p>
    <router-link to="/" class="back-home">Go Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 100px;
  color: #333;
}

.not-found h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ff4b4b; /* Highlight the error */
}

.not-found p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.back-home {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff; /* Button color */
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.back-home:hover {
  background-color: #0056b3;
}
</style>
