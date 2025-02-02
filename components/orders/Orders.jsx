import React from 'react'
import RecentOrdersTable from '../RecentOrdersTable'
import RecentPreferance from './RecentPreferance'

const Orders = () => {
  return (
    <div className='p-6 flex flex-col gap-7'>
        <RecentPreferance />
       <div className="shadow-[2px_4px_10px_1px_#c9c9c9] rounded-md overflow-hidden">
            <h2 className="text-2xl font-medium text-gray-700 text-left py-3 px-3">Recent Orders</h2>
              <RecentOrdersTable />
        </div>
    </div>
  )
}

export default Orders
