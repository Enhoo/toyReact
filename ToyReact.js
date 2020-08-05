class ELementWrapper {
    constructor(type) {
        this.root = document.createElement(type)
    }
    setAttribute(name, value) {

        if (name.match(/^on([\s\S]+)$/)) {
            let event = RegExp.$1.replace(/^[\s\S]/, e => e.toLowerCase());
            this.root.addEventListener(event, value)
        }
        if (name === 'className') {
            name = 'class'
        }
        this.root.setAttribute(name, value)
    }
    appendChild(vchild) {
        vchild.mountTo(this.root)
    }
    mountTo(parent) {
        parent.appendChild(this.root)
    }
}

class TextWrapper {
    constructor(context) {
        this.root = document.createTextNode(context)
    }
    mountTo(parent) {
        parent.appendChild(this.root)
    }
}

export class Component {
    constructor() {
        this.children = []
        this.props = Object.create(null)
    }
    setAttribute(name, value) {
        if (name.match(/^on([\s\S]+)$/)) {
            console.log(RegExp.$1)
        }
        this[name] = value
        this.props[name] = value

    }
    mountTo(parent) {
        //后期抽离
        let vdom = this.render()
        vdom.mountTo(parent)
    }
    appendChild(vchild) {
        this.children.push(vchild)
    }
    setState(state) {
        let merge = (oldState, newState) => {
            for (const p in newState) {
                if (typeof newState[p] === 'object') {
                    if (typeof oldState[p] !== 'object') {
                        oldState[p] = {}
                    }
                    merge(oldState[p], newState[p])
                } else {
                    oldState[p] = newState[p]
                }
            }
        }
        if (!this.state && state) {
            this.state = {}
        }
        merge(this.state, state)
        console.log(this.state);
        
    }
}

export let ToyReact = {
    createElement(type, attributes, ...children) {
        let element;
        if (typeof type === 'string') {
            element = new ELementWrapper(type)
        } else {
            element = new type

        }
        // //arguments 内部信息 type标签 挂载
        for (let name in attributes) {
            element.setAttribute(name, attributes[name])
        }

        let insertChildren = (children) => {
            for (let child of children) {

                if (typeof child === 'object' && child instanceof Array) {
                    insertChildren(child)
                } else {
                    if (!(child instanceof Component) &&
                        !(child instanceof ELementWrapper) &&
                        !(child instanceof TextWrapper)) {
                        //字符串 创建对应的textnode 节点
                        child = String(child)
                    }
                    if (typeof child === 'string') {
                        //字符串 创建对应的textnode 节点
                        child = new TextWrapper(child)
                    }

                    //child 实为元素
                    element.appendChild(child)
                }
            }
        }
        insertChildren(children)
        return element
    },
    //渲染函数
    render(vdom, element) {
        vdom.mountTo(element)
        // element.appendChild(vdom) //创建 实体dom
    },
}