import React, { useState } from 'react'
import { useWorkoutContext } from '../hooks/useWorkout';


function WorkoutForm() {
  const { dispatch } = useWorkoutContext();

    const [title,setTitle]=useState("");
    const [load,setLoad]=useState("");
    const [reps,setReps]=useState("");
    const [err,setErr]=useState(null);
    const [emptyFields,setEmptyFields]=useState([])


    const submitBtnHandler=async (e)=>{
      e.preventDefault();

      const workout ={title,load,reps}

      const response=await fetch('http://localhost:4000/api/workouts',{
        method:'POST',
        body:JSON.stringify(workout),
        headers:{
          "Content-Type":"application/json",
        }
      })

      const json=await response.json()

      if(!response.ok){
        setErr(json.error)
        setEmptyFields(json.emptyFields)
      }

      if(response.ok){
        setTitle("")
        setLoad("")
        setReps("")
        setErr(null)
        setEmptyFields([])
        console.log('New Workout Added',json)
        dispatch({type:'CREATE_WORKOUT',payload:json})
      }
    }

    

  return (
    <form className='create' onSubmit={submitBtnHandler}>
      <h3>Add a New Workout</h3>
      <p><label htmlFor="title">Title: </label><input type="text" id='title' value={title} className={emptyFields.includes('title')?'error':''} onChange={(e)=>setTitle(e.target.value)}/></p>
      <p><label htmlFor="load">Load: </label><input type="text" id='load' value={load} className={emptyFields.includes('load')?'error':''} onChange={(e)=>setLoad(e.target.value)}/></p>
      <p><label htmlFor="reps">Reps: </label><input type="text" id='reps' value={reps} className={emptyFields.includes('reps')?'error':''} onChange={(e)=>setReps(e.target.value)}/></p>

      <br />
      <p><button type="submit">Submit</button></p>
      {err && <div className="error">{err}</div>}
    </form>
  )
}

export default WorkoutForm