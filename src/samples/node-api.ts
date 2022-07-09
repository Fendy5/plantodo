import { lstat } from 'fs/promises'
import { cwd } from 'process'
import { ipcRenderer } from 'electron'
import { useUserStoreWithOut } from "@/store/modules/user"


// Usage of ipcRenderer.on
ipcRenderer.on('main-process-message', async (_event, ...args) => {
  console.log('[Receive Main-process message]:', ...args)

  ipcRenderer.on('set-userinfo', (event, args) => {
    const store = useUserStoreWithOut()
    store.userInfo = JSON.parse(args)
  })
})

window.toggleLoginWindow = (userInfo) => {
  ipcRenderer.send('login-window', JSON.stringify(userInfo))
}

lstat(cwd()).then(stats => {
  console.log('[fs.lstat]', stats)
}).catch(err => {
  console.error(err)
})
