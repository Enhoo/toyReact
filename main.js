import { ToyReact, Component } from './ToyReact.js';

class Mycomponent extends Component {
    render() {
        return <div>
            <span>hello</span>
            <span>Enhoo</span>
            <div>{this.children}</div>
        </div>
    }
}

let a = <Mycomponent name='a' id='ida'>
    <div>123</div>
</Mycomponent>

//仿制react   ReactDOM.render
ToyReact.render(
    a,
    document.body
);

/*

let a = <div name='a' id='ida'>
    <span>hahahah</span>
    <span>啦啦啦</span>
    <span></span>
</div>
document.body.appendChild(a)


var a = _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("div",
 {
  name: "a",
  id: "ida"
},

_ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("span", null, "hahahah"),
_ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("span", null, "\u5566\u5566\u5566"),
_ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("span", null));

console.log(a);

document.body.appendChild(a);


*/