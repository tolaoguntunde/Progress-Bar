const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress');
const nextBtn = document.querySelector('.btn.next');
const prevBtn = document.querySelector('.btn.prev');
let currentActive = 0;


// Attach an event listener to the nextBtn 
// Listen for click
// Increment the currentActive
// Test your currentActive with a console.log to make sure it is incrementing
// If it is incrementing, check if currentActive is greater than the length of the circle array. If it is, assign the activeTracker to the circle length. This would ensure that the activeTracker doesn't go higher than the length of the 
// circles. Test with console.log
// Call an update method which we will implement later.


nextBtn.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();

})

prevBtn.addEventListener('click', () => {
    currentActive--;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update()
})


// Create a function called update
// Run forEach method on the circles and get both the element and index. Check foreach documentation.
// If the index is less than activeTracker
// Add the class active class to the circle
// Else remove the active class
// Create a variable actives to hold all active classes.
// Change the width of the progress bar with this formula (actives.length -1)/(circle.length -1)*100

// progress.setAttribute(width, ((actives.length -1)/(circle.length -1)*100))

// Implement an if else statement to check and disable  or enable the prev and next buttons.


function update() {
    let actives = [];
    circles.forEach((element, index) => {


        if (index < currentActive) {
            element.classList.add('active');

            actives.push(element);
        } else {
            element.classList.remove('active');
        }
        progress.setAttribute('style', 'width:' + (actives.length - 1) / (circles.length - 1) * 100 + '%');
    });
    if (actives.length >= 4) {
        nextBtn.disabled = true;
        prevBtn.removeAttribute('disabled');
    } else if (actives.length <= 1) {
        prevBtn.disabled = true;
        nextBtn.removeAttribute('disabled');
    } else{ 
        prevBtn.disabled = false;
        nextBtn.disabled = false;
        }


}
