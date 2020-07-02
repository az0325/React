## Electron
- node.js 기반 프레임워크

#
```javascript
// channel을 수신하고, 새로운 메시지가 도착하면 listener는 listener()로 호출
ipcRenderer.on("", (event, ...args) => {
// channel : String
// listener(event, args...) : function
// ...args : any[] ---> send에서 보낸 ...args를 받음
// event -> IpcRendererEvent
})

// 해당 channel에 arg를 보냄
ipcRenderer.send(channel, ...args)
// channel : String
// ...args : any[]

// ----> .send로 보내고 .on으로 받아서 이벤트 처리
```