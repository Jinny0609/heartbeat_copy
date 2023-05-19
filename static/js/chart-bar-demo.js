// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example(고도),호준
var ctx = document.getElementById("myAreaChart2");
var myLineChart2 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [],
    }],
  },
  options: {
    animation: {
      duration: 0, // 애니메이션의 지속 시간을 0으로 설정하여 애니메이션을 비활성화합니다.
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: -40,
          max: 40,
          maxTicksLimit: 30
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

//함수를 정의하여 데이터 값 업데이트 및 차트 업데이트를 호출하는 부분을 만듦
function updateChart2() {
  // 서버에 센서 데이터 요청을 보냄
  fetch('http://localhost:5000/update_sensor_data')
    .then(response => response.json())
    .then(data => {
      const newData = data.altitude; // 새로운 데이터
      const labels = myLineChart2.data.labels;
      const datasetData = myLineChart2.data.datasets[0].data;

      // 데이터셋의 데이터 값을 업데이트
      if (labels.length === 5) {
        labels.shift(); // 레이블의 첫 번째 값을 제거
        datasetData.shift(); // 데이터셋의 첫 번째 값을 제거
      }

      labels.push(new Date().toLocaleTimeString()); // 현재 시간 추가
      datasetData.push(newData); // 새로운 데이터 추가

      // 빈 공간이 아닌 경우에만 차트를 업데이트합니다.
        myLineChart2.update();
    });
}

// 일정한 간격으로 updateChart 함수를 호출하는 타이머를 설정 (10초마다)
// setInterval(updateChart2, 500); 기존 바로 시작

  var stopButton = document.getElementById("stopButton");
  var startButton = document.getElementById("startButton");
  var timerId2;

  // 정지 버튼 클릭 시 데이터 업데이트 타이머를 멈춥니다.
  stopButton.addEventListener("click", function() {
    clearInterval(timerId2);
  });

  // 시작 버튼 클릭 시 데이터 업데이트 타이머를 다시 시작합니다.
  startButton.addEventListener("click", function() {
    timerId2 = setInterval(updateChart2, 500);
  });