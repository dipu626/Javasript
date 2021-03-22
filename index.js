/* 
import {text, setText} from './myModule.js';

console.log(text);
setText("Text changed");
console.log(text);
*/

import * as T from './myModule.js';

console.log(T.text);
T.setText("Text changed");
console.log(T.text);