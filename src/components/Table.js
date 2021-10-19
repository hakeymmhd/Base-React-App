export default function Table(props){
    const [selectedRow, setSelectedRow]=useState(0)
    return(
      <div className='WJ-Table'>
        {props.children.map((child)=>{
          return <div onClick={} className={}>{child}</div>
        })}
      </div>
    )
  }