const socket = io();

// Elements
const usernameInput = document.getElementById('username');
const registerBtn = document.getElementById('registerBtn');
const recipientInput = document.getElementById('recipient');
const inputMessage = document.getElementById('inputMessage');
const sendMessageBtn = document.getElementById('sendMessageBtn');
const messagesList = document.getElementById('messages');
const registerContainer = document.getElementById('register-container');
const chatContainer = document.getElementById('chat-container');

let currentUsername = "";

// Register user
registerBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  if (username) {
    currentUsername = username;
    socket.emit('register', username); // Notify the server
    registerContainer.style.display = 'none';
    chatContainer.style.display = 'flex';
  }
});

// Send private message
sendMessageBtn.addEventListener('click', () => {
  const recipient = recipientInput.value.trim();
  const message = inputMessage.value.trim();
  if (recipient && message) {
    socket.emit('private message', { to: recipient, message });
    displayMessage(`You: ${message}`, true);
    inputMessage.value = ''; // Clear input field
  }
});

// Receive private message
socket.on('private message', ({ from, message }) => {
  displayMessage(`${from}: ${message}`, false);
});

// Display messages with WhatsApp-style bubble
function displayMessage(msg, isSender) {
  const li = document.createElement('li');
  li.textContent = msg;
  li.className = `
    p-2 my-1 rounded-xl max-w-[75%] break-words
    ${isSender ? 'self-end bg-green-500 text-white ml-auto' : 'self-start bg-gray-200 text-black mr-auto'}
  `;
  messagesList.appendChild(li);
  messagesList.scrollTop = messagesList.scrollHeight;
}

// Handle errors
socket.on('error', (errorMessage) => {
  alert(errorMessage);
});
