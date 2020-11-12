import userImg from '../images/nesby.png';
import videoChatIcon from '../images/chat-icon.svg';
import chatIcon from '../images/message-icon.svg';
import friendsIcon from '../images/friends-icon.svg';
import favoriteIcon from '../images/favorite-icon.svg';
import filledFavoriteIcon from '../images/filled-favorite-icon.svg'
import bellIcon from '../images/bell-icon.svg';
import searchIcon from '../images/search-icon.svg';
import microphoneIcon from '../images/microphone.svg';
import happyIcon from '../images/happy.svg';
import paperClipIcon from '../images/paper-clip.svg';
import cameraIcon from '../images/camera.svg';
import sendIcon from '../images/send.svg';

function FilledChatArea({ chatData }) {
  const { email, id, firstName, lastName, isFavorite } = chatData;
  return (
    <div className="chat-area-wrapper">
      <div className="chat-area-left">
        <div className="chat-top">
          <div className="card-wrapper">
            <img className="top-user-card" src={userImg} height={75} width={75} />
          </div>
          <div className="top-username">{`${firstName} ${lastName}`}</div>
          <div className="online-status"></div>
          <div className="top-actions">
            <img src={searchIcon} height={18} width={18} />
            <img src={favoriteIcon} height={18} width={18} />
            <img src={bellIcon} height={18} width={18} />
          </div>
        </div>
        <div className="message-area"></div>
        <div className="footer">
          <div className="message-input-container">
            <img src={microphoneIcon} height={16} width={16} />
            <input
              type="text"
              placeholder="Write something"
            />
            <div className="icons-right">
              <img src={paperClipIcon} height={16} width={16} />
              <img src={happyIcon} height={16} width={16} />
              <img src={cameraIcon} height={16} width={16} />
            </div>
          </div>
          <div className="send-button">
            <img src={sendIcon} height={25} width={25} />
          </div>
        </div>
      </div>
      <div className="chat-area-right">
        <div>
          <img className="user-card" src={userImg} height={100} width={100} />
          <div className="username">{`${firstName} ${lastName}`}</div>
          <div className="user-id">{`ID: ${id}`}</div>
          <div className="user-details">{`${email}`}</div>
        </div>

        <div className="chat-options">
          <div>
            <div className="icon-container">
              <img src={chatIcon} height={50} width={50} />
            </div>
            <p>{'Chat'}</p>
          </div>
          <div className="border-region"></div>
          <div>
            <div className="icon-container">
              <img src={videoChatIcon} height={50} width={50} />
            </div>
            <p>{'Video Chat'}</p>
          </div>
        </div>
        <div className="user-actions">
            <div className="user-action">
              <img src={friendsIcon} height={20} width={20} />
              <span>{'View Friends'}</span>
            </div>
            <div className="user-action">
              <img src={isFavorite ? filledFavoriteIcon : favoriteIcon} height={20} width={20} />
              <span>{isFavorite ? 'Unfavorite' : 'Favorite'}</span>
            </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

function EmptyChatArea() {
  return (
    <div className="empty-chat-area-wrapper">
      <div className="empty-chat-header">{'Select a conversation'}</div>
      <p>{'Start by selecting a conversation or'}</p>
      <p>{'searching for someone specific'}</p>
    </div>
  );
}

function ChatArea({ activeChat }) {
  const data = activeChat;
  if (data) {
    return <FilledChatArea chatData={data} />
  }
  return <EmptyChatArea />;
}

export default ChatArea;
