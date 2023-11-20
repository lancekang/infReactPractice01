import {useState} from "react";

const DiaryEditor = ()=> {
    const [state, setState] = useState({
        title:"",
        contents:"",
        createdDate:"",
        userName:"",
        emotion:1
    })

    const onChange = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        setState({
            ...state,
            [name]:value
        })
    }
    return (
        <div className={'diary-controls'}>
            <div className="form-grid-row">
                <label htmlFor={"diaryTitle"}>제목</label>
                <input type="text" id={"diaryTitle"} value={state.title} name={"title"} onChange={onChange}/>
            </div>

            <div className="form-grid-row">
                <label htmlFor={"diaryEmotion"}>감정</label>
                <select id={"diaryEmotion"} value={state.emotion} name={"emotion"} onChange={onChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <div className="form-grid-row">
                <label htmlFor={"diaryName"}>작성자</label>
                <input id={"diaryName"} value={state.userName} name={"userName"} onChange={onChange}/>
            </div>

            <div className="form-grid-row">
                <textarea type="text" id={"diaryContents"} value={state.contents} name={"contents"} onChange={onChange}/>
            </div>
            
            <div className="form-grid-row">
                <button className="form-submit" type="submit">일기 저장하기</button>
            </div>
        </div>
    )
}

export default DiaryEditor