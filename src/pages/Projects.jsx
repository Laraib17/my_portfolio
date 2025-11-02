import React from 'react';
import { UseQuery } from '@tanstack/react-query';
import {infinite_spinner} from "../assets/assets";
const get_projects = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}
const projects = () => {
  const {data,isPending,error}= UseQuery({
    queryKey: ['projects'],
    queryFn: () => get_projects
  })
  return (
    <div className='flex'>
      {isPending? <img src={spinner} alt="Loading..." /> : console.error("Error occured")}
    </div>
  )
}
export default projects
