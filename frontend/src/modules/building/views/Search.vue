<template>
  
    <div class="container mt-2 px-2">
        <div class="row ">
            <div class="col">

                <p>
                    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Filtros
                        <i class="bi bi-funnel ms-2"></i>
                    </button>
                </p>
                <div class="collapse mb-2" id="collapseExample">
                    <div class="card card-body">
                        
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                            <label class="form-check-label" for="exampleRadios1">
                                Filtro uno
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                            <label class="form-check-label" for="exampleRadios2">
                                Filtro dos
                            </label>
                        </div>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
                            <label class="form-check-label" for="exampleRadios3">
                                Filtro tres
                            </label>
                        </div>

                    </div>
                </div>

                <select class="form-select" aria-label="Default select example">
                    <option selected>Seleccione una ciudad</option>
                    <option value="1">Pereira</option>
                    <option value="2">Cartago</option>
                    <option value="3">Pasto</option>
                </select>

            </div>

            <div class="col-6">
                <h2>Resultados de la busqueda...</h2>

                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4 bg-dark">
                            <img src="https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg"
                             class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body mb-2">
                                <h5 class="card-title">$100.000</h5>
                                <h6 class="card-text">Habitacion</h6>
                                <p class="card-text">
                                    <i class="bi bi-geo-alt"></i>
                                    Pereira - 
                                    <small class="text-muted text-end">14 de oct</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4 bg-dark">
                            <img src="https://cdn.pixabay.com/photo/2017/08/01/12/43/kitchen-2565105_960_720.jpg"
                             class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body mb-2">
                                <h5 class="card-title">$200.000</h5>
                                <h6 class="card-text">Habitacion</h6>
                                <p class="card-text">
                                    <i class="bi bi-geo-alt"></i>
                                    Pereira - 
                                    <small class="text-muted text-end">14 de oct</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4 bg-dark">
                            <img src="https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg"
                             class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body mb-2">
                                <h5 class="card-title">$150.000</h5>
                                <h6 class="card-text">Habitacion</h6>
                                <p class="card-text">
                                    <i class="bi bi-geo-alt"></i>
                                    Pereira - 
                                    <small class="text-muted text-end">14 de oct</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4 bg-dark">
                            <img src="https://cdn.pixabay.com/photo/2014/12/27/14/37/living-room-581073_960_720.jpg"
                             class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body mb-2">
                                <h5 class="card-title">$180.000</h5>
                                <h6 class="card-text">Habitacion</h6>
                                <p class="card-text">
                                    <i class="bi bi-geo-alt"></i>
                                    Pereira - 
                                    <small class="text-muted text-end">14 de oct</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4 bg-dark">
                            <img src="https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_960_720.jpg"
                             class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body mb-2">
                                <h5 class="card-title">$200.000</h5>
                                <h6 class="card-text">Habitacion</h6>
                                <p class="card-text">
                                    <i class="bi bi-geo-alt"></i>
                                    Pereira - 
                                    <small class="text-muted text-end">14 de oct</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div class="col">
                <h2>publicidad</h2>
                <div class="p-3 border bg-light mb-2">
                    <img class="col-12" src="https://kpshopy.com/storage/app/blog/eaWTbXQKCJWtwQUKFHyALtQNqoQ7aOg4aMqAOBO9.png"
                     alt="">
                </div>
                <div class="p-3 border bg-light mb-2">
                    <img class="col-12" src="https://kpshopy.com/storage/app/blog/eaWTbXQKCJWtwQUKFHyALtQNqoQ7aOg4aMqAOBO9.png"
                     alt="">
                </div>
                <div class="p-3 border bg-light mb-2">
                    <img class="col-12" src="https://kpshopy.com/storage/app/blog/eaWTbXQKCJWtwQUKFHyALtQNqoQ7aOg4aMqAOBO9.png"
                     alt="">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>

img {
    height: 100%;
}

</style>