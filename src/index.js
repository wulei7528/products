import dva from 'dva'
import router from './router'
import 'antd/dist/antd.css'

const app = dva()

app.model(require('./models/products').default)

app.router(router)

app.start('#root')
