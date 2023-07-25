// EXPERIMENTAL PURPOSES ONLY
//==================================================================================================================
// saveButton.addEventListener('click', function () {
//     const hostname = input.value.trim();
//     const fromTime = fromInput.value;
//     const toTime = toInput.value;
//
//     if (hostname && fromTime && toTime) {
//         const entryData = {
//             hostname,
//             fromTime,
//             toTime
//         };
//
//         // Get existing entries from localStorage (if any)
//         const existingEntries = JSON.parse(localStorage.getItem('entries')) || [];
//         existingEntries.push(entryData);
//
//         // Save the updated entries back to localStorage.
//         localStorage.setItem('entries', JSON.stringify(existingEntries));
//
//         // Clear input fields
//         input.value = '';
//         fromInput.value = '';
//         toInput.value = '';
//
//         // Refresh the block list to display the new entry
//         refreshBlockList(existingEntries);
//     } else {
//         console.log('Please fill all the fields.');
//     }
// });
//===================================================================================================================

// function loadStoredEntries() {
//     const storedEntries = JSON.parse(localStorage.getItem('entries')) || [];
//     refreshBlockList(storedEntries);
// }
//
// // Call the function when the popup is opened
// loadStoredEntries();
