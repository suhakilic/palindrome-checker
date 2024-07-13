// DOM elements
const text = document.getElementById("text-input")
const btn = document.getElementById("check-btn")
const result = document.getElementById("result")

// Regular expression
const myRegex = /[^a-zA-Z0-9]/g

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(myRegex, "").toLowerCase()
    const reversedStr = cleanedStr.split("").reverse().join("")
    return cleanedStr === reversedStr
}

// Event listener for button click
btn.addEventListener("click", handleClick)

function handleClick() {
    let textValue = text.value

    if (textValue === "") {
        alert("Please input a value")
        return
    }

    const palindromeResult = isPalindrome(textValue)

    if (palindromeResult) {
        result.innerText = `"${textValue}" is a palindrome`
    }
    else {
        result.innerText = `"${textValue}" is not a palindrome`
    }

    // Clear input field after checking
    text.value = ""
}


