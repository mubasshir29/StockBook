import React from 'react'
import './Invoices.css'

function Invoices() {
  return (
    <div>
      <div className='upload-container'>
              <label for='attach'>Upload file</label>
              <input name='attach' type='file' id='attach'></input>
              <button className='upload-btn'>Upload</button>
      </div>
      <table className='invoice-table'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>File</th>
            <th>Dowload</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default Invoices