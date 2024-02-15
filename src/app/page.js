
'use client'

import React, { useState } from 'react';

function Menu() {
  const [menuSelect, setMenuSelect] = useState('')

  const handleHomeClick = () => {
    setMenuSelect('home');
  }

  const handleGymClick = () => {
    setMenuSelect('gym')
  }

  if (menuSelect == '' ) {
    return (

      <main>
        <h1>Select where you are going to have your workout.</h1>
        <button onClick={handleHomeClick}>Home</button><br></br>
        <button onClick={handleGymClick}>Gym</button>
      </main>

    );

  } else {

    return <SecondMenu location = {menuSelect} />

  }
}

function SecondMenu({location}){
  const [ bodyPartSelect, setbodyPartSelect] = useState('')

  const handleArmsClick = () => {
    setbodyPartSelect('arms')
  };

  const handleLegsClick = () => {
    setbodyPartSelect('legs')
  };

  const handleFullBodyClick = () => {
    setbodyPartSelect('full_body')
  };



  if (bodyPartSelect == '') {
    return (
      <main>
        <h1>Nice! You want to workout at {location}. <br></br> Which body part would you like to workout?</h1>
        <button onClick={handleArmsClick}>Arms</button><br></br>
        <button onClick={handleLegsClick}>Legs</button><br></br>
        <button onClick={handleFullBodyClick}>Full Body</button>

        {/* <button onClick={handleRestart}>Restart Selection</button> */}
      </main>
    );
  } else {
    return (
      <ArmHomeMenu />
    )
  }
}


function ArmHomeMenu() {

  const [styleColor, setStyleColor] = useState('');

  const [finishedCounter, setFinishedCounter] = useState(0)

  const markAsDone = (event) => {

    if (event.currentTarget.value === "unfinished") {
      setStyleColor('blue')
      event.currentTarget.style = `background-color: ${styleColor}`
      event.currentTarget.value = "finished"
    } else {
      setStyleColor('none')
      event.currentTarget.value = "unfinished"
      event.currentTarget.style = `background-color: ${styleColor}`
    }

  };

  return (
    <>
      <h1>Alright! Here is Your Workout.</h1>

      <button value="unfinished" onClick= {markAsDone}>Tricep Extension x 10</button><br></br>
      <button value="unfinished" onClick= {markAsDone}>Shoulder Press x 13</button><br></br>
      <button value="unfinished" onClick= {markAsDone}>Front Raises x 10</button><br></br>
      <button value="unfinished" onClick= {markAsDone}>Lateral Raises x 12</button><br></br>

    </>
  )
}

export default function Home() {


  return (
    <>
      <div className= "container">
        <header>
          <h1><b>Gym Buddy 🏃 </b></h1>
          <p><b>Think less. Workout More</b></p>
        </header>

        <Menu />
      </div>

    </>
  );
}
