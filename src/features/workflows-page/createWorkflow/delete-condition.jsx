import React from 'react'

function DeleteCondition({handleDelete, id}) {
  return (
    <div onClick={() => handleDelete(id)} style={{width: 32, height: 32, paddingLeft: 8, paddingRight: 8, paddingTop: 25, paddingBottom: 6, justifyContent: 'center', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
        <div style={{width: 32, height: 32, position: 'relative', borderRadius: 24}}>
        <div style={{width: 32, height: 32, left: 0, top: 0, position: 'absolute', background: 'white', borderRadius: 8, border: '0.75px #40404D solid'}} />
        </div>
        <div style={{width: 16, height: 16, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
        <div style={{width: 16, height: 16, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div style={{width: 16, height: 16, position: 'relative'}}>
                <div style={{width: 9, height: 1, left: 3.50, top: 7.50, position: 'absolute', background: '#40404D'}}></div>
                <div style={{width: 16, height: 16, left: 0, top: 0, position: 'absolute', opacity: 0}}></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default DeleteCondition