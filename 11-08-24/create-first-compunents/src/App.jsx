import ReactBtn from "./btnWithReact";
import Dynamic from "./dynamic";
import ReuseComponends from "./reuseComponends";

const App = () => {
  return (
    <div>
      <h1>My First Practice on React</h1>
      <ReactBtn />
      <Dynamic />
      <ReuseComponends />
      <ReuseComponends />
    </div>
  );
};
App();

export default App;
