
requestIdleCallback(injectSyncButton);
setInterval(injectSyncButton, 2_000);

function injectSyncButton() {

    if (document.body && document.head && document.querySelectorAll("[d='M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3']").length!=0){

        const chatGptResponseAll = document.querySelectorAll("[d='M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3']");

        console.log("response", chatGptResponseAll)
        chatGptResponseAll.forEach(tag => {
            var parent = tag.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild;
            var parentButton = tag.parentElement.parentElement.parentElement;
            console.log("parent ", parent)
            // Create a copy button
            const copyButton = document.createElement("button");
            copyButton.innerHTML = "Copy";
            copyButton.style.marginLeft = "10px";
            copyButton.name="copybtn"

            // Add the copy button to the API response
            if(parentButton.lastElementChild.name!=="copybtn"){
                parentButton.appendChild(copyButton);
            }

            // Copy the API response to the clipboard when the copy button is clicked
            copyButton.addEventListener("click", function() {
                navigator.clipboard.writeText(parent.innerText).then(
                        function() {
                            console.log("Response copied to clipboard");
                            },
                        function(err) {
                            console.error("Failed to copy response to clipboard: ", err);
                        }
                        );
            });
        });
    }else {
        requestIdleCallback(injectSyncButton);
    }
}



