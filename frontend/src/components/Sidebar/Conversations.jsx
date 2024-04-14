import React from 'react'
import Converstaion from './Converstaion'
import useGetConversation from '../../hooks/getConversation'
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
  const { loading, conversation } = useGetConversation();
  console.log('conversations', conversation)
  return (
    <div className='py-2 flex flex-col overflow-auto'>

      {conversation.map((conversation, idx) => (
        <Converstaion key={conversation._id} conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversation.length - 1}
        />
      ))}


      {loading ? <span className='loading loading-spinner mx-auto' /> : null}

    </div>
  )
}

export default Conversations
