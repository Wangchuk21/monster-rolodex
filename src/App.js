//import logo from './logo.svg';
import './App.css';
import { SearchBox } from './component/searchBox/SearchBox.component';
import {Component} from 'react';
import { CardList } from './component/CardList/CardList.component';



class App extends Component{
  constructor() {
    super();

    this.state={
      monster:[],
      searchField:''
    };

   // this.changeHandler=this.changeHandler.bind(this)
  }

  /*changeHandler(e){
     this.setState({searchField : e.target.value})*/
  
  changeHandler = e =>{
    this.setState({searchField :e.target.value})
  }  

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users => this.setState({monster : users}));
  }

  render() { 
    //filters
    const {monster,searchField}=this.state
    const filteredMonster = monster.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
      
    

    return (
      <div className='App'> 

      <h1>Monster rolodex</h1>
          <SearchBox 
              placeholder='search monster'
              changeHandler={this.changeHandler} 
          />
        <CardList monster={filteredMonster}/>

      </div>
    )
  }
}

export default App;
