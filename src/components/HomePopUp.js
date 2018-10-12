import React from 'react';
import { Header, Segment } from 'semantic-ui-react'
import '../CSS/FlyUp.css';
import SocialMedia from './SocialMedia'



const HomePopUp = () => (
    <div class="box sb3">
    Follow Me On:
    <SocialMedia/>
      {/* <SocialMedia/> */}
      {/* <div class="circle1"></div> */}
      {/* <div class="circle2"></div> */}
    </div>
)

export default HomePopUp;