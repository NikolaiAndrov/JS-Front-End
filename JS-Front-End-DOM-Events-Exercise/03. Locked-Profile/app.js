function lockedProfile() {

    let buttons = document.getElementsByTagName("button");
   
    for (const button of buttons) {
        button.addEventListener("click", showInfo);
    }

    function showInfo(event) {

        let button = event.currentTarget;
        
        let profile = button.parentElement;
        let children = profile.children;

        let isLocked = children[2].checked;
        
        if (isLocked) {
            return;
        }

        let additionalInfo = children[9];
        
        if (button.textContent === "Show more") {

            additionalInfo.style.display = "block";
            button.textContent = "Hide it";

        } else if (button.textContent === "Hide it") {

            additionalInfo.style.display = "none";
            button.textContent = "Show more";

        }
    }
}