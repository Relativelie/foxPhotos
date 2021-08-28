const showButton = document.querySelector(".textBlock button");

showButton.addEventListener("click", showImage);

async function showImage() {
    let result = await fetch("https://randomfox.ca/floof/");

    let resultReceived = await result.json();
    addImageOnPage(resultReceived);
}

function addImageOnPage(requestResult) {
    document.querySelector(".foxImage").innerHTML = `<img src="${requestResult.image}" alt=""></img>`
}