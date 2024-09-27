import React from 'react'

const Child  = React.memo(
  ({btn}) => {
  console.log("Re-render child");
  // har click pe render hora hai. jab ki need bhi nahi hai 
  
  return (
    <div>
     <button>
      {btn}
     </button>
    </div>
  )
})

export default Child;
