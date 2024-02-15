
'use client'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function StartWorkout() {
  const router = useRouter();

  const whichLocation = () => {
    const {data} = router.query;
    return data
  }

  console.log(whichLocation())

  return (
    <>
    <h1>Nice! You want to workout at {whichLocation()}.</h1>
    <p>Which body part would you like to workout?</p>

    <div>
      <Link href={`/workout-list?data=arms${whichLocation()}`}>Arms</Link><br></br>
      <Link href={`/workout-list?data=legs${whichLocation()}`}>Legs</Link><br></br>
      <Link href={`/workout-list?data=fullbody${whichLocation()}`}>Full Body</Link><br></br>
    </div>


    <Link href="/">Restart</Link>
    </>
  )
};
