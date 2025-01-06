# ChatMe

ChatMe is a Full Stack Chatting App that provides real-time communication using Socket.io. It securely stores user details in encrypted format in a MongoDB database.

---

## Tech Stack

### Frontend
- **Technologies:** HTML, CSS, JSX, React, axios, react-router-dom, socket.io-client, Chakra UI

### Backend
- **Technologies:** Node.js, Express.js, Render.com, Socket.io, MongoDB, Mongoose, CORS, bcrypt, JWT

---

## Features

### User Authentication
- Secure login and signup
- User profiles displayed in real-time with modals showing user information

### Room Creation and Joining
- Automatically creates a unique room identifier whenever a user initiates a chat with another user
- Group chat support

### Real-Time Chat
- Instant messaging powered by Socket.io

### Notification System
- Notifications for new messages and group chats

### Responsive Design
- Fully responsive and optimized for a seamless experience across desktops, tablets, and smartphones

---

## Screenshots

### Landing Page
*Add image here*

### Sign-Up Page
*Add image here*

### Login Page
*Add image here*

---

## Run Locally

### Clone the Project
```bash
git clone https://github.com/imrayn06/ChatMe.git
cd ChatMe
```

### Install Dependencies
```bash
npm install
cd frontend/
npm install
```

### Start the Server
```bash
npm start
```

### Start the Client
```bash
cd frontend
npm start
```

---

## Directory Structure

```plaintext
imrayn06-ChatMe/
├── README.md
├── babel.config.js
├── package.json
├── backend/
│   ├── server.js
│   ├── config/
│   │   ├── db.js
│   │   └── generateToken.js
│   ├── controllers/
│   │   ├── chatControllers.js
│   │   ├── messageControllers.js
│   │   └── userControllers.js
│   ├── data/
│   │   └── data.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── models/
│   │   ├── MessageModel.js
│   │   ├── UserModel.js
│   │   └── chatModel.js
│   └── routes/
│       ├── chatRoutes.js
│       ├── messageRoutes.js
│       └── userRoutes.js
└── frontend/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── jsconfig.json
    ├── package-lock.json
    ├── package.json
    ├── vite.config.js
    ├── .gitignore
    └── src/
        ├── App.css
        ├── App.jsx
        ├── index.css
        ├── main.jsx
        ├── Context/
        │   └── ChatProvider.jsx
        ├── animation/
        │   └── typing_dot_dropping.json
        ├── assets/
        ├── components/
        │   ├── ChatBox.jsx
        │   ├── ChatLoading.jsx
        │   ├── MyChats.jsx
        │   ├── ScrollableChat.jsx
        │   ├── SingleChat.jsx
        │   ├── Authentication/
        │   │   ├── Login.jsx
        │   │   └── Signup.jsx
        │   ├── Css/
        │   │   └── styles.css
        │   ├── UserAvatar/
        │   │   ├── UserBadgeItem.jsx
        │   │   └── UserListItem.jsx
        │   ├── miscellaneous/
        │   │   ├── GroupChatModal.jsx
        │   │   ├── Profile.jsx
        │   │   ├── SideDrawer.jsx
        │   │   └── UpdateGroupChatModal.jsx
        │   └── ui/
        │       └── provider.jsx
        ├── config/
        │   └── ChatLogics.jsx
        ├── pages/
        │   ├── ChatPage.jsx
        │   └── HomePage.jsx
        └── src/
            └── components/
                └── ui/
                    ├── avatar.jsx
                    ├── button.jsx
                    ├── checkbox.jsx
                    ├── close-button.jsx
                    ├── color-mode.jsx
                    ├── dialog.jsx
                    ├── drawer.jsx
                    ├── field.jsx
                    ├── input-group.jsx
                    ├── popover.jsx
                    ├── provider.jsx
                    ├── radio.jsx
                    ├── slider.jsx
                    └── tooltip.jsx
```

---

## FAQ

**Q: Is the website optimized for mobile devices?**  
**A:** Yes, the website is fully responsive and optimized for a seamless experience across all devices, including desktops, tablets, and smartphones.

