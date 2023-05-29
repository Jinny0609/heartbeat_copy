# heartbeat
Green marsh tit_team second project : HeartPulseTracker

IOT 기반 정보 대시보드 구현 프로젝트
(환자 생체 데이터 24시간 모니터링 대시보드)

[원래 계획]
애플워치의 건강 정보를 health kit을 이용해 심박수 정보 등을 실시간으로 받아와서 웹에서 처리하려고 하였으나 팀장이 예비군도 가야하고 시간상의 문제로 아래와 같이 개발하게 되었습니다.

[개발 소요 시간]
2주 (5.12 ~ 5.26)

[개발 환경]
mysql,
vscode 원격 터미널 사용,
raspberry pi,
flask web framework

[개발 순서]
1. 라즈베리파이의 GPIO핀을 사용하여 BMP085(대기압 센서) 센서 연결
2. Flask 개발 환경 구축
3. vscode 원격 사용을 위한 환경 구축 및 라이브러리 설치
4. MySQL Connect
5. 차트 생성을 위한 코드 작성
6. 데이터 측정값 확인

[라즈베리파이의 GPIO핀을 사용하여 BMP085(대기압 센서) 센서 연결]
![image](https://github.com/Jinny0609/heartbeat/assets/71204918/096fbcd3-670e-4b43-8a2f-ec0e67fa5ff9)

[ERD]
![image](https://github.com/Jinny0609/heartbeat/assets/71204918/acf4c423-7809-42e9-85d5-7c7376636e2f)

[Mysql에 실시간으로 데이터 저장]
![image](https://github.com/Jinny0609/heartbeat/assets/71204918/f722f906-59cb-4a7b-98ae-78d53c381da3)

[프로젝트 완성본]
![image](https://github.com/Jinny0609/heartbeat/assets/71204918/46e73072-8f0e-44cf-bd4f-861f3f33d5b3)

[개발 후기]
진호준 : 
예비군으로 3일 자리를 비우는 바람에 좀 더 많은 기능과 아이디어를 제공하지 못해서 팀원들에게 미안합니다.
health kit 권한을 부여받아서 건강정보나 신체정보를 받아오는것 까진 성공했으나 애플리케이션을 통해 애플워치에서 실시간으로 어떻게 보내는지가 문제였네요.
그래도 앱만드는게 재미는 있었습니다.

김규선 : 

김주윤 : 
