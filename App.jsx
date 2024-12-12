import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/atoms/count";
function App() {
  return (
    <div>
      <RecoilRoot>
      <Count />
      </RecoilRoot>
      
    </div>
  );
}
function Count() {
  return (
    <div>
      <CountRendered />
      <Buttons />
    </div>
  );
}
function CountRendered() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      <b>{count}</b>
      <EvenCountRendered></EvenCountRendered>
    </div>
  );
}
function EvenCountRendered(){
  const isEven=useRecoilValue(evenSelector);
  return <div>
    {isEven?null:"it is even"}
  </div>
}
function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
export default App;
