import { useState } from 'react';
import userImg from '../images/nesby.png';
import newChatIcon from '../images/new-chat.svg';
import searchIcon from '../images/search-icon.svg';
import filledStar from '../images/star-filled.svg';
import starIcon from '../images/star.svg';

function ChatListItem({ name, onClickChat, isActive }) {
  const [isFlagged, toggleFlagged] = useState(false);

  const flagConvo = () => toggleFlagged(!isFlagged);

  const chatListClassName = isActive ? "chat-list-item active" : "chat-list-item";
  return (
    <div className={chatListClassName} onClick={onClickChat}>
      <img src={userImg} height={35} width={35} className="user-image" />
      <div className="chat-list-item-center">
        <div className="header-name">{name}</div>
        <p>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidindskj'}</p>
      </div>
      <div className="chat-list-item-right">
        <div className="time">{'1hr'}</div>
        <img src={isFlagged ? filledStar : starIcon} height={16} width={16} onClick={flagConvo.bind(this)} />
      </div>
    </div>
  );
}

function renderItems(data, chatClick, activeChat) {
  const dataItems =  data.map((d, i) => {
    const chatName = d.firstName
    let isActiveChat = activeChat && activeChat.firstName === d.firstName;
    return <ChatListItem name={chatName} onClickChat={chatClick.bind(this, d)} key={i} isActive={isActiveChat} />;
  });

  return <div className="chat-list-wrapper">{dataItems}</div>
}

function SideBar({ data, onSearch, onSelect, searchText, activeChat }) {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-header">
        <div className="sidebar-header-top">
          <div className="search-box">
            <img src={searchIcon} height={14} width={14} />
            <input
              value={searchText}
              onChange={onSearch}
              placeholder="Search or new chat.."
              type="text"
            />
          </div>
          <div className="new-chat-button">
            <img src={newChatIcon} height={16} width={16} />
          </div>
        </div>
        <div className="sidebar-header-bottom">
          <select id="filters" name="filters" className="dropdown" disabled="true">
            <option value="All conversations">{'All conversations'}</option>
            <option value="Flagged conversations">{'Flagged conversations'}</option>
          </select>
          <div className="follow-up-button">
            {'Follow Up'}
          </div>
        </div>
      </div>
      {renderItems(data, onSelect, activeChat)}
    </div>
  );
}

export default SideBar;
