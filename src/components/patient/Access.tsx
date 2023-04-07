import React from 'react'

export default function Access() {
  const accessList =[
    '0i30u32495u342959345y349593245345',
    '0i30u32495u342959345y349593245345',
    '0i30u32495u342959345y349593245345',
  ]

  return (
    <div>
      {accessList.map((item)=>{
        return <>
        <h1>{item}</h1>
        </>
      })}
    </div>
  )
}

