const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
        datasets: [{
            label: 'Dataset',
            data: [4, 1.5, 2.5, 1.5, 2, 4, 5, 1.5, 2, 4.5, 3.2, 4.3],
            backgroundColor: '#F18C5C', 
            borderWidth: 1,
            borderRadius: 8,
            barPercentage: 0.5
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                min: 1,
                max: 5,
                ticks: {
                    stepSize: 1
                }, 
                grid: {
                    display: true 
                }
            },
            x: {
                grid: {
                    display: false 
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});