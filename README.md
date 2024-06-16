# Weather App

This is a responsive Weather Application built with React that allows users to get weather updates by searching for a city name or zip code. Users can also fetch weather data for their current location. The application supports both light and dark modes and can be accessed on any device.

You can view the live application [here](https://khwajaurs-weatherapp.netlify.app).

## Instructions on How to Run the Application Locally

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the application:**

    ```bash
    npm start
    ```

    This will start the application on `http://localhost:3000`.

## Brief Description of the Approach and Technologies Used

- **React**: The entire application is built using React, a JavaScript library for building user interfaces.
- **React Router**: Used for handling routing in the application.
- **Context API**: Utilized for managing global state, such as dark mode.
- **Cookies**: The `js-cookie` library is used to handle user authentication by storing email and password in cookies.
- **Geolocation API**: Used to fetch the user's current location for weather updates.
- **OpenWeatherMap API**: Used to fetch weather data.
- **CSS Modules**: Styling is handled using CSS modules to scope styles locally.
- **Responsive Design**: The application is designed to be responsive and can be accessed on any device, including desktops, tablets, and mobile phones.

## Application Structure

- `App.js`: Main application component that sets up routing.
- `AuthPage.js`: Component for user authentication.
- `HomePage.js`: Main page that displays weather information.
- `SearchBar.js`: Component for searching weather by city name or zip code.
- `WeatherDetails.js`: Component for displaying detailed weather information.
- `MultipleLocations.js`: Component for displaying weather for multiple predefined locations.
- `WeatherIcon.js`: Component for displaying weather icons based on the weather condition.
- `ContextApi/ContextApi.js`: Context API setup for global state management.

## Known Issues or Limitations

- **API Key Security**: The OpenWeatherMap API key is included directly in the code. For a production application, it is recommended to store API keys securely.
- **Geolocation Permissions**: If the user denies geolocation permissions, the application cannot fetch weather data for the current location.
- **Error Handling**: More robust error handling can be implemented for API requests and user inputs.
- **Accessibility**: Improvements can be made to ensure the application is fully accessible to all users.
- **Unit Tests**: The application currently lacks unit tests. Implementing tests can improve code reliability.

## Future Enhancements

- Implement user authentication with a backend server.
- Improve error handling and display more user-friendly error messages.
- Add unit and integration tests.
- Enhance the UI with more animations and transitions.

## Contributors

- Khajamuneeruddin


