Chart.defaults.font.family = 'Pretendard';
Chart.defaults.color = '#333';
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.pointStyle = 'circle';

const accessibilityCtx = document.getElementById('accessibilityChart');

new Chart(accessibilityCtx, {
    type: 'bar',

    data: {
        labels: ['대면 주문 안내', '낮은 화면', '확대 기능'],

        datasets: [
            {
                label: '식품',

                data: [85.7, 71.4, 85.7],

                backgroundColor: '#A40F16'
            },

            {
                label: '음료',

                data: [14.3, 28.6, 28.6],

                backgroundColor: '#0D326F'
            }
        ]
    },

    options: {
        responsive: true,

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
    type: 'doughnut',

    data: {
        labels: [
            '이용방법 안내',
            '음성 안내',
            '뒤로가기 버튼',
            '글자 크기 기준 충족'
        ],

        datasets: [{
            data: [16.7, 44.4, 94.4, 77.8],

            backgroundColor: [
                '#A40F16',
                '#0D326F',
                '#C0A353',
                '#6B7280'
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
                    return value + '%';
                }
            }
        }
    }
});
const usabilityCtx = document.getElementById('usabilityChart');

new Chart(usabilityCtx, {
    type: 'bar',

    data: {
        labels: [
            '주문 단계 수',
            '결제 방식 수',
            '첫 화면 메뉴 수'
        ],

        datasets: [
            {
                label: '음료',

                data: [6.10, 5.90, 13.90],

                backgroundColor: '#0D326F'
            },

            {
                label: '식품',

                data: [5.88, 4.00, 12.38],

                backgroundColor: '#A40F16'
            }
        ]
    },

    options: {
        responsive: true,

        plugins: {
            legend: {
                labels: {
                    font: {
                        family: 'Pretendard'
                    }
                }
            }
        },

        scales: {
            y: {
                beginAtZero: true,

                ticks: {
                    font: {
                        family: 'Pretendard'
                    }
                }
            },

            x: {
                ticks: {
                    font: {
                        family: 'Pretendard'
                    }
                }
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