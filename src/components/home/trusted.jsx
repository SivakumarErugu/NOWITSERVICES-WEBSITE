import React from 'react'
import AvatarStack from '../shared/UI-Elements/AvatarStack';

const Trusted = () => {
    return (
        <div className='p-20 flex justify-center items-center mt-3'>

            <div
                style={{
                    width: `291px`,
                    height: `364px`,
                }}
                className="
        rounded-[16px]
        bg-gradient-to-br from-[#071C3D] to-[#0B4F8A]
        text-white
        flex flex-col justify-center
        gap-1 p-8
      "
            >

                <h1 className='ibm-text text-[48px] font-bold'> Trusted</h1>
                <p className='ibm-text'>by Global Clients</p>
                <AvatarStack />
            </div>
           

        </div>
    )
}

export default Trusted;