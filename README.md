<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Chat Application</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0 20px;
            background-color: #f4f4f4;
        }
        h1, h2, h3 {
            color: #333;
        }
        .icon {
            color: #007bff;
            margin-right: 10px;
        }
        pre {
            background: #333;
            color: #fff;
            padding: 15px;
            border-radius: 5px;
        }
        .container {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
        }
        .screenshots img {
            width: 100%;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1><i class="fas fa-comments icon"></i>Web Chat Application</h1>
        <p>This repository contains a real-time web chat application built using Node.js for the backend and HTML, CSS, and JavaScript for the frontend. The application utilizes Socket.io for efficient real-time message communication, providing a professional user interface and a seamless user experience.</p>
        
        <h2><i class="fas fa-features icon"></i>Features</h2>
        <ul>
            <li><i class="fas fa-bolt icon"></i>Real-time Messaging: Enjoy instant communication with Socket.io, enabling real-time message exchange.</li>
            <li><i class="fas fa-laptop-code icon"></i>Professional UI: Experience a sleek, professional user interface designed for maximum user engagement and satisfaction.</li>
            <li><i class="fas fa-mobile-alt icon"></i>Responsive Design: The application is fully responsive, ensuring optimal performance across all devices.</li>
            <li><i class="fas fa-smile icon"></i>User-Friendly Interaction: The interface is designed to be intuitive and easy to navigate, providing a great user experience.</li>
        </ul>

        <h2><i class="fas fa-cogs icon"></i>Technology Stack</h2>
        <h3>Backend</h3>
        <ul>
            <li><i class="fab fa-node icon"></i>Node.js: A powerful JavaScript runtime built on Chrome's V8 engine.</li>
            <li><i class="fas fa-code icon"></i>Express.js: A minimal and flexible Node.js web application framework.</li>
            <li><i class="fas fa-exchange-alt icon"></i>Socket.io: A JavaScript library for real-time web applications.</li>
        </ul>
        <h3>Frontend</h3>
        <ul>
            <li><i class="fab fa-html5 icon"></i>HTML: The standard markup language for creating web pages.</li>
            <li><i class="fab fa-css3-alt icon"></i>CSS: Style sheet language used for describing the presentation of a document.</li>
            <li><i class="fab fa-js icon"></i>JavaScript: A programming language that enables interactive web pages.</li>
            <li><i class="fas fa-icons icon"></i>FontAwesome: A library for scalable vector icons that can be customized using CSS.</li>
        </ul>

        <h2><i class="fas fa-download icon"></i>Installation</h2>
        <ol>
            <li>Clone the repository:
                <pre><code>git clone https://github.com/your-username/web-chat-application.git</code></pre>
            </li>
            <li>Navigate to the project directory:
                <pre><code>cd web-chat-application</code></pre>
            </li>
            <li>Install the necessary dependencies:
                <pre><code>npm install</code></pre>
            </li>
            <li>Start the server:
                <pre><code>npm start</code></pre>
            </li>
        </ol>

        <h2><i class="fas fa-play icon"></i>Usage</h2>
        <ol>
            <li>Open your web browser and navigate to <code>http://localhost:3000</code>.</li>
            <li>Enter your username and join the chat room.</li>
            <li>Start sending messages in real-time!</li>
        </ol>

        <h2><i class="fas fa-image icon"></i>Screenshots</h2>
        <div class="screenshots">
            <img src="screenshots/chat-interface.png" alt="Chat Interface">
            <p><em>Description: The main chat interface showcasing real-time messaging.</em></p>
        </div>

        <h2><i class="fas fa-hands-helping icon"></i>Contributing</h2>
        <p>We welcome contributions! Please read our <a href="CONTRIBUTING.md">Contributing Guidelines</a> for more information on how to get started.</p>

        <h2><i class="fas fa-file-contract icon"></i>License</h2>
        <p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>
    </div>
</body>
</html>
