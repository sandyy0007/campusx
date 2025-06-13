# CHAT-APPLICATION

**COMPANY**: CODTECH IT SOLUTIONS

**NAME**: Sandeep

**INTERN ID**: CT08DK915

**DOMAIN**: FULL STACK WEB DEVELOPMENT

**BATCH DURATION**: April 25th, 2025 to June 25th, 2025

**MENTOR NAME** : NEELA SANTHOSH KUMAR

# DESCRIPTION OF TASK PERFORMED : 
As a task of CODTECH internship, I built a Real-time chatting application .To develop a one-on-one real-time chat application, I utilized modern web technologies to ensure seamless communication between users. The primary technology for real-time functionality is **Socket.IO**, a JavaScript library built on WebSocket that allows for event-driven, bidirectional communication between the server and the client. On the backend, I employed **Node.js** for its non-blocking I/O and event-driven architecture, making it ideal for real-time applications. **Express.js**, a lightweight web framework for Node.js, was used to handle routes and serve the frontend files. For the frontend, I implemented **HTML**, **CSS**, and **JavaScript** to design the user interface, ensuring responsiveness and intuitive usability. The application works by first prompting users to enter their username upon opening the interface; this username is stored temporarily on the server using **Socket.IO's connection instance**. Once registered, the user is redirected to a chat interface where they can specify the recipient's username in a dedicated input field to initiate a one-on-one conversation. The chat application checks in real-time whether the recipient is online by verifying the active connections maintained by the server. If the recipient is online, the message is sent and immediately displayed in the recipient's chat window, ensuring a seamless and real-time experience. If the recipient is offline, the sender is notified that the message cannot be delivered. To achieve this, I implemented event listeners and emitters in **Socket.IO** to handle events like `user_connected`, `message_sent`, and `user_disconnected`. The server tracks active users by maintaining an in-memory object that maps usernames to their respective socket IDs, enabling precise message routing. On the client side, messages sent by the user are appended dynamically to the chat window using **DOM manipulation**, with alternating styles for clarity. The chat room also incorporates a scrollable message window, ensuring that users can review previous messages without clutter. For styling, I utilized **CSS** to create a modern, clean interface, including a horizontal navbar with the app name prominently displayed, and a consistent card layout that maintains uniform dimensions regardless of content size. The chat interface itself includes a recipient input field, a message input box, and a send button. Error handling was implemented to address scenarios such as attempting to message a user who is not online or leaving fields empty. All routes, such as serving the static HTML file and handling socket connections, were managed through **Express.js**, ensuring a clean and organized codebase. Security was a key consideration; while the app is currently designed for demonstration purposes, features such as user authentication, encrypted communication, and database integration for message storage can be added in the future to enhance reliability and privacy. Overall, this project emphasizes the simplicity and power of **Socket.IO** and demonstrates how a small yet efficient tech stack can create a functional and user-friendly real-time chat application. 
This application excels in delivering a smooth, user-centric experience with responsive design, real-time feedback, and robust error handling. The dynamic interface ensures ease of use, while the backend reliably manages connections and messaging. Concluding, the project highlights the synergy of Socket.IO, Node.js, Express.js, and modern frontend technologies to build a scalable, efficient, and interactive one-on-one chat solution. I have named my project as **Campus X**.

# OUTPUT OF THE TASK
### CampusX Project Screenshots

![Campus X 1](assets/campus%20x%201.png)
![Campus X 2](assets/campus%20x%202.png)
![Campus X 3](assets/campus%20x%203.png)
