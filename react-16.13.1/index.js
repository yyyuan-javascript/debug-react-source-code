const {useState, useEffect} = React;

function App() {
const [count, setCount] = useState(0);
const handleScroll = () => {
    setCount(count+1);
};
useEffect(()=>{
    // 每次更新都会被触发
    window.addEventListener('scroll',handleScroll);
return ()=>{
    window.removeEventListener('scroll',handleScroll);
}
},[count]);
return <div className="wrapper">
    <div className="inner">
    {`It's the ${count} times to trigger scroll.`}
    </div>
</div>
}

class App1 extends React.Component {
constructor(props){
    super(props);
    this.state = {
        count: 0
    };
}
handleScroll = () => {
    this.setState({
        count:this.state.count+1,
    });
};
componentDidMount(){
    // 仅触发一次
    window.addEventListener('scroll',this.handleScroll);
    console.log(11111);
};
componentWillUnmount(){
    window.removeEventListener('scroll',this.handleScroll);
}
render(){
   return <div className="wrapper">
    <div className="inner">
    {`It's the ${this.state.count} times to trigger scroll.`}
    </div>
</div>
}
}
ReactDOM.render(<App/>, document.querySelector('#app'));