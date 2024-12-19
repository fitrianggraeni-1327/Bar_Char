
const barChart = document.getElementById("barChart");


new Chart(barChart, {
    type: "bar", // Jenis grafik
    data: {
        labels: [
            "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"
        ],
        datasets: [
            {
                label: "Nissan",
                data: [100, 150, 170, 187, 300, 442, 600, 800, 790, 820, 950, 1000],
                backgroundColor: "rgba(186, 85, 211, 0.7)",
                borderColor: "#3cba9f",
                borderWidth: 1
            },
            {
                label: "Toyota",
                data: [500, 700, 900, 850, 890, 922, 950, 800, 990, 900, 950, 1100],
                backgroundColor: "rgba(80, 200, 120, 0.7)",
                borderColor: "#50C878",
                borderWidth: 1
            },
            {
                label: "Honda",
                data: [700, 750, 530, 600, 625, 600, 800, 900, 890, 820, 1000, 1100],
                backgroundColor: "rgba(252, 3, 78, 0.7)",
                borderColor: "#fc034e",
                borderWidth: 1
            }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: "Car Sales Data Chart 2024", 
                font: {
                    size: 18
                },
                padding: {
                    top: 10,
                    bottom: 30
                }
            },
            tooltip: {
                enabled: true 
            }
        },
        responsive: true,
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: false 
                },
                title: {
                    display: true,
                    text: "Months",
                    font: {
                        size: 14
                    }
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: "rgba(200, 200, 200, 0.2)" 
                },
                title: {
                    display: true,
                    text: "Sales (in units)",
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});
