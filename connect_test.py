from flask.json import jsonify
import mysql.connector
import Adafruit_BMP.BMP085 as BMP085
import time
import threading
from flask import Flask, render_template
from flask import Request


# MySQL 서버 연결 설정
db = mysql.connector.connect(
    host='192.168.30.8',
    user='Jin',
    password='0712',
    database='kakao'
)

cursor = db.cursor()

# BMP180 센서 객체 생성
sensor = BMP085.BMP085(busnum=1)

# Flask 애플리케이션 생성
app = Flask(__name__)

# 서버에 값 전달
@app.route('/update_sensor_data')
def update_sensor_data():
    temp = sensor.read_temperature()
    pressure = sensor.read_pressure()
    altitude = sensor.read_altitude()
    sensor_data = {'temp': temp, 'pressure': pressure, 'altitude': altitude}
    return jsonify(sensor_data)

# 루트 경로 처리
@app.route('/')
def home():
    return render_template('html/home.html')

# 데이터 측정 및 저장 함수
def measure_and_store_data():
    try:
        temp = sensor.read_temperature()
        pressure = sensor.read_pressure()
        altitude = sensor.read_altitude()
        timestamp = time.strftime('%Y-%m-%d %H:%M:%S')

        # 데이터베이스에 데이터 저장
        query = "INSERT INTO sensor_data(temp, pressure, altitude, timestamp) VALUES (%s, %s, %s, %s)"
        values = (temp, pressure, altitude, timestamp)
        cursor.execute(query, values)
        db.commit()
        print("데이터 저장 완료")

    except mysql.connector.Error as error:
        print("MySQL 예외 발생:", error)

# 초기 데이터 저장
measure_and_store_data()

# 추가적인 데이터 측정 및 저장
@app.before_first_request
def start_measurement():
    def run_measurement():
        while True:
            measure_and_store_data()
            time.sleep(5)  # 5초 간격으로 측정

    measurement_thread = threading.Thread(target=run_measurement)
    measurement_thread.start()

# Flask 애플리케이션 실행
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

# 연결 종료
cursor.close()
db.close()