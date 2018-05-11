import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { ExtensionPoint } from 'render'

export default class HomePage extends Component {
  static contextTypes = {
    prefetchPage: PropTypes.func,
  }

  componentDidMount() {
    this.context.prefetchPage('store/product')
  }

  render() {
    return (
      <div className="vtex-dreamstore__container w-100 h-100">
        <ExtensionPoint id="carousel" />
        <ExtensionPoint id="shelf" />
        <ExtensionPoint id="custom" />
      </div>
    )
  }
}
