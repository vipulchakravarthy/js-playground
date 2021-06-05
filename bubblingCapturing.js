
document.querySelector('#grandparent').addEventListener
    ('click', () => {
        console.log("grandparent clicked")
    }, false) //to make it as bubble or capture we need to pass the flag
//if true --> capturing else bubbling, default will be bubbling

document.querySelector('#parent').addEventListener
    ('click', (e) => {
        console.log("parent clicked")
        e.stopPropagation();
    }, false) // bubbling

document.querySelector('#child').addEventListener
    ('click', () => {
        console.log("child clicked")
    }, false) // capturing