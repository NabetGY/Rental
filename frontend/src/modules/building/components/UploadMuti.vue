<style scoped>
input[type="file"] {
  position: absolute;
  top: -150px;
}
div.file-listing img {
  height: 30%;
  border-radius: 5%;
}
</style>

<template>
  <div class="container">

    <h2>Subir imagenes</h2>
    <hr />

    <div class="col">
      <label
        >Imagenes
        <input
          type="file"
          id="multiple-image-preview-files"
          accept="image/*"
          multiple
          @change="handleFilesUpload($event)"
          required
        />
      </label>
    </div>

    <div class="row">

            <div
            v-for="(file, key) in files"
            v-bind:key="'file-' + key"
            class="col-3 file-listing m-2"
            >
            <img class="preview" v-bind:id="'image-' + parseInt(key)" />
            <button :id="key" class="btn btn-danger mt-1" @click="deleteFiles(key)">Eliminar</button>
            </div>
        
    </div>
    <br />
    <div class="col">
      <button class="btn btn-primary" v-on:click="addFiles()">Añadir imagenes</button>
    </div>
    <br />
    <div class="col">
<!--       <button class="btn btn-success" v-on:click="submitFiles()">Submit</button>
 -->    </div>
  </div>
</template>

<script>
import axios from "axios";
import { computed } from 'vue';

export default {
  props: {
    modelValue: Array,
  },
  

  setup(props, { emit }) {
      //const files = ref([]);
      const files = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value),
    });
  
  /* Defines the method used by the component */


    /* Adds a file */
    function addFiles() {
      console.log(files.value)
        document.getElementById("multiple-image-preview-files").click();
    }


    function deleteFiles(id) {
        /* Get the uploaded files from the input. */
/*         let uploadedFiles = event.target.files; */
         console.log(files.value)

         
        let newFiles = []
        if(files.value.lenght !== 1)
        {  for (let i = 0; i < files.value.length; i++) {
            if (files.value[i] !== files.value[id]) {
                newFiles.push(files.value[i]);
            }}
            files.value = newFiles
            }
          else{
            files.value = []
          }
          console.log(newFiles)
          console.log('espera')
          setTimeout(() => {  console.log(files.value); }, 2000);


        /* Adds the uploaded file to the files array */
/*         for (var i = 0; i < uploadedFiles.length; i++) {
            files.value.push(uploadedFiles[i]);
        }
        /* Generate image previews for the uploaded files */
        // getImagePreviews(); 
    }


    /* Submits files to the server */
    function submitFiles() {
        /* Initialize the form data */
        let formData = new FormData();
        /*Iterate over any file sent over appending the files	to the form data. */
        for (var i = 0; i < files.value.length; i++) {
            let file = files.value[i];
            formData.append("files.value[" + i + "]", file);
        }
        /* Make the request to the POST /select-files URL	*/
        axios.post(
            "/file-multiple-preview", 
            formData, {
                headers: { "Content-Type": "multipart/form-data", },
            })
            .then(function () {
                console.log("SUCCESS!!");
            })
            .catch(function () {
                console.log("FAILURE!!");
            });
    }


    /* Handles the uploading of files */
    function handleFilesUpload(event) {
        /* Get the uploaded files from the input. */
        let uploadedFiles = event.target.files;
        /* Adds the uploaded file to the files array */
        for (var i = 0; i < uploadedFiles.length; i++) {
            files.value.push(uploadedFiles[i]);
        }
        /* Generate image previews for the uploaded files */
        getImagePreviews();
    }


    /* Gets the preview image for the file. */
    function getImagePreviews() {
        /* Iterate over all of the files and generate an image preview for each one. */
        for (let i = 0; i < files.value.length; i++) {
        /* Ensure the file is an image file	*/
            if (/\.(jpe?g|png|gif)$/i.test(files.value[i].name)) {
                /* Create a new FileReader object	*/
                let reader = new FileReader();
                /* Add an event listener for when the file has been loaded to update the src on the file preview.	*/
                reader.addEventListener( "load", function () {
                    document.getElementById("image-" + parseInt(i)).src =
                    reader.result;
                    }.bind(this), false 
                );
                /*
                Read the data for the file in through the reader. When it has
                been loaded, we listen to the event propagated and set the image
                src to what was loaded from the reader.
                */
                reader.readAsDataURL(files.value[i]);
            }
        }
    }

    return {
        files,
        addFiles,
        deleteFiles,
        submitFiles,
        handleFilesUpload,
        getImagePreviews,
    }
  },
};
</script>