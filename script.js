Chart.defaults.font.family = 'Pretendard';
Chart.defaults.color = '#333';
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.pointStyle = 'circle';

const accessibilityCtx = document.getElementById('accessibilityChart');

new Chart(accessibilityCtx, {
    type: 'bar',

    plugins: [ChartDataLabels],

    data: {
        labels: [
            '이용방법 안내',
            '음성 안내',
            '글자 크기 기준',
            '뒤로가기 버튼'
        ],

        datasets: [{
            label: '제공 비율 (%)',

            data: [16.7, 44.4, 77.8, 94.4],

            backgroundColor: [
                '#A40F16',
                '#0D326F',
                '#C0A353',
                '#6B7280'
            ]
        }]
    },

    options: {
        responsive: true,

        plugins: {

    legend: {
        display: false
    },

    datalabels: {
        anchor: 'end',
        align: 'top',

        color: '#333',

        font: {
            weight: 'bold',
            size: 13
        },

        formatter: function(value) {
            return value + '%';
        }
    }
},

        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});
const complianceCtx = document.getElementById('complianceChart');

new Chart(complianceCtx, {
    type: 'pie',

    data: {
        labels: [
            '10개 이하',
            '11~20개',
            '21개 이상'
        ],

        datasets: [{
            data: [6, 9, 3],

            backgroundColor: [
                '#0D326F',
                '#A40F16',
                '#C0A353'
            ],

            borderWidth: 0
        }]
    },

    plugins: [ChartDataLabels],

    options: {
        responsive: true,

        plugins: {

            legend: {
                position: 'bottom',

                labels: {
                    font: {
                        family: 'Pretendard',
                        size: 13
                    },

                    padding: 20,

                    usePointStyle: true,
                    pointStyle: 'circle'
                }
            },

            datalabels: {
                color: '#ffffff',

                font: {
                    weight: 'bold',
                    size: 14
                },

                formatter: function(value) {
                    return value + '곳';
                }
            }
        }
    }
});
const usabilityCtx = document.getElementById('usabilityChart');

new Chart(usabilityCtx, {
    type: 'bar',

    plugins: [ChartDataLabels],

    data: {
        labels: [
            '평균 주문 단계 수',
            '평균 결제 방식 수'
        ],

        datasets: [{
            label: '평균값',

            data: [6.0, 5.1],

            backgroundColor: [
                '#A40F16',
                '#0D326F'
            ]
        }]
    },

    options: {
        responsive: true,

       plugins: {

    legend: {
        display: false
    },

    datalabels: {
        anchor: 'center',
        align: 'center',

        color: '#fff',

        font: {
            weight: 'bold',
            size: 13
        },
        formatter: function(value) {
                    return value + '개';
                }
    }
},

        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
/* ===== Scroll Animation ===== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

        } else {

            entry.target.classList.remove('show');

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll('.fade-in').forEach(section => {

    observer.observe(section);

});