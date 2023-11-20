import './App.css';
import DiardyHeader from "./DiardyHeader";
import DiaryEditor from "./DiaryEditor";


function App() {
  return (
    <div className="App">
      <DiardyHeader />
      <DiaryEditor />
    </div>
  );
}

export default App;
//todo 인풋 밸리데이션 체크
//todo 일기장 리스트 만들기