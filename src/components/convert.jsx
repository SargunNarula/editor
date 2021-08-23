import React,{Component} from 'react';
import MonacoEditor from 'react-monaco-editor'


const default_code = `from os import system, name
from time import sleep
class Node:
    num_nodes = 0

    def __init__(self, name, next_element=None):
        self.name = name
        self.next = next_element
        Node.num_nodes += 1

    def getname(self):
        return self.name

    def getnext(self):
        return self.next

    def setname(self, name):
        self.name = name

    def setnext(self, link):
        self.next = link
        
class Linked_List:
    def __init__(self, node=None):
        self.head = node
        self.tail = node
        self.choice = {"1": self.print_list,
                       "2": self.length,
                       "3": self.add_operations,
                       "4": self.del_operations,
                       "5": self.find,
                       "6": self.change_data
                       }`

class SimpleEditor extends Component {


    constructor(props){
        super(props);
        this.state = {
	    code: default_code,
	    width: props.width
        }
    }

    onChange(newValue, event) {
        console.log('onChange', newValue, event);
    }

    render() {
        	
	    console.log("width -",this.state.width)
        return (
            <MonacoEditor
                width={this.state.code}
                //width="600"
		height="800"
                language="typescript"
		theme="vs-dark"
		options={{
		       selectOnLineNumbers: true,
                   	minimap:{ enabled:"false" }
			}}
                defaultValue=''
                value={this.state.code}
                onChange={this.onChange}
            />
        )
    }
}

export default SimpleEditor
