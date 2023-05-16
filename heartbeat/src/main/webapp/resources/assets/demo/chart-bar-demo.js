// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [{
      label: "Revenue",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 5312, 6251, 7841, 9821, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

//함수를 정의하여 데이터 값 업데이트 및 차트 업데이트를 호출하는 부분을 만듦
function updateChart() {
  // 새로운 데이터 값
  var newData = [5000, 8312, 4251, 6841, 7221, 11984];

  // 데이터셋의 데이터 값을 업데이트
  myBarChart.data.datasets[0].data = newData;

  // 차트 업데이트
  myBarChart.update();
}

// 일정한 간격으로 updateChart 함수를 호출하는 타이머를 설정 (10초마다)
setInterval(updateChart, 10000);