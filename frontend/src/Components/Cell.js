import React from 'react'

export default function Cell({details, updateFlag, revealcell}) {
    const style = {
        cellStyle: {
            width:40,height:40,backgroundColor:'grey',border:'1px solid white',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontSize:'20px',
            cursor:'pointer'
        },
    }
    // const handleClick = () => {
    //     console.log(details);
    // }

    return (
        <div style={style.cellStyle} onClick={() => {revealcell(details.x, details.y)}} onContextMenu={(e) => updateFlag(e, details.x, details.y)}>
            {details.revealed ? details.value : ""}
        </div>
    )
}