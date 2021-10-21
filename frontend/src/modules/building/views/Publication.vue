<template>

    <div class="container my-3">
        <div class="row g-4">
            <div class="col-6">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner ">
                <!--     <div class="carousel-item active">
                        <div class="item active" style="background-image: url(https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)  ">
                        </div>
                    </div>
                        <div class="carousel-item">
                            <div class="item active" style="background-image: url(https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80)  ">
                            </div>
                        </div>
                    <div class="carousel-item">
                        <div class="item active" style="background-image: url(https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80)  ">
                    </div>
                    </div> -->
                <div class="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80"
                        class="d-block w-30" alt="...">
                    </div> 
                    <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    class="d-block w-30" alt="...">
                    </div>
                    <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80"
                    class="d-block w-30" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            </div>

            <div class="col-6">
                <div class="p-3 border bg-light">
                    <img class="col-12" src="https://kpshopy.com/storage/app/blog/eaWTbXQKCJWtwQUKFHyALtQNqoQ7aOg4aMqAOBO9.png"
                     alt="">
                </div>
            </div>

            <div class="col-6">
                <div class="p-3 mb-2 bg-light">
                    <h4>Se arrenda habitacion</h4>
                    <h5>$200.000</h5>
                </div>
                <div class="p-3 mb-2 bg-light">
                    <h5>Descripción</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate amet id ullam, pariatur dolorum quae deserunt voluptates ipsa eum, architecto laborum. Quia laboriosam mollitia rerum, ex perferendis saepe ea enim?</p>
                </div>
                <div class="p-3 mb-2 bg-light">
                    <h5>Informacion del arrendador</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente natus necessitatibus distinctio unde consectetur atque debitis cupiditate repellendus soluta rerum!</p>
                </div>
            </div>
            <div class="col-6">
                <div class="p-3 border bg-light"><label for=""><strong>Ubicación</strong></label>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.845265490602!2d-75.69365866700417!3d4.796600867130791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38876503059207%3A0xd5671df2301e9a3b!2sUTP!5e0!3m2!1ses!2sco!4v1634777954543!5m2!1ses!2sco" width="500" height="370" style="padding-left: 10px;" allowfullscreen="" loading="lazy">
                    </iframe></div>
            </div>
        </div>
    </div>


</template>

<script>
export default {

}
</script>

<style scoped>

.carousel {
  width: 100%;
  height:440px;
}
/* .carousel-inner .item{ 
   height:500px; 
   width: 500px;

} */

#carouselExampleIndicators .carousel-item img {
    object-fit: cover;
    object-position: center;
    height: 55vh;
    width: 50vw;

    
}

.bg-light {
    border-radius: 5px;
}

</style>