<template>
  <footer
    id="footer "
    class="footer bg-light text-center text-lg-start text-black"
  >
    <div class="container">
      <div class="row">
        <div class="col-3 fw-bold align-self-center">
          <a href="https://lumayo.netlify.app/#services" class="a-footer text-reset">Servicios</a>
        </div>
        <div class="col-3 fw-bold align-self-center">
          <a href="https://lumayo.netlify.app/#contact" class="a-footer text-reset">Contáctanos</a>
        </div>
        <div class="col-3 fw-bold align-self-center">
          <a href="https://lumayo.netlify.app/#details" class="a-footer text-reset">Detalles</a>
        </div>
        <ul class="col-3 list-unstyled mt-2">
          <li class="d-flex justify-content-between">
            <a href="https://www.facebook.com/Lumayo-Arrendamientos-108625001616477" class="text-reset"
              ><i class="bi bi-facebook"></i
            ></a>
            <a href="https://www.instagram.com/lumayo.app" class="text-reset"
              ><i class="bi bi-instagram"></i
            ></a>

          </li>
        </ul>
      </div>
    </div>

    <div class="text-center" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2021 Copyright: LUMAYO ARRENDAMIENTOS APP
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 90px;
  background-color: #f5f5f5;
}

.a-footer {
  text-decoration: none;
}
</style>