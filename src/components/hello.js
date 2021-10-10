import React from 'react'
const Hello = () => {
//    return (
//       <div>
//          <h1>Hello Jamal!</h1>
//     </div>
//    )
return React.createElement('div', null, React.createElement('h1', null, 'Hello Jamal'))

}

export default Hello