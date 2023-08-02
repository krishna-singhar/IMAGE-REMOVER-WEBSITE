const inputImage = document.querySelector("#input-image");
const outputImage = document.querySelector("#output-image");
const downloadButton = document.querySelector("#download-button");

inputImage.addEventListener("change", async function () {
    const reader = new FileReader();
    reader.onload = async function () {
        const imageFile = inputImage.files[0];
        const formData = new FormData();
        formData.append("image_file", imageFile);
        formData.append("size", "auto");

        const response = await fetch("https://api.remove.bg/v1.0/removebg", {
            method: "POST",
            body: formData,
            headers: {
                "X-Api-Key": "NpJEJJvnKayTVnPtZU4rau3n"
            }
        });
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        outputImage.src = url;
        downloadButton.href = url;
    };
    reader.readAsDataURL(inputImage.files[0]);
});

downloadButton.addEventListener("click", function () {
    downloadButton.download = "output-image.png";
});