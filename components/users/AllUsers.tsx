import React from 'react'
import GeoChart from './GeoChart'
import UsersTable from './UsersTable'

const AllUsers = () => {
  return (
    <div className="mt-6 flex flex-col gap-10 " >
        <h2 className="text-2xl font-medium text-gray-700 text-center">Users World Wide</h2>
      <GeoChart />
      <div className='text-gray-400'>
            <UsersTable />
      </div>
    </div>
  )
}

export default AllUsers
