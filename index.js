function checkPalindrome()
{
    const input = document.getElementById("text").value;
    const display = document.getElementById("display");
    const reversed = input.split("").reverse().join("");
    if(input === "")
    {
        display.innerText = "There is no input!!!!"
    }
    else
    {
        input === reversed ? display.innerText = "It is a Palindrome" : display.innerText = "It is not a palindrome";
    }
}

function cleartext()
{
    const input = document.getElementById("text");
    input.value = "";
    const display = document.getElementById("display");
    display.innerText = "";
}