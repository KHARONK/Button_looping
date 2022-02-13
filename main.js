// for loop to create buttons
for (let i = 0; i < 10; i++)
{
    document.write(`<button class="button" onclick={numClicked(${i})}>${i}</button>`);
}

// function to print clicked button valued to console
function numClicked(value) 
{
    console.log(value)
}