# Feature

#### 순서

1. [config](#1-config)  
\- [local_https](#local_https)  
2. [hooks](#2-hooks)  
\- [useClickOutside](#useclickoutside)  
\- [useDebounce](#usedebounce)  
\- [useHandleUpDown](#usehandleupdown)  
\- [useHeight](#useheight)  
\- [useIntersectionObserver](#useintersectionobserver)  
\- [useTimer](#usetimer)

<hr />

### 1. config

#### \- [local_https](./config/local_https.md)  
windows에서 localhost를 https로 사용하기 위한 mkcert 설치 정리(chocolatey)  

### 2. hooks

#### \- [useClickOutside](./hooks/useClickOutside.ts)
지정한 요소 바깥을 클릭했을 때 인자로 전달한 함수를 실행하는 훅

#### \- [useDebounce](./hooks/useDebounce.ts)
지정한 시간 이후에 콜백 함수를 실행하는 훅  
지정한 시간이 지나기 전 입력이 있는 경우 시간 초기화 

#### \- [useHandleUpDown](./hooks/useHandleUpDown.ts)
키보드 위아래 화살표 입력으로 요소 focus를 다루는 훅  
css 속성 적용을 위해 요소 클래스 부여 필요 `.list{N}th`

#### \- [useHeight](./hooks/useHeight.ts)
useDebounce 훅을 이용하여 브라우저 높이를 측정하는 훅  
반응형 디자인에서 사용. 리플로우 고려 

#### \- [useIntersectionObserver](./hooks/useIntersectionObserver.ts)
지정한 요소 포착 시 콜백 함수 실행시키는 IntersectionObserver 훅

#### \- [useTimer](./hooks/useTimer.ts)
기준 min, sec을 받고 남은 시간을 리턴하는 타이머 훅
