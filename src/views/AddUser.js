<template>
    <div class="container mt-3">
        <BackButton />
        <div class="row">
            <div class="col">
                 <p class="h3 text-info fw-bold">Add User</p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <form>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Name">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Photo Url">
                    </div>
                    <div class="mb-2">
                        <input type="email" class="form-control" placeholder="Email">
                    </div>
                    <div class="mb-2">
                        <input type="number" class="form-control" placeholder="Mobile Number">
                    </div>
                    <div class="mb-2">
                        <select class="form-control">
                            <option value="">Select Group</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-info" value="Create">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" class="contact-img" alt="">
            </div>
        </div>
    </div>

</template>

<script>
import BackButton from "../components/BackButton.vue";
    export default {
    name: "AddUser",
    components: { BackButton }
}
</script>

<style scoped>

</style>