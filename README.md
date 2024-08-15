# CheeZJokes App

### What I did:

**Functional Component Refactoring:** The app was refactored to leverage React hooks for a more functional and modern approach.

---

## Introduction:

Welcome to the world of CheeZJokes, a React application designed to tickle your funny bone and showcase your React development skills! This app allows users to view and vote on a collection of delightfully cheesy jokes, powered by the ICanHazDadJoke API.

---

## Features

- **Joke Fetching:** Upon loading, the app fetches 5 unique jokes from the ICanHazDadJoke API, ensuring no duplicates appear.
- **Spinner While Loading:** A visually appealing spinner keeps users engaged while the jokes are retrieved.
- **Joke List Presentation:** Jokes are displayed in a user-friendly list format, each accompanied by:
  - **Joke Text:** The core funny content that will tickle your users' fancies.
  - **Up/Down Vote Buttons:** Users can vote for or against each joke, influencing their overall score.
  - **Vote Score:** The net score (upvotes minus downvotes) is displayed for each joke, reflecting its popularity.

---

## Technology Stack

- **React:** This modern JavaScript library provides a robust framework for building dynamic user interfaces.
- **ICanHazDadJoke API:** We leverage this API to access a vast collection of cheesy jokes, ensuring a constant stream of hilarity.
- **React Hooks:** The app has been fully refactored to utilize hooks, making it more functional, efficient, and modern.

---

## Getting Started

**Prerequisites:** Ensure you have Node.js and npm (or yarn) installed on your system.

Clone the Repository:

```bash
git clone https://github.com/your-username/cheeZJokes.git

cd cheeZJokes
npm install  # or yarn install

npm start  # or yarn start
```

Open http://localhost:3000 (or your development server port) in your browser to experience the app.

## Future Enhancements:

**Persistence:** Implementing features like user login and joke voting history will allow users to personalize their experience and track their favorite cheesy jokes.

**Custom Joke Submission:** We aim to add a feature where users can submit their own cheesy creations, fostering a fun and interactive community.
