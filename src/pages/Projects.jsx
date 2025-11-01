import React from 'react';
import { UseQuery } from '@tanstack/react-query';
function get_projects(){
  return fetch('/api/projects').then(res=>res.json())
}
const projects = () => {
  const {data,isPending,error}= UseQuery({
    queryKey: ['projects'],    
    queryFn: get_projects,
  })
  return (
    <div>

    </div>
  )
}

export default projects
