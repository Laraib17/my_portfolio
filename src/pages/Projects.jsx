import React from 'react';
import { UseQueryOptions } from '@tanstack/react-query';
const {data, isLoading, isError, error} = useQuery({
  queryKey: ['projects'],
  queryFn: fetchProjects,
});
const projects = () => {
  return (
    <div>

    </div>
  )
}

export default projects
