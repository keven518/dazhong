import React from 'react'
import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStoreKey'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../actions/userinfo'

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      initDone: false
    }
  }
  render() {
    return (
      <div>
        <p>header</p>
        {
          this.state.initDone
            ? this.props.children
            : <div>加载中...</div>
        }
        <p>footer</p>
      </div>
    )
  }
  componentDidMount() {
    // 从localstorerage 里面获取城市

    // localStorage.setItem('USER_CURRENT_CITY_NAME', '黄石')
    let cityName = LocalStore.getItem(CITYNAME)
    console.log('cityName: ', cityName)
    if(!cityName){
      cityName = '北京'
    }

    console.log('cityName: ', cityName)
    
    this.props.userInfoActions.update({
        cityName: cityName
    })

    // 将城市信息存储到Redux 中

    this.setState({
      initDone: true
    })
  }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
      userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)