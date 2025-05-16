document.addEventListener("DOMContentLoaded", () => {
    const filterElement = document.getElementById("filterElement");
    const accountElementDropDown = document.getElementById("accountElementDropDown");
    // Card formatting elements
    const cardContainer = document.getElementById("cardContainer");
    const cardContainerChildren = cardContainer.children;
    const denseFormatButton = document.getElementById("denseFormatButton");
    const defaultFormatButton = document.getElementById("defaultFormatButton");
    const compactFormatButton = document.getElementById("compactFormatButton");
    // Filter select elements
    const selectElements = document.getElementsByClassName("selectElement");
    let selectFilters = [];
    // Tag searching elements
    const tagsButton = document.getElementById("tagsButton");
    const tagsButtonText = document.getElementById("tagsButtonText");
    const tagFilterContainer = document.getElementById("tagFilterContainer");
    const generalTagsContainer = document.getElementById("generalTagsContainer");
    const contentTagsContainer = document.getElementById("contentTagsContainer");
    const languageTagsContainer = document.getElementById("languageTagsContainer");
    let includedTags = [];
    let excludedTags = [];
    const resetFiltersButtons = document.getElementsByClassName("resetFiltersButton");
    // Card tag elements
    const contentTags = document.getElementsByClassName("contentTags");


    /*  Drop down elements for filters and profile
        Initial hidden keeps the fade out animation from happening 
        when the page loads in. 
    */
    document.getElementById("filterButton").addEventListener('click', () => {
        // Hidden state -> unhidden
        filterElement.classList.toggle("hidden");

        // Closes filter popup if it's open when you press the filter button
        if (!tagFilterContainer.classList.contains("hidden")) {
            tagFilterContainer.classList.add("hidden");
        }
    });

    // Toggle for tags window
    tagsButton.addEventListener('click', (event) => {
        // Stop propogation to prevent parent event listener (event window)
        // below from activating, preventing the opening of filters
        event.stopPropagation();
        // Initial hidden keeps the fade out animation from happening 
        // when the page loads in.
        tagFilterContainer.classList.remove("initialHidden");
        tagFilterContainer.classList.toggle("hidden");
        preventBodyScroll();
    });

    // Prevents filter element from closing when clicking inside of it.
    tagFilterContainer.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Hides filter element if you click off it.
    window.addEventListener('click', () => {
        if (!tagFilterContainer.classList.contains("hidden")) {
            tagFilterContainer.classList.add("hidden");
        }
    });

    // Window event listener that checks that if the screen is too small and
    // tag filter container is open -> prevent scrolling
    window.addEventListener('resize', () => {
        preventBodyScroll();
        handleContentTagResize();
    });

    function preventBodyScroll() {
        const windowSize = window.innerWidth; 
        if (windowSize < 465 &&
            !(tagFilterContainer.classList.contains("hidden") || tagFilterContainer.classList.contains("initialHidden"))) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
    }
    
    document.getElementById("accountProfilePictureButton").addEventListener('click', () => {
        // Hidden state -> unhidden
        accountElementDropDown.classList.toggle("hidden");
    });

    // Events for format buttons
    denseFormatButton.addEventListener('click', () => {
        
        // Cards are formatted to dense

        for (let i = 0; i < cardContainerChildren.length; i++) {
            const card = cardContainerChildren[i];
            // If the cards are already in compact format, remove it.
            if (card.classList.contains("compact")) {
                card.classList.remove("compact");
                cardContainer.classList.remove("compact");
            }
            card.classList.add("dense");
            cardContainer.classList.add("dense");
        }

        // Sets dense to active
        denseFormatButton.classList.add("active");
        defaultFormatButton.classList.remove("active");
        compactFormatButton.classList.remove("active");
    });

    defaultFormatButton.addEventListener('click', () => {
        console.log("Default button pressed");
        for (let i = 0; i < cardContainerChildren.length; i++) {
            const card = cardContainerChildren[i];
            // If the cards are already in dense or compact format, remove it.
            if (card.classList.contains("dense")) {
                card.classList.remove("dense");
                cardContainer.classList.remove("dense");
            } else if (card.classList.contains("compact")) {
                card.classList.remove("compact");
                cardContainer.classList.remove("compact");
            }
            
            card.classList.remove("dense");
            cardContainer.classList.remove("dense");
        }

        // Sets default to active
        defaultFormatButton.classList.add("active");
        denseFormatButton.classList.remove("active");
        compactFormatButton.classList.remove("active");
    });

    compactFormatButton.addEventListener('click', () => {
        console.log("Compact button pressed");
        for (let i = 0; i < cardContainerChildren.length; i++) {
            const card = cardContainerChildren[i];
            // If the cards are already in dense format, remove it.
            if (card.classList.contains("dense")) {
                card.classList.remove("dense");
                cardContainer.classList.remove("dense");
            }
            card.classList.add("compact");
            cardContainer.classList.add("compact");
        }

        // Sets compact to active
        compactFormatButton.classList.add("active");
        denseFormatButton.classList.remove("active");
        defaultFormatButton.classList.remove("active");
    });

    document.getElementById("closeTagFilterContainerButton").addEventListener('click', () => {
        tagFilterContainer.classList.add("hidden");
        preventBodyScroll();
    });

    // Event listeners for including and excluding tags
    function addTagEventListener(parentElement) {
        const children = parentElement.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            const tagName = child.textContent.trim();
            child.addEventListener('click', () => {
                // Neutral set to include
                if (child.classList.contains("neutral")) {
                    // Setting tag state
                    child.dataset.state = "include";
                    child.classList.remove("neutral");
                    child.classList.add("include");
                    
                    // Updating data
                    includedTags.push(tagName);
                    
                } 
                
                // Include set to exclude
                else if (child.classList.contains("include")) {
                    child.dataset.state = "exclude";
                    child.classList.remove("include");
                    child.classList.add("exclude");
                    
                    // Updating data
                    includedTags = removeElement(includedTags, tagName);
                    excludedTags.push(tagName);
                    
                } 

                 // Exclude set to neutral
                else if (child.classList.contains("exclude")) {
                    child.dataset.state = "neutral";
                    child.classList.remove("exclude");
                    child.classList.add("neutral");
                    
                    // Updating data
                    excludedTags = removeElement(excludedTags, tagName);
                    
                }

                updateTagsButtonText(); 
            });
        }
    }

    addTagEventListener(generalTagsContainer);
    addTagEventListener(contentTagsContainer);
    addTagEventListener(languageTagsContainer);

    // Function in the name.
    // Also is the functionality of reset filters button
    function updateTagsButtonText() {
        if (includedTags.length > 0 && excludedTags.length > 0) {
            tagsButtonText.textContent = `Include ${includedTags.join(", ")} and Exclude ${excludedTags.join(", ")}`;
        } else if (includedTags.length > 0) {
            tagsButtonText.textContent = `Include ${includedTags.join(", ")}`;
        } else if (excludedTags.length > 0) {
            tagsButtonText.textContent = `Exclude ${excludedTags.join(", ")}`;
        } else {
            tagsButtonText.textContent = "None";
        }

        updateResetFilterButtons();
    }

    // Event listeners for select 
    // On change, add or remove filters selected.
    for (let i = 0; i < selectElements.length; i++) {
        const selectElement = selectElements[i];
        let prevFilters = new Array(selectElements.length).fill(null);
        
        selectElement.addEventListener('change', () => {
            let prevFilter = prevFilters[i];
            if (prevFilter != null) {
                selectFilters = removeElement(selectFilters, prevFilter);
            }

            if (selectElement.selectedIndex != 0) {
                selectFilters.push(selectElement.value);
                prevFilters[i] = selectElement.value;
            }

            updateResetFilterButtons();
        });
    }

    // Function in the name. Used in tag event listeners.
    function removeElement(array, element) {
        return array.filter(tag => tag !== element);
    }

    // Disables or enables all filter reset buttons by checking filters
    function updateResetFilterButtons() {
        if (selectFilters.length == 0 && includedTags.length == 0 && excludedTags.length == 0) {
            disableResetFilterButtons();
        } else {
            enableResetFilterButtons();
        }
    }

    function disableResetFilterButtons() {
        for (let i = 0; i < resetFiltersButtons.length; i++) {
            resetFiltersButtons[i].classList.add("disabled");
        }
    }

    function enableResetFilterButtons() {
        for (let i = 0; i < resetFiltersButtons.length; i++) {
            resetFiltersButtons[i].classList.remove("disabled");
        }
    }

    function disableTagsInContainer(parentElement) {
        const children = parentElement.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child.dataset.state = "neutral";
            child.classList.add("neutral");
            child.classList.remove("include");
            child.classList.remove("exclude");
        }

        includedTags = [];
        excludedTags = [];
    }

    function resetSelectElements() {
        for (let i = 0; i < selectElements.length; i++) {
            selectElements[i].selectedIndex = 0;
        }

        selectFilters = [];
    }

    // Event listeners for reset filter buttons
    for (let i = 0; i < resetFiltersButtons.length; i++) {
        resetFiltersButtons[i].addEventListener('click', () => {
            disableTagsInContainer(generalTagsContainer);
            disableTagsInContainer(contentTagsContainer);
            disableTagsInContainer(languageTagsContainer);
            updateTagsButtonText();
            resetSelectElements();
            disableResetFilterButtons();
        });
    }

    // Adds More button to contentTags that have more tags that can be shown.
    for (let i = 0; i < contentTags.length; i++) {
        const contentTag = contentTags[i];

        if (contentTag.scrollHeight > contentTag.clientHeight) {
            contentTag.classList.add("overflow-y-hidden");
        }

        contentTag.addEventListener('click', () => {
            contentTag.classList.remove("overflow-y-hidden");
            contentTag.style.maxHeight = "unset";
            contentTag.style.cursor = "auto";
        });
    }

    // Every time the webpage is resized, checked if the more button is needed.
    // Bug: more button wouldn't show up if  you made the page smaller. 
    // But now it won't disappear if the page gets big enough to show the tags
    function handleContentTagResize() {
        for (let i = 0; i < contentTags.length; i++) {
            const contentTag = contentTags[i];

            if (contentTag.scrollHeight > contentTag.clientHeight) {
                contentTag.classList.add("overflow-y-hidden");
            }
        }
    }

});