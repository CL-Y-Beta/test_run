'use client'
import Link from 'next/link';
import { useRouter } from 'next/router';


function HomeFullBodyWorkout() {
  return (
    <>
      <p><b>This is the Home FullBodyWorkout</b></p>


    <Link href="/">Restart</Link>
    </>


  )
}


function HomeLegsWorkout() {
  return (
    <>
      <p><b>This is the Home Legs</b></p>


    <Link href="/">Restart</Link>
    </>
  )
}


function HomeArmsWorkout() {
  return (
    <>
      <p><b>This is the Home Arms</b></p>


    <Link href="/">Restart</Link>
    </>
  )
}

function GymArmsWorkout() {
  return (
    <>
      <p><b>This is the Gym Arms</b></p>


    <Link href="/">Restart</Link>
    </>
  )
}

function GymLegsWorkout() {
  return (
    <>
      <p><b>This is the Gym Legs</b></p>


    <Link href="/">Restart</Link>
    </>
  )
}

function GymFullBodyWorkout() {
  return (
    <>
      <p><b>This is the Gym Full Body</b></p>


    <Link href="/">Restart</Link>
    </>
  )
}



export default function WorkoutList() {

  const router = useRouter();

  const whichWorkout = () => {
    const {data} = router.query;
    return data;
  };

  console.log(whichWorkout())

    if (whichWorkout() === 'fullbodyhome') {
      return <HomeFullBodyWorkout />
    }

    if (whichWorkout() == 'legshome') {
      return <HomeLegsWorkout />
    }

    if (whichWorkout() == 'armshome') {
      return <HomeArmsWorkout />
    }

    if (whichWorkout() == 'armsthe gym') {
      return <GymArmsWorkout />
    }


    if (whichWorkout() == 'fullbodythe gym') {
      return <GymFullBodyWorkout />
    }

    if (whichWorkout() == 'legsthe gym') {
      return <GymLegsWorkout />
    }



}
