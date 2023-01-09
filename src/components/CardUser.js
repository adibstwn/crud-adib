<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-6">
                <div class="card my-2 list-group-item-info">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-sm-4">
                                <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" class="contact-img" alt="">
                            </div>
                            <div class="col-sm-6">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        Name : <span class="fw-bold">Test</span>
                                    </li>
                                    <li class="list-group-item">
                                        Email : <span class="fw-bold">Test</span>
                                    </li>
                                    <li class="list-group-item">
                                        Mobile : <span class="fw-bold">Test</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-sm-1">
                                <router-link to="/users/view/:userId" class="btn btn-warning my-1">
                                    <i class="fa fa-eye" aria-hidden="true"></i>
                                </router-link>
                                <router-link to="/users/edit/:userId" class="btn btn-info my-1">
                                   <i class="fas fa-pen"></i>
                                </router-link>
                                <button class="btn btn-danger">
                                    <i class="fa fa-trash" aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>
