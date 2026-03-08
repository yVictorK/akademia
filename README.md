# Akadêmia

Akadêmia is a mobile study companion designed to help students prepare for university entrance exams in Brazil, especially the university entrance exams in the state of Amazonas and the ENEM (Exame Nacional do Ensino Médio). The application provides tools that support active learning, organization, and access to educational content in a single mobile platform.

The app was built using React Native with Expo and uses MongoDB Realm SDK connected to MongoDB Atlas for cloud data synchronization and persistence.

Akadêmia focuses on helping students structure their study routine through flashcards, study task management, educational video integration, and access to important notices such as exam announcements.

---

## Application Preview

Example:

<div align="center">
  <img src="https://github.com/user-attachments/assets/0efd6c94-a481-4837-879a-f0ba234c5ae3" width="23%" style="margin:6px;"/>
  <img src="https://github.com/user-attachments/assets/9dddddb7-f831-476c-ad11-5987bb85adc4" width="23%" style="margin:6px;"/>
  <img src="https://github.com/user-attachments/assets/eb749bfd-73e3-487a-b3fe-68298ff71d19" width="23%" style="margin:6px;"/>
  <img src="https://github.com/user-attachments/assets/f57865dc-b48d-4c82-80d8-a8c7306072a5" width="23%" style="margin:6px;"/>
</div>


---

## Project Motivation

Students preparing for Brazilian entrance exams often rely on multiple tools to organize their studies, review concepts, and access learning resources.

Akadêmia was created to centralize these tools into a single mobile application that supports:

- structured study planning
- active recall through flashcards
- educational video consumption
- task organization
- access to official notices and exam information

The goal is to improve study efficiency and reduce the friction involved in managing different study resources.

---

## Core Features

### Authentication System

The application includes a complete authentication flow allowing users to create and manage accounts.

Features include:

- user registration
- login system
- password recovery
- persistent authentication session

User data is stored and synchronized through MongoDB Realm connected to MongoDB Atlas.

---

### User Profile Management

Users can manage their personal information and study profile.

Capabilities include:

- editing profile information
- managing user preferences

This allows the application to provide a personalized study environment.

---

### Flashcard Learning System

Akadêmia includes a flashcard system designed to reinforce memory through active recall.

Users can:

- create flashcards
- organize flashcards into decks
- review flashcards
- manage multiple study topics

This feature supports self-testing and spaced repetition practices commonly used in effective exam preparation.

---

### Study Task Management

The app includes a built-in study task manager that allows students to organize their daily study routine.

Users can:

- create study tasks
- track completed tasks
- manage study goals
- organize study priorities

This helps students maintain discipline and structure during exam preparation.

---

### Educational Video Integration

Akadêmia integrates with the YouTube API to provide access to educational videos directly inside the application.

Features include:

- searching for educational content
- filtering study videos
- watching lessons inside the app

This allows students to easily access high-quality educational material without leaving the application.

---

### Exam Notices and Announcements

The application provides a section dedicated to important exam notices and announcements.

This feature allows users to:

- view important exam notices
- track official announcements
- stay updated about entrance exams and relevant academic information

This is particularly useful for students preparing for regional entrance exams in Amazonas.

---

### Study Methods Section

Akadêmia includes a section dedicated to study strategies and techniques that help students improve their learning process.

Examples include:

- recommended study techniques
- productivity strategies for exam preparation

---

### Study Statistics

Users can track their study progress through the application's statistics system.

The statistics section allows users to review their overall study performance, including the number of correct and incorrect answers during flashcard practice.

Available metrics include:

- correct answers
- incorrect answers
- overall study performance

This provides feedback that helps students maintain motivation and measure progress.

---

## Architecture Overview

Akadêmia follows a modular mobile application architecture.

Main layers include:

Mobile Application  
Built using React Native with Expo and TypeScript.

Navigation Layer  
Implemented with React Navigation using stack and tab navigation patterns.

State and Data Layer  
MongoDB Realm SDK is used to handle authentication, synchronization, and database access.

Database  
MongoDB Atlas is used as the cloud database that stores user data, flashcards, tasks, and application content.

---

## Technology Stack

Frontend

- React Native
- Expo
- TypeScript
- React Navigation
- Styled Components

Backend and Data

- MongoDB Realm SDK
- MongoDB Atlas

External Services

- YouTube Data API

---

## Project Structure

Example simplified project structure:

```
akadmia
│
├── src
│   ├── components
│   ├── screens
│   ├── routes
│   ├── services
│   ├── models
│   ├── database
│   └── themes
│
├── assets
├── android
├── app.json
├── App.tsx
└── README.md
```

The project is organized to keep UI, data models, navigation, and services separated and maintainable.

---

## Getting Started

### Prerequisites

Before running the project, make sure you have installed:

Node.js  
Expo CLI  
Android Studio or an Android emulator (optional)  
A MongoDB Atlas cluster  
A MongoDB Realm application

---

### Installation

Clone the repository:

```
git clone https://github.com/your-username/akademia.git
```

Navigate to the project directory:

```
cd akademia
```

Install dependencies:

```
npm install
```

or

```
yarn install
```

---

### Running the Application

Because the project uses MongoDB Realm SDK, a development build of the application is required. The app cannot run using the standard Expo Go client.

First, install Expo CLI if you do not have it installed:

```
npm install -g expo-cli
```

Install project dependencies:

```
npm install
```

Create a development build of the application:

```
npx expo prebuild
```

Then run the development build:

```
npx expo run:android
```

or

```
npx expo run:ios
```

Alternatively, you can create a development build using Expo Application Services (EAS):

```
npx expo install expo-dev-client
npx expo prebuild
npx expo run:android
```

After the development build is installed on your device or emulator, start the development server:

```
npx expo start
```

You can then run the application on:

- an Android emulator
- a physical Android device
- an iOS simulator (macOS only)

---

## Environment Configuration

To run the project correctly, you must configure both the MongoDB Realm connection and the YouTube Data API.

The application depends on these external services for authentication, database synchronization, and educational video integration.

---

### MongoDB Atlas and MongoDB Realm

Akadêmia uses MongoDB Realm SDK connected to MongoDB Atlas.

Steps to configure:

1. Create a MongoDB Atlas cluster.

2. Create a MongoDB Realm App connected to your Atlas cluster.

3. Enable Authentication Providers in the Realm dashboard (for example Email/Password authentication).

4. Create the necessary collections used by the application.

5. Obtain your **Realm App ID**.

Add your Realm configuration to the project environment variables.

Example:

```
REALM_APP_ID=your_realm_app_id
```

Make sure your MongoDB Realm rules and permissions allow the application to read and write the necessary data.

---

### YouTube Data API

Akadêmia integrates with the YouTube Data API to allow students to search and watch educational videos directly inside the application.

To configure this service:

1. Go to the Google Cloud Console.

2. Create a new project.

3. Enable the **YouTube Data API v3**.

4. Generate an API key.

5. Restrict the key if necessary (recommended for production).

Add the API key to your environment configuration.

Example:

```
YOUTUBE_API_KEY=your_youtube_api_key
```

The application uses this key to perform video searches and fetch educational content from YouTube.

---

### Example Environment File

You may create an environment configuration file to store these variables.

Example:

```
REALM_APP_ID=your_realm_app_id
YOUTUBE_API_KEY=your_youtube_api_key
```

Make sure this file is not committed to the repository. It should be included in `.gitignore`.

---

## Author

Victor Kossmann

Software Engineering Student focused on mobile development, cloud applications, and educational technology.
