<template>
  <div class="container mt-3">
      <BackButton />
    <div class="row">
      <div class="col">
        <p class="h3 text-info fw-bold">Detail User</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" class="contact-img" alt="" />
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">Name : <span class="fw-bold">Test</span></li>
          <li class="list-group-item">Email : <span class="fw-bold">Test</span></li>
          <li class="list-group-item">Mobile : <span class="fw-bold">Test</span></li>
          <li class="list-group-item">Group : <span class="fw-bold">Test</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from "../components/BackButton.vue";
export default {
    name: "ViewUser",
    components: { BackButton }
};
</script>

<style scoped></style>
