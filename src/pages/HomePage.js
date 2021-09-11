import React from 'react';

import HomeHeader from '../components/HomeHeader';
import MenuList from '../components/menu-list';

import playIcon from 'images/icon-play.svg';
import chatIcon from 'images/icon-chat.svg';
import lessonIcon from 'images/icon-lessons.svg';
import profileIcon from 'images/icon-profile.svg';
import statisticIcon from 'images/icon-statistic.svg';
import trainingIcon from 'images/icon-training.svg';
import superaIcon from 'images/supera_logo.png';

const menuItemList = [
  {imgSource: playIcon, text: 'JOGAR'},
  {imgSource: statisticIcon, text: 'ESTATÍSTICA'},
  {imgSource: trainingIcon, text: 'TREINAR'},
  {imgSource: profileIcon, text: 'PERFIL'},
  {imgSource: chatIcon, text: 'CHAT'},
  {imgSource: lessonIcon, text: 'LIÇÕES'},
  {imgSource: playIcon, text: 'DESAFIOS'}, // TODO: challengeIcon
];


const HomePage = (props) => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#F56C27', height: '50px', width: '100%', marginBottom: '15px'}}>
        <img src={superaIcon} style={{height: '40px', width: '90px', margin: 'auto'}} />
      </div>
      <HomeHeader userName='Silvio Machado' ipc={23} />
      <br />
      <MenuList menuItemList={menuItemList} />
    </div>
  )
};

export default HomePage;
