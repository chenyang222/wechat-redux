//index.js
//获取应用实例
import regeneratorRuntime from '../../libs/runtime';
import { connect } from '../../libs/wechat-weapp-redux';
const app = getApp();

const pageConfig = {
  async onLoad(options) {
    console.info(this)
  }
}

const mapStateToPage = state => ({
  num: 0
})

const mapDispatchToPage = dispatch => {
  return {
    add() {
      dispatch({
        type: "ADD"
      })
    },
    del() {
      dispatch({
        type: "DEL"
      })
    }
  }
}

Page(connect(mapStateToPage, mapDispatchToPage)(pageConfig))
