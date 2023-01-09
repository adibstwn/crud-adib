<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-info"> User Manager
                    <router-link to='/users/add' class="btn btn-info btn-sm"><i class="fa-solid fa-circle-plus"></i> Add New</router-link>
                </p>
                <form action="">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Search User">
                                </div>
                                <div class="col">
                                    <input type="submit" class="btn btn-outline-dark">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <CardUser />
</template>

<script>
import CardUser from "../components/CardUser.vue";
    export default {
    name: "UserManager",
    components: { CardUser }
}
</script>

<style scoped>

</style>