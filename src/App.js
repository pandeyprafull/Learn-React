import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import Parent from './components/Parent';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import './components/appStyle.css'
import styles from './components/appStyle.module.css';
import Inline from './components/Inline';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import Fragment from './components/Fragment';
import Table from './components/Table';


function App() {
  return (
    <div className="App">
      {/* <Fragment /> */}
      <Table />
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className = 'error'>Error</h1>
      <h1 className = {styles.success}> Success</h1>
      <Inline /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <Parent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <br />
      <ClassClick /> */}
      {/* <Message /> */}
      {/* <Greet name='Max' originalName='SuperMan' >
        <p>This is the Children Props</p>
      </Greet>
      <Greet name='Devil' originalName='Batman'>
      </Greet>
      <Greet name='Toor' originalName='Exotic Range'> </Greet> */}
      {/* <Welcome name='Toor' originalName='Exotic Range' />
      <Welcome name='Devil' originalName='Batman'/> */}


      {/* <Welcome />
      <Hello /> */}
    </div>
  );
}

export default App;
