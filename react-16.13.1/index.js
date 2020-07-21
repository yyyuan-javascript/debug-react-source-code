const {useState, useEffect} = React;

function App() {
const [count, setCount] = useState(0);
const handleScroll = () => {
    setCount(count+1);
};
useEffect(()=>{
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

ReactDOM.render(<App/>, document.querySelector('#app'));