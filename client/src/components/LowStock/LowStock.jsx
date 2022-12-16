import React from 'react'
import './LowStock.css'
import { useContext } from 'react'
import { CountContext } from '../../utils/CountContext'

function LowStock() {
  const countList = useContext(CountContext)
  console.log(countList)
  return (
    <div>
      <div className='lowstock-table-container'>
        <table lowstock-table>
          <thead>
            <tr>
              <td>#</td>
              <td>Category</td>
              <td>Model</td>
              <td>Quantity</td>
            </tr>
          </thead>
          <tbody>
            {countList.map((entry,index) => {
              if(entry.count <5){
                return (<tr key={index}>
                <td>{index+1}</td>
                <td>{entry.category}</td>
                <td>{entry.name}</td>
                <td>{entry.count}</td>
              </tr>)
              }
            }
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LowStock