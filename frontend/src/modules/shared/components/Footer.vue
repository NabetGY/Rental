<template>
   <footer id="footer " class="footer bg-light text-center text-lg-start text-black">
      <div class="container">
        <div class="row">
          <div class="col-3 fw-bold align-self-center">
            <a href="#" class="a-footer text-reset ">PQRS</a>
          </div>
          <div class="col-3 fw-bold align-self-center">
            <a href="#" class="a-footer text-reset ">Contáctanos</a>
          </div>
          <div class="col-3 fw-bold align-self-center">
            <a href="#" class="a-footer text-reset ">T&C</a>
          </div>
          <ul class="col-3  list-unstyled mt-2">
            <li class="d-flex justify-content-between">
              <a href="https://www.facebook.com/" class="text-reset"><i class="bi bi-facebook"></i></a>
              <a href="https://www.twitter.com/" class="text-reset"><i class="bi bi-twitter"></i></a>
              <a href="https://www.instagram.com/" class="text-reset"><i class="bi bi-instagram"></i></a>
              <a href="https://www.telegram.com/" class="text-reset"><i class="bi bi-telegram"></i></a>
            </li>
            
          </ul>
        </div>
      </div>
      
      <div class="text-center" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2021 Copyright: LUMAYO APP
      </div>
    </footer>
</template>

<script>
export default {

}
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


    .a-footer{
        text-decoration: none;
    }

</style>