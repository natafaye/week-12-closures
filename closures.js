
// Example 1

// This function returns a function that adds an amount to a number
function getAddFunction(amountToAdd) {
    const add3 = (number) => number + amountToAdd
    return add3
}

const myAddFunction = getAddFunction(3)
console.log(myAddFunction(5))


// Example 2

const tagList = [
    { id: 0, name: "important" }, 
    { id: 1, name: "urgent" }, 
    { id: 1, name: "sparkly"}, 
    { id: 1, name: "fantastical"}, 
    { id: 1, name: "green"}
]

const tagsContainer = document.getElementById("tags-container")

function renderTagList() {
    // Clear out anything that was rendered last time, to give us a clean slate
    tagsContainer.innerHTML = ""


    // Loop over all the tags
    for(let i = 0; i < tagList.length; i++) {
        // The tag we're currently rendering
        let tag = tagList[i]

        // Make a span for this tag
        const tagSpan = document.createElement("span")
        tagSpan.className = "bg-light border rounded p-2 d-inline-flex gap-2 align-items-center me-2 mb-2"
        tagSpan.innerHTML = `
            ${tag.name}
            <button class="btn btn-outline-danger btn-sm">X</button>
        `

        // Get the delete button inside the span and connect an event listener to it
        tagSpan.querySelector("button").addEventListener("click", () => {
            // The tag we're deleting
            console.log("tag", tag)
            // Remove tag from data
            tagList.splice(tagList.indexOf(tag), 1)
            // Rerender to display the updated list of tags
            renderTagList()
        })

        // Add the span to the tag container
        tagsContainer.appendChild(tagSpan)
    }
}

renderTagList()



// Example from beginning of video

function getReadyForWork(myJob) {
    const myFriends = ["Rachel", "Linda", "Paul"]

    const lunch = ["bread", "bread"]
    lunch.splice(1, 0, "peanut butter")
    lunch.splice(2, 0, "jelly")

    // This function will bring the myJob, myFriends, and lunch variables in its closure
    function doWork() {
        console.log("Hey " + myFriends.join(" and ") + "!")
        console.log("Got a lot of " + myJob + " to do today.")
        console.log("Eating my " + lunch.join(" + "))
        console.log("Bye " + myFriends.join(" and ") + "! See you tomorrow!")
    }

    // No matter where it gets returned to, it will always remember the variables of its youth ♥️
    return doWork
}

// Calling getReadyForWork will make a new function (a copy of doWork) and return it into the doBusiness variables
const doBusiness = getReadyForWork("business")
// Now we can call that new function (a copy of doWork) and it will be able to console.log using its closure variables
doBusiness()