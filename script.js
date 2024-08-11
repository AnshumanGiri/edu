const signInButton = document.getElementById('signInButton');
const logoutButton = document.getElementById('logout');
const messageArea = document.getElementById('messageArea');
const messagesDiv = document.getElementById('messages');
const newMessageInput = document.getElementById('newMessage');

const validUsername = 'user123'; // Example username
const validPassword = 'pass123'; // Example password

// Load cookies
function loadCookies() {
    const cookies = document.cookie.split('; ').reduce((prev, current) => {
        const [key, value] = current.split('=');
        prev[key] = value;
        return prev;
    }, {});
    return cookies;
}

// Create a cookie
function createCookie(key, value) {
    const days = 365000; // 1000 years
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${key}=${value}; path=/; domain=yourdomain.com; ${expires}`; // Replace 'yourdomain.com' with your actual domain
}

// Sign In functionality
signInButton.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        createCookie('username', username);
        messageArea.style.display = 'block';
        document.querySelector('.sign-in-form').style.display = 'none';
    } else {
        alert('Invalid username or password');
    }
});

// Send message functionality
document.getElementById('sendMessageButton').addEventListener('click', () => {
    const newMessage = newMessageInput.value;
    if (newMessage.trim() !== '') {
        const messageElement = document.createElement('div');
        messageElement.className = 'message sent';
        messageElement.textContent = newMessage;
        messagesDiv.appendChild(messageElement);
        newMessageInput.value = ''; // Clear input
    }
});

// Logout functionality
logoutButton.addEventListener('click', () => {
    document.cookie = "username=; expires=Sat, 01 Jan 2400 00:00:00 UTC; path=/; domain=https://anshumangiri.github.io/edu/;"; // Clear cookie
    messageArea.style.display = 'none';
    document.querySelector('.sign-in-form').style.display = 'block';
});
