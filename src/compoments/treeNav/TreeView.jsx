import React from 'react'
import Menu_list from './menu_list'

const TreeView = ({menus=[]}) => {
  return (
      <div className='tree-view-container'>
          <Menu_list list ={menus}/>
      </div>
  )
}

export default TreeView