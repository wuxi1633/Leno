import React from 'react'
import injectSheet from 'react-jss'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

const styles = {
  // searchBox: {
  //   width: '2rem',
  //   overflow: 'hidden',
  //   '&:hover': {
  //     width: '100%',
  //   },
  // },
  searchInput: {
    marginLeft: '0.5rem',
    padding: 0,
    transition: 'width 0.3s',
    border: 'none',
    lineHeight: 2,
    fontFamily: 'inherit',
    fontSize: 'inherit',
    background: 'linear-gradient(to right,#e6e1e1e0,#f5f5f5)',
    '&:focus': {
      outline: 0,
      background: 'linear-gradient(to right,#d4d2d2,#f5f5f5)',
    },
  },
}

// const handleSearch = e => {
//   console.log(e.target.text)
// }

@observer
class SearchBox extends React.Component {
  @observable isInputCollapsed = true
  inputValue = ''

  @action
  toggleInputCollapse = () => {
    this.isInputCollapsed = !this.isInputCollapsed
  }
  @action
  handleSearch = e => {
    this.inputValue = e.target.value
    if (e.key === 'Enter') {
      console.log(`search${this.inputValue}`)
      e.target.value = ''
      this.isInputCollapsed = true
    }
  }
  render() {
    const { classes } = this.props
    return (
      <div className={classes.searchBox}>
        <span className="icon-search" onClick={this.toggleInputCollapse} />
        <input
          type="text"
          placeholder="搜索标题和标签"
          onKeyPress={this.handleSearch}
          className={classes.searchInput}
          style={{ width: this.isInputCollapsed ? 0 : '8rem' }}
        />
      </div>
    )
  }
}

export default injectSheet(styles)(SearchBox)

// line-height: 1.8rem;
// width: 80%;
