import logo from './logo.svg';
import './App.css';
import First from './components/First'
import Classfirst from './components/Classfirst';
import StateDemo1 from './components/StateDemo1';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import Item from './components/Item';

import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import Fragments from './components/Fragments';
import ParentComponet from './components/ParentComponet'
import RefDemo from './components/RefDemo';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import User from './components/User';
import HCounter from './components/HCounter';
import { CCounter } from './components/CCounter';
import Counter1 from './components/Counter1';
import ComponentC from './components/ComponentC';
// import {UserProvider} from './components/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import ComponentF from './components/ComponentF';
import {UserProvider} from './components/userContext'
import ClassCounter from './components/ClassCounter';
import HooksCounterThree from './components/HooksCounterThree';
import ClassCounterOne from './components/ClassCounterOne'
import HooksCounterOne from './components/HooksCounterOne'
import HookCounter from './components/HooksCounter';
function App() {
  return (
    <div className="App">
     {/* <First name="John" role="dev" />
     <First name="Mary" role="Analyst">
       Analyst is his role
     </First>
     <First name="Jim" role="testing">
       <button>Click</button>
     </First>
     <First name="Bill" role="reviewer">
       <input type="text" value="Email"></input>
     </First> */}
     {/* <Classfirst name="Bill" role="reviewer">
      <input type="text" value="Email"></input>
     </Classfirst> */}

     {/* <StateDemo1></StateDemo1> */}

     {/* <Counter></Counter> */}
     {/* <FunctionClick></FunctionClick> */}

     {/* <EventBind></EventBind> */}

     {/* <ParentComponent></ParentComponent> */}

     {/* <UserGreeting></UserGreeting> */}
     {/* <Item></Item> */}

     {/* <Stylesheet primary={true}></Stylesheet>
     <Inline></Inline> */}

     {/* <Form></Form> */}
     {/* <LifeCycleA></LifeCycleA> */}
     {/* <Fragments></Fragments> */}
     {/* <ParentComponet></ParentComponet> */}
     {/* <RefDemo></RefDemo> */}

     {/* <PortalDemo></PortalDemo> */}

     
    {/* <ErrorBoundary>
     <Hero heroName="Batman"></Hero>
     <Hero heroName="Superman"></Hero>
     {/* <Hero heroName="Joker"></Hero> */}
    {/* </ErrorBoundary> */} 

    {/* <CCounter></CCounter>
    <HCounter></HCounter>
    {/* <User name={()=>'John'} /> */}
    {/* <User name={(isLoggedIn)=>isLoggedIn ? 'John': 'Guest'} /> */} 
    {/* <Counter1 render={(count, incrementCount) => <CCounter count={count} incrementCount={incrementCount} />} /> */}
    {/* <UserProvider value="John">
      <ComponentC></ComponentC>
    </UserProvider> */}

    {/* <PostList></PostList> */}
    {/* <PostForm></PostForm> */}
{/* 
    <UserProvider value="Conext Value">
      <ComponentC></ComponentC>
    </UserProvider> */}

    {/* <PostList></PostList> */}

    {/* <PostForm></PostForm> */}
    {/* <ClassCounter></ClassCounter> */}
    {/* <HookCounter></HookCounter> */}
    {/* <HooksCounterTwo></HooksCounterTwo> */}
    {/* <HooksCounterThree></HooksCounterThree> */}
    <ClassCounterOne></ClassCounterOne>
    {/* <HooksCounterOne></HooksCounterOne> */}
    </div>
  );
}

export default App;
