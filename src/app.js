var React=require("react");
var ReactDOM = require('react-dom');
var $=require("jquery");
class ReactPagination extends React.Component{
  render(){
    return(<section><ListItem/><TabsPage /></section>)
  }
}

class Item extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.desc}</td>
      </tr>
    )
  }
}

class ListItem extends React.Component{
  constructor(){
    super();
    this.state={
      items:[
        {id:1,name:"This is the first element",desc:"This is the description of the first element"},
        {id:2,name:"This is the second element",desc:"This is the description of the second element"},
        {id:3,name:"This is the third element",desc:"This is the description of the third element"}
      ]
    }
  }

  _getItems(){
    return this.state.items.map((item)=>{
      return  (<Item key={item.id} name={item.name} desc={item.desc}/>)
    })
  }
  render(){
    let items=this._getItems();
    return(<table>
      <thead>
        <td>First attribute</td>
      </thead>
      <tbody>
        {items}
      </tbody>
      </table>)
  }
}

class TabsPage extends React.Component{
  render(){
    return(<ul><li>1</li></ul>)
  }
}

ReactDOM.render(
  <ReactPagination />,
  document.getElementById("app")
);
