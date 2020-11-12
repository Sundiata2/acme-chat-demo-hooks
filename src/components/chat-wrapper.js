import { useState } from 'react';
import data from '../lib/data';
import ChatArea from './chat-area';
import SideBar from './sidebar';

const CHAT_DATA = data;

function ChatWrapper() {

  const [filterText, setFilterText] = useState("");

  const [activeChat, setChatActive] = useState();

  const handleChatClick = d => {
    setChatActive(d);
  };

  const handleFilterTextChange = e => setFilterText(e.target.value.toLocaleLowerCase());

  const filteredData = CHAT_DATA.filter(chatItem => chatItem.firstName.toLowerCase().includes(filterText)
    || chatItem.lastName.toLowerCase().includes(filterText)
  );

  const dataItems = filterText ? filteredData : CHAT_DATA;

  return (
    <div className="wrapper" style={{display: "flex"}}>
      <SideBar
        data={dataItems}
        onSearch={handleFilterTextChange}
        searchText={filterText}
        onSelect={handleChatClick}
        activeChat={activeChat}
      />
      <ChatArea activeChat={activeChat} />
    </div>
  );
}

export default ChatWrapper;


