document.addEventListener("DOMContentLoaded", () => {
    
    const getProjectCard = (element) => {
        
        return element.closest(".project-card, .project-cardtwo, .project-cardthree, .project-cardfour");
    };

    const menuButtons = document.querySelectorAll(".menu-btn");
    menuButtons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const projectCard = getProjectCard(event.target);
            const menu = projectCard.querySelector(".menu"); 

            if (menu) {
                
                document.querySelectorAll('.menu').forEach(m => {
                    if (m !== menu) m.classList.remove("show");
                });

                
                menu.classList.toggle("show");
            }
        });
    });

    
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const projectCard = getProjectCard(event.target);
            projectCard.remove();
        });
    });

    
    const copyButtons = document.querySelectorAll(".copy-btn");
    copyButtons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const projectCard = getProjectCard(event.target);

            const username = projectCard.querySelector(".username, .usernamethree")?.innerText || "No username";
            const statusText = projectCard.querySelector(".status-text, .status-textt")?.innerText || "No status";
            const detailsText = projectCard.querySelector(".status-text-description")?.innerText || "No details";

            const textToCopy = `Username: ${username}\nStatus: ${statusText}\nDetails: ${detailsText}`;

            navigator.clipboard.writeText(textToCopy).then(() => {
                alert(`Copied:\n${textToCopy}`);
            }).catch((err) => {
                alert("Failed to copy text. Please try again.");
                console.error(err);
            });
        });
    });

   
    const editButtons = document.querySelectorAll(".edit-btn");
    editButtons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const projectCard = getProjectCard(event.target);

            const editableElements = projectCard.querySelectorAll(
                ".username, .usernamethree, .status-text, .status-textt, .status-text-description"
            );

            editableElements.forEach((element) => {
                const isEditable = element.isContentEditable;
                element.contentEditable = !isEditable;
                if (!isEditable) {
                    element.focus();
                }
            });
        });
    });
});
