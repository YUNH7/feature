# localhost를 https로 사용하기 위해 mkcert 설치하기(chocolatey 설치, windows)  


**powershell 관리자 권한으로 실행**
1. 윈도우 환경에서 mkcert를 설치하기 위해 chocolatey를 먼저 설치하기[(chocolatey: 윈도우용 패키지 매니저)](https://chocolatey.org/)
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```
2. mkcert 설치[(mkcert 레포)](https://github.com/FiloSottile/mkcert)  
```
choco install mkcert
```
3. 로컬을 인증된 발급기관으로 추가하는 작업
```
mkcert -install
```
4. 프로젝트 루트에서 인증서 생성하기 > 성공 시 `cert.pem`, `key.pem` 생성됨  
(레포에 업로드되지 않도록 .gitignore에 `*.pem` 추가하기)
```
mkcert -key-file key.pem -cert-file cert.pem localhost 127.0.0.1 ::1
```


### vite 사용 중인 경우
1. [vite-plugin-mkcert](https://github.com/liuweiGL/vite-plugin-mkcert) 설치
```
npm i -D vite-plugin-mkcert
```
2. vite config 추가
```
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  plugins: [
    mkcert(),
    ...
  ],
```
