import { ToyReact, Component } from './ToyReact.js';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
      }
      
    render() {
      return (
        <button className="square" onClick={() => this.setState({value:'X'})}>
          {this.props.value}
        </button>
      );
    }
   }

   class Board extends Component {  
    renderSquare(i) {
      return <Square value={i} />;
    }

    render(){
        return (
            <div>
              <div className="status">{status}</div>
              <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
              </div>
              <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
              </div>
              <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
              </div>
            </div>
          );
    }
}



class Mycomponent extends Component {
    render() {
        return <div>
            <span>hello</span>
            <span>Enhoo</span>
            <div>{this.children}</div>
        </div>
    }
}

let a=<Board/>

// let a = <Mycomponent name='a' id='ida'>
//     <div>123</div>
// </Mycomponent>

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