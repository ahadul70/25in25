import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Counter from './exersice/counter.jsx'
import Textbox from './exersice/Textbox.jsx'
import Form from './exersice/Form.jsx'
import SerachCountry from './exersice/SerachCountry.jsx'
import Mapsex1 from './exersice/Mapsex1.jsx'
import Mapsex2 from './exersice/Mapsex2.jsx'
import Loadmore from './exersice/lodemore/Loadmore.jsx'
import TreeView from './compoments/treeNav/TreeView.jsx'
import menus from './compoments/treeNav/data.js'
import Sidebar from './compoments/TreeView2/Sidebar.jsx'
import Qr from './compoments/Qr.jsx'
import Light_dark from './compoments/lights/light_dark.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Light_dark />
  </React.StrictMode>,
)
