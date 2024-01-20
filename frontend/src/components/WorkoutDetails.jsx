import React from 'react'
import { useWorkoutContext } from '../hooks/useWorkout';

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function WorkoutDetails({workout}) {

  const { dispatch }=useWorkoutContext()

  const handleClick =async()=>{
    const response =await fetch('http://localhost:4000/api/workouts/'+workout._id,{
      method:'DELETE',
    })
    const json = await response.json();

    if(response.ok){
      dispatch({type:"DELETE_WORKOUT",payload:json});
    }
  }
  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Load(Kg)</strong>{workout.reps}</p>
        <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
        <span onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails