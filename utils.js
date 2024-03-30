// utils.js

// Function to generate a random string
function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// Export the function
module.exports = { generateRandomString };

/*function baseURL(){
    const URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
}

module.exports = {baseURL};*/