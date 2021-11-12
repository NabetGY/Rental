import { ref, watch } from "vue";

export function useImageUpload() {
    let imageFile = ref("");
    let imageUrl = ref("");
    let images = ref([]);

    function handleImageSelected(event) {
        console.log(event)
        if (event.target.files.length === 0) {
            imageFile.value = "";
            imageUrl.value = "";
            images.value = []
            return;
        }
        console.log("event ->> ", event.target.files[0].name)

        console.log("event ->> ", event.target.files[0])
        imageFile.value = event.target.files[0];
    }

    watch(imageFile, (imageFile) => {
        if (!(imageFile instanceof File)) {
            return;
        }

        let fileReader = new FileReader();

        fileReader.readAsDataURL(imageFile);

        fileReader.addEventListener("load", () => {
            imageUrl.value = fileReader.result;
            images.value.push(fileReader.result)

        });

        console.log(imageUrl);
        console.log(images)

    });



    return {
        imageFile,
        imageUrl,
        handleImageSelected,
        images
    };
}