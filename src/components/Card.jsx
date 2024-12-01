// import React from 'react';

function Card({Title,Description,Image_src}) {
    return (
        <div className={'flex flex-col items-center bg-white-500 rounded-md  '}>
            <img src={Image_src} alt={""} width={"120px"} height={"50px"}
                 className={'object-contain border-8 border-gray-200'}/>
            <div className={'flex flex-col '}>
                <h3 className={'flex justify-center'}>{Title}</h3>
                <blockquote className={'flex justify-center pl-2'}>
                    {Description}
                </blockquote>
            </div>
        </div>
    );
}

export default Card;