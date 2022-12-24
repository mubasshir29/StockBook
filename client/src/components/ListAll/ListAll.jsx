import React from 'react'
import './ListAll.css'
import AllData from '../../SampleData/AllData'

function ListAll() {
  return (
    <div>
      <div className='searchbox-container'>
        <input className='searchbox' placeholder='Search keyword'></input>
        <button className='search-go'>Go</button>
      </div>
      <div className='table-container'>
        <table className='list-all-table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Asset Name</th>
              <th>Model</th>
              <th>Description</th>
              <th>Vendor</th>
              <th>Serial No</th>
              <th>Status</th>
              <th>Comment</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {AllData.map((entry,index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{entry.name}</td>
                    <td>{entry.model}</td>
                    <td>{entry.description}</td>
                    <td>{entry.vendor}</td>
                    <td>{entry.serial_no}</td>
                    <td>{entry.status}</td>
                    <td>{entry.comment}</td>
                    <td className='actions-container'>
                      <button>E</button>
                      <button>D</button>
                      <button>Checkout</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          
        </table>
      </div>
    </div>
  )
}

export default ListAll