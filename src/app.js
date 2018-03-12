import React from 'react'
import ReactDOM from 'react-dom'

import Game from './components/Game'

import 'normalize.css/normalize.css'
import './styles/styles.scss'

let eat = new Event('eat');
let walk = new Event('walk');
let run = new Event('run');
let die = new Event('die');
let idle = new Event('idle');

//document.dispatchEvent(eat);
//document.dispatchEvent(walk);
//document.dispatchEvent(run);
//document.dispatchEvent(die);
//document.dispatchEvent(idle);

ReactDOM.render(<Game />, document.getElementById('root'));