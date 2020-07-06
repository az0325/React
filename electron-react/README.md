## React + Electron

### Electron 설치
```
yarn add electron electron-builder --dev
yarn add concurrently wait-on cross-env --dev
```

- electron-is-dev : Electron이 개발 환경에서 실행 중인지 확인할 수 있는 패키지
- concurrently : 여러 명령어를 병렬적으로 실행할 수 있게 도와주는 명령어
- wait-on : 특정 포트, 파일, HTTP 자원 등이 활성화될 때까지 기다려주는 크로스 플랫폼 명령어
- cross-env : 프로그램을 CLI 환경에서 실행시킬 때에 Windows, Linux, macOS 등 OS에 관계없이 동일한 문장으로 환경변수를 설정할 수 있게 도와주는 명령어

#

### app : 이벤트 생명주기 제어
```javascript
app.on('[event]' => {
    // 동작
})
```