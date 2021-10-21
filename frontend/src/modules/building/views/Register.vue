<template>
  <div class="mb-3">
      <h1 class="text-center mt-4">Registrar inmueble</h1>
    <form action="">
        <div class="container">
            <div class="row bg-light align-items-center mb-3 mt-5 pt-5 pb-5">
                <div class="col">
                    <img src="https://thumbs4.properati.com/xo0ZiKt95oePazKg8VwgPoeBDik=/1080x0/filters:strip_icc()/https%3A%2F%2Fcdn-us.inmokey.com%2Fproperties%2F5%2F4%2F5452b694c0fe5f4dd60594fa90a0754f" alt="" height="130">
                </div>
                <div class="col">
                    <img src="https://thumbs4.properati.com/jJdMxDCfPI1XPTUcTdQ4Q00rHYQ=/1080x0/filters:strip_icc()/https%3A%2F%2Fcdn-us.inmokey.com%2Fproperties%2F5%2Fd%2F5db8d3da2cf2e6286b4b94211a99a307" alt="" height="130">
                </div>
                <div class="col">
                    <img src="https://thumbs4.properati.com/toGTQjBxPj0v2JG78f6Ec7qRcyM=/1080x0/filters:strip_icc()/https%3A%2F%2Fcdn-us.inmokey.com%2Fproperties%2Fc%2Fa%2Fcad1ce89da8aaece02428466f94d55bd" alt="" height="130">
                </div>
                <div class="col">
                    <img src="https://static.thenounproject.com/png/558642-200.png" alt="" height="110">
                </div>
            </div>
            <div class="row bg-light">
                <div class="col p-4">
                    <div class="row mb-3">
                        <label for="Ciudades"><strong>Ciudad</strong></label>
                        <input type="search" name="" id="Ciudades" class="form-control" list="opciones" placeholder="Buscar">
                        <datalist id="opciones">
                            <option value="Pereira"></option>
                            <option value="Dosquebradas"></option>
                            <option value="Cartago"></option>
                        </datalist>
                    </div>
                    <div class="row ">
                        <label for=""><strong>Descripción</strong></label>
                        <textarea name="" id="" cols="60" rows="2" class="form-control" placeholder="Describa el tipo de habitación, características, etc."></textarea>
                    </div>
                    <div class="row mt-3">
                        <label for=""><strong>Precio </strong>(COP)</label>
                        <input type="number" name="" id="" class="form-control">
                    </div>
                    <div class="row mt-3">
                        <label for=""><strong>Condiciones</strong></label>
                        <textarea name="" id="" cols="60" rows="2" class="form-control" placeholder="Describa las condiciones de uso y la restricciones por parte del huésped."></textarea>
                    </div>
                </div>
                <div class="col p-4">
                    <label for=""><strong>Ubicación</strong></label>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.845265490602!2d-75.69365866700417!3d4.796600867130791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38876503059207%3A0xd5671df2301e9a3b!2sUTP!5e0!3m2!1ses!2sco!4v1634777954543!5m2!1ses!2sco" width="500" height="370" style="padding-left: 10px;" allowfullscreen="" loading="lazy">
                    </iframe>
                </div>
            </div>
        </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>