# ChatMe

ChatMe is a Full Stack Chatting App that provides real-time communication using Socket.io. It securely stores user details in encrypted format in a MongoDB database.

---
## Deployed Link : https://chatme-frontend.onrender.com/
---

## Tech Stack

### Frontend
- **Technologies:** HTML, CSS, JSX, React-vite, axios, react-router-dom, socket.io-client, Chakra UI, react-lottie

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

### Login Page & Sign-Up Page

![Screenshot 2025-01-06 231920](https://github.com/user-attachments/assets/030243a6-bfc4-4733-9cf6-7be89e4b7782)

![Screenshot 2025-01-06 232124](https://github.com/user-attachments/assets/78fbfe5a-e9b8-487b-8aa0-f02ad76d8298)

![Screenshot 2025-01-06 232157](https://github.com/user-attachments/assets/ca329584-424e-46ef-87d3-663430ea0265)

![Screenshot 2025-01-06 232321](https://github.com/user-attachments/assets/f44803be-f958-401c-a718-6229239740bd)  

![Screenshot 2025-01-06 232354](https://github.com/user-attachments/assets/2ece7464-61d4-4de1-87ca-c09a013a5ca5)


### Landing Page, Single Chat Page & Group Chat Page

![Screenshot 2025-01-06 232547](https://github.com/user-attachments/assets/ea6c30e5-3583-46ba-9e5e-ce173356b6b7)

![Screenshot 2025-01-06 232627](https://github.com/user-attachments/assets/f5572de5-67f3-4626-91a8-c62f8e1c7123)

![Screenshot 2025-01-06 232924](https://github.com/user-attachments/assets/d3697a10-a132-4eca-92e9-77fe9badb46e)


### User Moadals from Chakra_UI for User Info & Group Info(Remove User and Add User Functionality)

![Screenshot 2025-01-06 233032](https://github.com/user-attachments/assets/f808ced3-4e41-4db4-8262-fc3ea7bd6a01)

![Screenshot 2025-01-06 233051](https://github.com/user-attachments/assets/1b7f78a4-bffb-4175-b5aa-81bbe42a9670)

![Screenshot 2025-01-06 233122](https://github.com/user-attachments/assets/92aaa1bb-61a8-4f83-9035-51761e9bf502)

### Notification Bell

![Screenshot 2025-01-06 233441](https://github.com/user-attachments/assets/f805810c-6a9e-44b9-abd6-e712e748820f)

![Screenshot 2025-01-06 233514](https://github.com/user-attachments/assets/cd065354-950d-415a-bacb-7bb9c98cb20c)


### Search User Functionality

![Screenshot 2025-01-06 233657](https://github.com/user-attachments/assets/52b1011a-a433-4e48-90cb-248e4939134e)


### Start Group chat by searching users

![Screenshot 2025-01-06 233811](https://github.com/user-attachments/assets/bb60b15d-5b67-42b8-a9ba-82f109fc0f33)

![Screenshot 2025-01-06 233913](https://github.com/user-attachments/assets/914d508a-b480-4165-9405-33e8fe648976)

### Notification details tooltip on click

![Screenshot 2025-01-06 234118](https://github.com/user-attachments/assets/b891a35c-d1c5-4763-b648-8fe370e8d8f5)


### Responsive Layout

![Screenshot 2025-01-06 233947](https://github.com/user-attachments/assets/87a98626-b837-4014-81c4-9cc7128cc212)

![Screenshot 2025-01-06 234043](https://github.com/user-attachments/assets/c396382e-6f1c-453e-8667-9b7f7d3f8703)


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
Directory structure:
└── imrayn06-ChatMe/
    ├── README.md
    ├── backend/
    │   ├── babel.config.js
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── server.js
    │   ├── .gitignore
    │   ├── config/
    │   │   ├── db.js
    │   │   └── generateToken.js
    │   ├── controllers/
    │   │   ├── chatControllers.js
    │   │   ├── messageControllers.js
    │   │   └── userControllers.js
    │   ├── data/
    │   │   └── data.js
    │   ├── frontend/
    │   │   ├── package-lock.json
    │   │   └── package.json
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
        ├── .env
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

