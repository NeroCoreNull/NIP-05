document.addEventListener('DOMContentLoaded', function () {
    var ctx1 = document.getElementById('privacyConcernsChart').getContext('2d');
    var privacyConcernsChart = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: ['Concerned', 'Not Concerned'],
            datasets: [{
                data: [92, 8],
                backgroundColor: ['#33ff33', '#ff4500'],
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Concerns about Online Privacy'
            }
        }
    });

    var ctx2 = document.getElementById('consumerBehaviorChart').getContext('2d');
    var consumerBehaviorChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Stopped Shopping', 'Would Spend More'],
            datasets: [{
                label: 'Percentage of Consumers',
                data: [48, 60],
                backgroundColor: ['#ff4500', '#33ff33'],
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
});
