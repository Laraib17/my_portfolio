import React from 'react';
import { UseQuery } from '@tanstack/react-query';
const get_projects = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}
const projects = () => {
  const {data,isPending,error}= UseQuery({
    queryKey: ['projects'],
    queryFn: () => get_projects('/api/projects')
  })
  return (
    <div>

    </div>
  )
}
export default projects
