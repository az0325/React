const { app, BrowserWindow } = require("electron")
const path = require("path")

let win;

const createWindow = () => {
    win = new BrowserWindow({
        width: 1340,
        height: 800,
        webPreferences: {
            // 2.
            // 웹 애플리케이션을 데스크탑으로 모양만 바꾸려면 안 해도 되지만,
            // Node 환경처럼 사용하려면 (Node에서 제공되는 빌트인 패키지 사용 포함)
            // true 해야 합니다.
            nodeIntegration: true
        }
    })

    // 지정한 디렉터리의 index.html을 로드합니다.
    // win.loadFile(path.join(__dirname, 'public/index.html'));
    // win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, 'public/index.html')}`)
    win.loadURL('http://localhost:3000')
    win.webContents.openDevTools() // 개발자 도구 열기

    // 창이 닫기면 호출
    win.on('closed', () => {
        win = null;
    })
}

// 초기화를 끝냈을 때 발생하는 이벤트
app.on('ready', createWindow)

// 모든 윈도우가 종료되었을 때 발생하는 이벤트
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

// 애플리케이션이 활성화 되었을 때 발생하는 이벤트
app.on('activate', () => {
    if (win === null) createWindow();
})