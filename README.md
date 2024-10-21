# Fitness Tracker

## Overview

The **Fitness Tracker** is a web-based application that allows users to log their workouts, set weekly fitness goals, and visualize their progress through a dynamic chart. The app uses `localStorage` to persist workout data and goals, and `Chart.js` to render an interactive progress chart.

## Features

- **Workout Logging**: Users can log different types of workouts, including running, cycling, swimming, and weight training, with duration and calories burned.
- **Weekly Goal Setting**: Users can set a weekly fitness goal (in minutes) and track their progress towards meeting this goal.
- **Progress Visualization**: A chart displays workout progress over the past 7 days, with comparison to daily workout goals.
- **Recent Workouts**: Displays the five most recent workouts logged by the user.

## Technologies Used

- **HTML5**: Structure of the web page.
- **CSS3**: For basic styling.
- **JavaScript**: Handles dynamic functionality such as logging workouts, updating goals, and generating charts.
- **Chart.js**: For rendering interactive bar and line charts.
- **LocalStorage**: To store workouts and goals persistently on the client side.

## Installation & Setup

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/your-username/fitness-tracker.git
    ```

2. Navigate to the project directory:
    ```bash
    cd fitness-tracker
    ```

3. Open `index.html` in your browser to use the app:
    ```bash
    open index.html
    ```

No server or additional installation is required.

## How to Use

1. **Log a Workout**:
   - Fill in the workout form by selecting the date, workout type, duration (in minutes), and calories burned.
   - Click the "Log Workout" button to save the workout to your recent workouts and progress chart.

2. **Set Weekly Goal**:
   - Enter your desired weekly workout goal in minutes in the "Set Goal" form.
   - Click the "Set Goal" button to save your goal and update the progress chart.

3. **View Recent Workouts**:
   - The five most recent workouts will appear under the "Recent Workouts" section.

4. **Track Progress**:
   - A bar chart will display your workout duration for the past 7 days compared to the daily goal. The line on the chart represents your daily workout goal, and the bars represent your actual workout durations.

## Future Enhancements

- **Workout Editing**: Allow users to edit or delete logged workouts.
- **Additional Metrics**: Track more detailed statistics like heart rate, pace, or distance for specific workout types.
- **Mobile Optimization**: Improve UI responsiveness on smaller screens.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to contribute to this project! Fork the repository, make your changes, and open a pull request for review.

## Contact

For any questions or feedback, feel free to reach out
