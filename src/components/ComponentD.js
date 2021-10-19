import React, { useContext } from 'react';
import DataContext from '../context/DataContext';


function ComponentD() {
  // const dataContext=useContext(DataContext)  //use either this or .consumer
  let style = {
    marginLeft: '20px',
    marginTop: '10px'
  };

  return (
    <div style={style}>
      This is Component D
      <DataContext.Consumer>
          {
            (dataContext)=>(        // round brackets means returns this whole line of code
              <div className="user" style={style}>
              <div>
                {' '}
                username: <b>{dataContext.user}</b>
              </div>
              <div className="avatar">
                <img className="avatar-image" src={dataContext.avatar} alt="avatar" />
              </div>
            </div>
            )
          }
      </DataContext.Consumer>
    
    </div>
  );
}

export default ComponentD;
