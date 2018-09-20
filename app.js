//app.js
import regeneratorRuntime from './libs/runtime'
import { createStore } from './libs/redux'
import { Provider } from './libs/wechat-weapp-redux';
import { api } from './libs/api';
//Reducer
import reducers from './redux/reducer/index'
const store = createStore(
  reducers
)

App(Provider(store)({
  globalData: {
    
  },
  async onLaunch () {
    api.user.login()
      .then(()=>{
        console.info(11)
      })
    // 每次 state 更新时，打印日志
    // 注意 subscribe() 返回一个函数用来注销监听器
    const unsubscribe = store.subscribe(() =>
      console.log(store.getState())
    )
  },


}))