import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import { sendMsgToOpenAI } from './openai';
import {useState} from 'react';

function App() {

  const [input, setInput] = useState("");

  const handleSend = async () => {
    const res =await sendMsgToOpenAI(input);
    console.log(res);
  }


  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
<div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">ChatGPT</span></div>
<button className="midBtn"> <img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
<div className="upperSideBottom">
  <button className="query"><img src={msgIcon} alt="Query" />what is programming ?</button>
  <button className="query"><img src={msgIcon} alt="Query" />How to use an API ?</button>
</div>
        </div>
        <div className="lowerSide">
<div className="listItems"><img src={home} alt="Home" className="listItemsImg"/>Home</div>
<div className="listItems"><img src={saved} alt="Saved" className="listItemsImg"/>Saved</div>
<div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg"/>Upgrade to Pro</div>
        </div>
      </div>
      <div className="main">
<div className="chats">
 <div className="chat">
  <img className='chatImg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam accusamus, repudiandae ad explicabo odit blanditiis modi iste iure similique totam!</p>
 </div>
 <div className="chat bot">
  <img className='chatImg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit molestiae porro mollitia, amet ex rem placeat quam repudiandae cupiditate totam, itaque distinctio pariatur vitae ipsa voluptas aliquam natus rerum quos eius ea quo consequuntur ratione? Amet impedit ea fugiat ad quasi quo pariatur iusto blanditiis cumque, numquam dolorem, sunt error consectetur optio modi quod est minus voluptas. Vitae illo recusandae nostrum debitis consequatur deserunt aspernatur voluptas atque inventore ullam? Accusantium tenetur obcaecati error, nemo modi nesciunt ad voluptatem voluptates unde magnam iure facilis quibusdam aperiam quae, repellendus nam sit tempore delectus nihil ut provident consectetur doloribus perferendis veritatis. Sapiente, sequi.</p>
 </div>
</div>
<div className="chatFooter">
  <div className="inp">
    <input type="text" placeholder='Send a message' value={input} onChange={(e)=>{setInput(e.target.value)}} /><button className="send" onClick={handleSend}><img src={sendBtn} alt="send" /></button>
  </div>
  <p>ChatGPT can make mistakes. Consider checking important information.</p>
</div>
      </div>
    </div>
  );
}

export default App;
