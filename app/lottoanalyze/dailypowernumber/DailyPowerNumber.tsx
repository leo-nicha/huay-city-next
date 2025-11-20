import React from 'react';

const DailyPowerNumber: React.FC = () => {

    return (
        <div className="w-full p-2 text-center mx-auto max-w-6xl mt-25">
            <p className='text-2xl font-bold pb-2'>เลขกำลัง ประจำวันจันทร์</p>
            <p className='text-2xl  pb-2'>2 - 9 - 1 - 4 - 6 - 5 - 7 - 0</p>
            <p className='text-2xl font-bold pb-2'>เลขเด่นคือเลข 2</p>
            <p className='text-2xl font-bold pb-2'>เลขท้าย 2 ตัว</p>
            <p className='text-2xl pb-2'>29, 17, 65, 54, 66, 16, 75, 26, 72, 47</p>

            <div className="w-full p-2 flex justify-center items-center mx-auto max-w-6xl">
                <img
                    src="https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763562226/dailypowernumber011225_rwlpnr.jpg"
                    alt="AmaHaiLap"
                />
            </div>
        </div>
    );
};

export default DailyPowerNumber;