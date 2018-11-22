import React from 'react'
import { connect } from 'dva'

class Products extends React.PureComponent {
  render () {
    return (
      <div>
        <h2>List of Products</h2>
        <ul>
          {this.props.products.list.map(function(item) {
            return <li>{item.name}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default connect(state => ({
  products: state.products
}))(Products)
