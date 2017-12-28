import React from 'react'
import { Link } from 'react-router'
import HomeHeader from '../../components/HomeHeader/index.jsx'
import { connect } from 'react-redux'

class Home extends React.Component {
  render() {
    return (
      <div> 
        <HomeHeader cityName={this.props.userinfo.cityName} />
        <Link to="/list">to list</Link> 
      </div>
    )
  }

  componentDidMount() {
    console.log('kv:', this.props)
  }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)