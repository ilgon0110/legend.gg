# Legend.gg (League of Legend E-Sport)

## https://legendgg.netlify.app/

### This repository can search specfic legend lol-progammers who retired or just debuted and compare about each others.

- Main Page(HomePage)

- Stat Page

- Comparison Page

- 리그오브레전드 E-Sport 선수들의 연도별 기록을 모아보고, 선수들 끼리 비교할 수 있는 개인 프로젝트입니다.

어려웠던 점 : 첫번째로, 선수들의 기록이나 이미지 등 다양한 리소스들이 필요한데, 오픈API가 없어 모든 데이터를 직접 구축해야했다. 따로 data.ts를 생성하고 배열에 데이터를 모두 입력한 다음 gitignore 처리하였다. 
두번째는 시각적으로 데이터를 표현하는 작업이었다. ApexChart lib을 사용했는데, 데이터마다 백분위 단위가 달라 그래프에 사용되는 값은 적절한 연산을 통해 해결했고, 원본 값을 따로 화면에 출력했다. JS로 데이터를 시각화하는 경험을 할 수 있었다.

