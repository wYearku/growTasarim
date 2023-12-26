import React from 'react'
import DesigngCard from './DesigngCard';

const SpecialDesigns = () => {

    const designs = [
        {
            title: 'İnstagram Arkaplan',
            content: 'Arka Planını Değiştir!',
            image: 'https://soft-cocada-675207.netlify.app/images/product-1.png',
            price: '99.99',
            discount: '60'
        },
        {
            title: 'Nesne Değiştirme',
            content: 'Doğum Tarihini',
            image: 'https://soft-cocada-675207.netlify.app/images/product-1.png',
            price: '99.99',
            discount: '60'
        },
        {
            title: 'Lorem',
            content: 'Lorem Ipsum Dolor Sit Amet',
            image: 'https://soft-cocada-675207.netlify.app/images/product-1.png',
            price: '99.99',
            discount: '60'
        },
    ]

  return (
    <div className="lg:w-[80%] mx-auto py-10 px-2">
      <h2 className="border-b-2 border-white pb-2 mb-10 text-5xl font-bold">Özel <span className='text-pink-500'>Tasarımlar</span></h2>
        <div className='grid lg:grid-cols-3 gap-4'>
            {designs.map((design, index) => {
              const { title, content, image, price, discount } = design;

              return <DesigngCard key={index} title={title} content={content} image={image} price={price} discount={discount} />
            })}
        </div>
    </div>
  )
}

export default SpecialDesigns