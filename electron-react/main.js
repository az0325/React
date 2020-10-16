const { app, BrowserWindow, ipcMain, BrowserView, shell, net } = require("electron")
const path = require("path");
const { session } = require('electron')
const http = require('http')
const express = require('express')()
const cookieParser = require("cookie-parser")
const { createProxyMiddleware } = require('http-proxy-middleware')
const httpProxy = require('http-proxy');
const { runInNewContext } = require("vm");

express.listen(3001)
// http.createServer((res, req) => {
//     proxy.web(req, res, { target: 'http://dev.wehagot.com' });
// })
// express.listen(3001)
// appServer.use('/', proxy('http://dev.wehagot.com', {
//     proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
//       proxyReqOpts.headers['cookie'] = 'locale=ko; _ga=GA1.2.25191625.1594253657; _gid=GA1.2.145365850.1594253657; _gat=1; AUTH_A_TOKEN=xmFtFkZbnnbPoQtl6UeUSbpsIXIb9s; AUTH_R_TOKEN=wosHdwx1znY5l4wdM3ZpZlpdSER7B4; wehago_s=313920826066322287273693270202585526914; h_selected_company_no=26928; cell_company_no=26928; h_portal_id=zcvfcat; h_selected_company_code=biz202003200000084; h_selected_employee_no=306054';
//       return proxyReqOpts;
//     }
// }));        
express.use(
    createProxyMiddleware({
        target: 'http://dev.wehagot.com/',
        changeOrigin: true,
        onProxyRes: (proxyRes, req, res) => {
            res.cookie('COOKIE', 'DEL')
            res.cookie("CHANGE", 'DOMAIN' , {domain: ".wehago.com"})
        },
        onProxyReq: (proxyReq, req, res) => {

        },
        onProxyReqWs: (proxyReq, req, socket, options, head) => {
    
          }
    }),
)

let win;
let view;

const createWindow = () => {
    win = new BrowserWindow({
        width: 1340,
        height: 800,
        webPreferences: {
            // 2.
            // 웹 애플리케이션을 데스크탑으로 모양만 바꾸려면 안 해도 되지만,
            // Node 환경처럼 사용하려면 (Node에서 제공되는 빌트인 패키지 사용 포함)
            // true 해야 합니다.
            nodeIntegration: true,
            preload: path.join(__dirname, "electron/preload.js"),
        }
    })

    // window.ipcRenderer = require("electron").ipcRenderer


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
app.on('ready', () => {
    createWindow()
})

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

ipcMain.on('dialog', (e, data) => {
    createDialog(data, { x: 50, y: 70, width: 800, height: 800 })
})

ipcMain.on("link", () => {

    // express.use((req, res, next) => {
    //     res.cookie('cookies', 'delicious')
    //     res.redirect('https://www.google.com')
    //     // next();
    // })
    
// express.post('/', (req, res) => {
//   res.cookie('favorite', "cookie");
//   res.redirect('https://www.google.com')
// });

    // express.post('https://www.google.com',function(req,res){
    //     res.cookie('cookies', 'delicious')
    //     res.redirect('https://www.google.com')
    //   });

    // http.createServer((req, res) => {
    //     console.log("req", req.url)
    //     res.writeHead(200, {'Set-Cookie' : 'Cookies=delicious'})
    //     res.end("hoeeee")

    // })
    // .listen(3001, () => {
        shell.openExternal('http://localhost:3001')
    // })

    // const appServer = require('express')()
    // const http = require('http')
    // const proxy = require('express-http-proxy');

})

const createDialog = (data, param) => {
    view = new BrowserView({
        webPreferences: {
            // 2.
            // 웹 애플리케이션을 데스크탑으로 모양만 바꾸려면 안 해도 되지만,
            // Node 환경처럼 사용하려면 (Node에서 제공되는 빌트인 패키지 사용 포함)
            // true 해야 합니다.
            nodeIntegration: true,
            preload: path.join(__dirname, "electron/preload.js"),
        }
    })

    if (data.status) {
        win.setBrowserView(view)
        view.setBounds(param)
        // view.webContents.loadURL('http://localhost:3000/dialog')
        // view.webContents.loadURL('https://electronjs.org')
    } else {
        win.setBrowserView(null)
    }
}