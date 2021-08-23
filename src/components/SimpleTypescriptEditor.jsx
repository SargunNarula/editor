import React,{Component} from 'react';
import MonacoEditor from 'react-monaco-editor'

/*const code =
`

// Define Typescript Interface Employee
interface Employee {
    firstName: String;
    lastName: String;
    contractor?: Boolean;
}

// Use Typescript Interface Employee. 
// This should show you an error on john 
// as required attribute lastName is missing
const john:Employee = {
    firstName:"John",
    // lastName:"Smith"
    // contractor:true
}

`*/

const code = `from os import system, name
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

export class SimpleTypescriptEditor extends Component {


    constructor(props){
        super(props);
        this.state = {
            code
        }
    }

    onChange(newValue, e) {
        // console.log('onChange', newValue, e);
    }

    render() {
        return (
            <MonacoEditor
                width="600"
                height="800"
                language="python"
                theme="vs-dark"
                defaultValue=''
                value={this.state.code}
                onChange={this.onChange}
            />
        )
    }
}
