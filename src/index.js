import dva from 'dva'
import router from './router'
import 'antd/dist/antd.css'

const app = dva()

app.router(router)

app.start('#root')
