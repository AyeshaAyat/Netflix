import React from 'react'
import Container from '../Container'
import Image from '../Image'
import fbIcon from '../../assets/facebook_icon.png'
import instaIcon from '../../assets/instagram_icon.png'
import twitIcon from '../../assets/twitter_icon.png'
import ytIcon from '../../assets/youtube_icon.png'
const Footer = () => {
  return (


    <>
    <Container>

    <div className='mt-7  ml-25 py-12 '>
        <div className="footerIcons flex gap-x-4.5 ml-19 py-9">
            <Image className='w-[30px] cursor-pointer' imgSrc={fbIcon} imgAlt={fbIcon}/>
            <Image className='w-[30px] cursor-pointer' imgSrc={instaIcon} imgAlt={instaIcon}/>
            <Image className='w-[30px] cursor-pointer' imgSrc={twitIcon} imgAlt={twitIcon}/>
            <Image className='w-[30px] cursor-pointer' imgSrc={ytIcon} imgAlt={ytIcon}/>
        </div>
        <div className="footerTexts flex gap-x-20 ml-20 text-[16px] text-gray-200">
            <ul >
                <li className='pb-2.5 '>Audio Description</li>
                <li className='pb-2.5 '>Investor Relations</li>
                <li className='pb-2.5 '>Legal Notices</li>
            </ul>
            <ul>
                <li className='pb-2.5 '>Help Centre</li>
                <li className='pb-2.5 '>Jobs</li>
                <li className='pb-2.5 '>Cookie Preferences</li>
            </ul>
            <ul>
                <li className='pb-2.5 '>Gift Cards</li>
                <li className='pb-2.5 '>Terms of Use</li>
                <li className='pb-2.5 '>Corporate Information</li>
            </ul>
            <ul>
                <li className='pb-2.5 '>Media Centre</li>
                <li className='pb-2.5 '>Privacy</li>
                <li className='pb-2.5 '>Contact Us</li>
            </ul>
        </div>
        <p className='copyrightTxt text-[16px] text-gray-500 text-left mt-25 ml-13 '> © All rights reserved by Ayat-2025</p>
    </div>

    </Container>
    
    </>
  )
}

export default Footer