let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
        let weeklyGoal = localStorage.getItem('weeklyGoal') || 0;

        const workoutForm = document.getElementById('workout-form');
        const goalForm = document.getElementById('goal-form');
        const workoutList = document.getElementById('workout-list');
        const ctx = document.getElementById('progress-chart').getContext('2d');

        let chart;

        workoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const date = document.getElementById('workout-date').value;
            const type = document.getElementById('workout-type').value;
            const duration = document.getElementById('workout-duration').value;
            const calories = document.getElementById('workout-calories').value;

            workouts.push({ date, type, duration: parseInt(duration), calories: parseInt(calories) });
            localStorage.setItem('workouts', JSON.stringify(workouts));
            
            updateWorkoutList();
            updateChart();
            workoutForm.reset();
        });

        goalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            weeklyGoal = document.getElementById('weekly-goal').value;
            localStorage.setItem('weeklyGoal', weeklyGoal);
            updateChart();
            goalForm.reset();
        });

        function updateWorkoutList() {
            workoutList.innerHTML = '';
            workouts.slice(-5).reverse().forEach(workout => {
                const workoutEl = document.createElement('div');
                workoutEl.textContent = `${workout.date} - ${workout.type} for ${workout.duration} minutes (${workout.calories} calories)`;
                workoutList.appendChild(workoutEl);
            });
        }

        function updateChart() {
            const labels = [];
            const data = [];
            const goal = [];

            for (let i = 6; i >= 0; i--) {
                const date = new Date();
                date.setDate(date.getDate() - i);
                labels.push(date.toLocaleDateString('en-US', { weekday: 'short' }));

                const dayWorkouts = workouts.filter(w => new Date(w.date).toDateString() === date.toDateString());
                const totalDuration = dayWorkouts.reduce((sum, w) => sum + w.duration, 0);
                data.push(totalDuration);

                goal.push(weeklyGoal / 7);
            }

            if (chart) {
                chart.destroy();
            }

            chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [
                        {
                            label: 'Workout Duration (minutes)',
                            data: data,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1
                        },
                        {
                            label: 'Daily Goal',
                            data: goal,
                            type: 'line',
                            fill: false,
                            borderColor: 'rgba(255, 99, 132, 1)',
                            tension: 0.1
                        }
                    ]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Duration (minutes)'
                            }
                        }
                    },
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        }

        updateWorkoutList();
        updateChart();