import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Counter from './exersice/counter.jsx'
import Textbox from './exersice/Textbox.jsx'
import Form from './exersice/Form.jsx'
import SerachCountry from './exersice/SerachCountry.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <SerachCountry/>
  </React.StrictMode>,
)
