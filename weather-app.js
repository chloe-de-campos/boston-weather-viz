// Weather data
const weatherData = {
    labels: ['Wed\nJun 19', 'Thu\nJun 20', 'Fri\nJun 21', 'Sat\nJun 22', 'Sun\nJun 23', 'Mon\nJun 24', 'Tue\nJun 25'],
    datasets: [
        {
            label: 'High Temperature (°F)',
            data: [88, 92, 85, 79, 82, 84, 87],
            borderColor: '#ff6b6b',
            backgroundColor: 'rgba(255, 107, 107, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            yAxisID: 'y'
        },
        {
            label: 'Low Temperature (°F)',
            data: [70, 73, 68, 66, 65, 67, 69],
            borderColor: '#4ecdc4',
            backgroundColor: 'rgba(78, 205, 196, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            yAxisID: 'y'
        },
        {
            label: 'Humidity (%)',
            data: [78, 82, 65, 60, 58, 63, 70],
            borderColor: '#45b7d1',
            backgroundColor: 'rgba(69, 183, 209, 0.1)',
            borderWidth: 2,
            borderDash: [5, 5],
            fill: false,
            tension: 0.4,
            yAxisID: 'y1'
        },
        {
            label: 'Rain Chance (%)',
            data: [40, 60, 30, 20, 10, 20, 35],
            type: 'bar',
            backgroundColor: 'rgba(96, 165, 250, 0.6)',
            borderColor: 'rgba(96, 165, 250, 1)',
            borderWidth: 1,
            yAxisID: 'y1'
        }
    ]
};

// Main chart configuration
const mainChartConfig = {
    type: 'line',
    data: weatherData,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: false
            },
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: 'white',
                    font: {
                        size: 12
                    }
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)'
                }
            },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                min: 60,
                max: 100,
                ticks: {
                    color: 'white'
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)'
                },
                title: {
                    display: true,
                    text: 'Temperature (°F)',
                    color: 'white'
                }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                min: 0,
                max: 100,
                ticks: {
                    color: 'white'
                },
                grid: {
                    drawOnChartArea: false,
                },
                title: {
                    display: true,
                    text: 'Humidity/Rain (%)',
                    color: 'white'
                }
            }
        }
    }
};

// Initialize charts when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Main weather chart
    const ctx = document.getElementById('weatherChart').getContext('2d');
    new Chart(ctx, mainChartConfig);

    // Pressure chart
    const pressureCtx = document.getElementById('pressureChart').getContext('2d');
    new Chart(pressureCtx, {
        type: 'line',
        data: {
            labels: ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'],
            datasets: [{
                label: 'Pressure (in)',
                data: [29.85, 29.78, 29.92, 29.95, 30.01, 29.98, 29.88],
                borderColor: '#a855f7',
                backgroundColor: 'rgba(168, 85, 247, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    ticks: { color: 'white', font: { size: 10 } },
                    grid: { color: 'rgba(255, 255, 255, 0.2)' }
                },
                y: {
                    min: 29.7,
                    max: 30.1,
                    ticks: { color: 'white', font: { size: 10 } },
                    grid: { color: 'rgba(255, 255, 255, 0.2)' }
                }
            }
        }
    });

    // UV Index chart
    const uvCtx = document.getElementById('uvChart').getContext('2d');
    new Chart(uvCtx, {
        type: 'bar',
        data: {
            labels: ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'],
            datasets: [{
                label: 'UV Index',
                data: [8, 9, 8, 9, 9, 8, 7],
                backgroundColor: '#f59e0b',
                borderColor: '#d97706',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    ticks: { color: 'white', font: { size: 10 } },
                    grid: { color: 'rgba(255, 255, 255, 0.2)' }
                },
                y: {
                    min: 0,
                    max: 10,
                    ticks: { color: 'white', font: { size: 10 } },
                    grid: { color: 'rgba(255, 255, 255, 0.2)' }
                }
            }
        }
    });

    // Visibility chart
    const visCtx = document.getElementById('visibilityChart').getContext('2d');
    new Chart(visCtx, {
        type: 'line',
        data: {
            labels: ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'],
            datasets: [{
                label: 'Visibility (miles)',
                data: [8, 6, 10, 10, 10, 10, 9],
                borderColor: '#22c55e',
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    ticks: { color: 'white', font: { size: 10 } },
                    grid: { color: 'rgba(255, 255, 255, 0.2)' }
                },
                y: {
                    min: 0,
                    max: 10,
                    ticks: { color: 'white', font: { size: 10 } },
                    grid: { color: 'rgba(255, 255, 255, 0.2)' }
                }
            }
        }
    });
});
