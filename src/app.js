var React=require("react");
var ReactDOM = require('react-dom');
class ReactPagination extends React.Component{
  render(){
    return(<section><ListItem/><TabsPage /></section>)
  }
}

class ListItem extends React.Component{
  render(){
    return(<table>
      <thead>
        <td>First attribute</td>
      </thead>
      <tbody>
        <tr>
          <td>First value</td>
        </tr>
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
  document.getElementById("story-app")
);
