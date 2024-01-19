import React, { useEffect, useState } from 'react'
import axios from 'axios';
import WorkoutDetails from '../components/WorkoutDetails';

function Home() {
    const [workouts,setWorkouts]=useState(null);

    useEffect(()=>{
        const fetchWorkout=async()=>{

           
                const response = await fetch('http://localhost:4000/api/workouts/');
                const json = await response.json();
                console.log(response)
    
                if (response.ok) {
                    setWorkouts(json);
                } else {
                    console.error('Error fetching workouts:', json);
                }
            }

            fetchWorkout()

    },[])


    

  return (
    <div className='home'>
        <div className="workouts">

            {/* if workout exist and this map method run..but its null this code not work */}
            {workouts && workouts.map((workout)=>(
                <WorkoutDetails key={workout._id} workout={workout}/>
            ))}
        </div>
    </div>
  )
}

export default Home