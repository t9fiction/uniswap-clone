'use client'
import React, { useEffect, useState } from 'react'
import Styles from './Model.module.css'
import images from '../../assests'
import Image from 'next/image'

const Model = ({setOpenModel}) => {
  return (
    <div className={Styles.Model}>
      <div className={Styles.Model_box}>
        <div className={Styles.Model_box_heading}>
          <p>Connect a Wallet</p>
          <div className={`${Styles.Model_box_heading_img} cursor-pointer`}>
            <Image src={images.close} alt="close" width={50} height={50} onClick={() => setOpenModel(false)} />

          </div>
        </div>

        <div className={Styles.Model_box_wallet}>
          <p>Connect Wallet</p>
        </div>
        <p className={`${Styles.Model_box_para} my-2 text-[10px] `}>
          By connecting a wallet, you agree to our Terms of Service and Privacy Policy.
        </p>

      </div>
      
    </div>
  )
}

export default Model
