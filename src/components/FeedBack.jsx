import React from 'react'
import CommentCard from './CommentCard'

const FeedBack = () => {
    
    const comments = [
        {
            content: 'Gerçekten Işini Çok Iyi Yapıyor. Şahsen Ben Çok Beğendim. 10 Numara',
            username: 'İrem AKSEL',
            rate: '4.5',
            image: 'https://soft-cocada-675207.netlify.app/images/avatar-1.png'
        },
        {
            content: 'Youtube Kapak Fotoğrafı Satın Aldım. Youtubea Başlayacaklar Için Öneririm Halikulede Bi Site.',
            username: 'Atakan BUCAKLI',
            rate: '5',
            image: 'https://soft-cocada-675207.netlify.app/images/avatar-2.png'
        },
        {
            content: 'Kardeşim Helal Olsun Sana. Eline Sağlık Gayet Güzel Bir Çalışma Olmuş.',
            username: 'Ata ALTINOK',
            rate: '5',
            image: 'https://soft-cocada-675207.netlify.app/images/avatar-3.png'
        },
    ]

  return (
    <div className="lg:w-[80%] mx-auto py-10 px-2">
      <h2 className="mb-10 text-5xl font-bold">Müşteri <span className='text-[#ffba08]'>Memnuniyeti</span></h2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {comments.map((comment, index) => {
                const { content, image, rate, username} = comment

                return <CommentCard key={index} content={content} image={image} rate={rate} username={username} />
            })}
        </div>
    </div>
  )
}

export default FeedBack