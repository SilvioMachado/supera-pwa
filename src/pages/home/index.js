import React from 'react';

// icons
import playIcon from 'images/icon-play.svg';
import chatIcon from 'images/icon-chat.svg';
import lessonIcon from 'images/icon-lessons.svg';
import profileIcon from 'images/icon-profile.svg';
import statisticIcon from 'images/icon-statistic.svg';
import trainingIcon from 'images/icon-training.svg';
import superaIcon from 'images/supera_logo.png';

import 'css/home.scss';

const Home = () => {
  return (
    <div id='hero-wrapper'>
      <div className='toolbar'>
        <img src={superaIcon} id='toolbar-image'/>
      </div>

      <div id='text'>
        <span id='welcome-text'>Bem vindo, Luiz Moraes!</span>
        <span id='ipc-text'>IPC: 300</span>
      </div>

      <div className='button-wrapper'>
        <div className='btn-row'>
          <div className='square-button'>
            <img src={playIcon} className='btn-icon'/>
            Jogar
          </div>

          <div className='square-button'>
            <img src={trainingIcon} className='btn-icon'/>
            Treinar
          </div>
        </div>

        <div className='btn-row'> 
          <div className='square-button'>
            <img src={statisticIcon} className='btn-icon'/>
            Estatísticas
          </div>

          <div className='square-button'>
            <img src={profileIcon} className='btn-icon'/>
            Perfil
          </div>
        </div>

        <div className='btn-row'>
          <div className='square-button'>
            <img src={chatIcon} className='btn-icon'/>
            Chat
          </div>

          <div className='square-button'>
            <img src={lessonIcon} className='btn-icon'/>
            Lições
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
