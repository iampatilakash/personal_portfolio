// const movingDiv = document.getElementById('elevator');
// let currentPosition = 0; // Initial position at the top (6th floor)
// let currentButton = null; // Store the current button clicked

// // Function to move the div to the specified floor
// function moveTo(floorNumber) {
//     const targetFloor = document.getElementById(`floor${floorNumber}`).offsetTop;
//     currentButton = floorNumber > currentPosition ? 'up' : 'down'; // Determine the direction

//     if (floorNumber === currentPosition) {
//         if (currentButton === 'up') {
//             movingDiv.style.top = `${targetFloor - 800}px`; // Move up by 1 floor
//             currentPosition--;
//         } else if (currentButton === 'down') {
//             movingDiv.style.top = `${targetFloor + 800}px`; // Move down by 1 floor
//             currentPosition++;
//         }
//     } else {
//         movingDiv.style.top = `${targetFloor}px`;
//         currentPosition = floorNumber; // Update the current position
//     }
// }
