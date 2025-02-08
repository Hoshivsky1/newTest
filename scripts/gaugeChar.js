const canvas = document.getElementById('gaugeChart');
        const ctx = canvas.getContext('2d');
    
        const dpi = window.devicePixelRatio;
        canvas.width = 132 * dpi;
        canvas.height = 90 * dpi;
        canvas.style.width = "132px";
        canvas.style.height = "90px";
        ctx.scale(dpi, dpi);
    
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: Array(50).fill(1.2),
                    backgroundColor: Array(50).fill('#d3d3d3'),
                    borderWidth: 3,
                    borderColor: 'white'
                }]
            },
            options: {
                rotation: -100,
                circumference: 200,
                cutout: '75%',
                plugins: {
                    legend: { display: false },
                    tooltip: { enabled: false }
                },
                responsive: false,
                maintainAspectRatio: false
            }
        });