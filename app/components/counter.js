import React from 'react'
import Stats from './items/stats'

export default function Counter() {
  return (
    <div className='bg-green-500'>
        <div className='container flex md:flex-row flex-col md:pt-32 pb-28 pt-20 text-white gap-10'>
            <Stats number={15} persentage='+' text='Tahun Pengalaman dalam Industri Tambang Batu Bara' />
            <Stats number={100} persentage='+' text='Penghargaan telah kami dapatkan' />
            <Stats number={25} persentage='%' text='Pengurangan Emisi CO2 dalam dekade Terakhir' />
            <Stats number={500} persentage='+' text='Karyawan yang berdedikasi' />
        </div>
    </div>
  )
}
