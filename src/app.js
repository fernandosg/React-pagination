var React=require("react");
var ReactDOM = require('react-dom');
var $=require("jquery");
class ReactPagination extends React.Component{
  constructor(){
    super();
    this.state={
      items:[],
      page:1,
      moreItems:false
    };
  }

  _getItemsFromServer(){
    let parent=this;
    /*
    Possible way to get items from server (I NEED TO CREATE A BASIC API)
    $.ajax({
    method:"GET",
    url:parent.props.url,
    success:(response)=>{
    parent.setState({moreItems:response.moreItems});
    parent.setState({items:response.items});
  }
    })
    */
    this.setState({items:[{id:1,name:"This is the first element",desc:"This is the description of the first element"},
    {id:2,name:"This is the second element",desc:"This is the description of the second element"},

    {id:3,name:"This is the third element",desc:"This is the description of the third element"}]});
  }

    _nextItemsFromServer(){
      //Possible way to get the next page of items from server (I NEED TO CREATE A BASIC API)
      /*
      if(this.state.moreItems){
        this.setState({page:this.state.page+1});
        $.ajax({
          method:"GET",
          url:parent.props.url,
          data:{page:this.state.page},
          success:(response)=>{
            parent.setState({moreItems:response.moreItems});
            parent.setState({items:response.items})
          }
        })
      }
      */
    }

    _previousItemsFromServer(){
      /*Possible way to get the next page of items from server (I NEED TO CREATE A BASIC API)
      if(this.state.page>2){
        this.setState({page:this.state.page-1});
        $.ajax({
          method:"GET",
          url:parent.props.url,
          data:{page:this.state.page},
          success:(response)=>{
            parent.setState({moreItems:response.moreItems});
            parent.setState({items:response.items})
          }
        })
      }
      */
    }

    componentWillMount(){
      this._getItemsFromServer();
    }

    render(){
      return(<section><ListItem items={this.state.items}/><TabsPage /></section>)
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
  }

  _getItems(){
    let listItems=this.props.items;
    this.state={
      moreItems:false,
      items:listItems
    }
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
