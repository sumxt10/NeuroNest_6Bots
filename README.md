# NeuroNest

NeuroNest is a React Native mobile application designed to help users manage their stress levels and improve their mental well-being. The app provides various features, including real-time stress metrics, journaling capabilities, and personalized insights based on user data.

## Project Structure

The project is organized into several key directories and files:

- **.gitignore**: Specifies files and directories that should be ignored by Git.
- **App.js**: The main entry point of the application, setting up navigation and rendering the main component.
- **app.json**: Configuration settings for the Expo app, including app name, version, and icon.
- **index.js**: Entry point for the React Native app, registering the main component with the AppRegistry.
- **package.json**: Lists dependencies, scripts, and metadata for the project.
- **assets/**: Contains static assets like images (e.g., app icon).
- **src/**: The source code for the application, organized into several subdirectories:
  - **components/**: Reusable UI components (e.g., Button, Card, StressMeter).
  - **hooks/**: Custom hooks for encapsulating reusable logic (e.g., useCustomHook).
  - **navigation/**: Main navigation setup for the app (e.g., AppNavigator).
  - **pages/**: Components representing different pages in the app (e.g., HomePage, JournalPage).
  - **screens/**: Main screens of the app (e.g., ExampleScreen).
  - **services/**: API service files for handling data fetching (e.g., api.js).
  - **utils/**: Utility functions and constants used throughout the app (e.g., helpers.js).

## Features

- **Real-time Stress Metrics**: Users can view their current stress levels and vital signs on the HomePage.
- **AI-Powered Journaling**: The JournalPage provides an interface for users to engage in empathy journaling, supported by AI insights.
- **Progress Tracking**: The HistoryPage displays charts and data related to the user's stress and therapy progress.
- **User Settings**: The SettingsPage allows users to manage their profiles, device pairings, and preferences.

## Installation

To get started with the NeuroNest project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd neuronest
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm start
   ```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.