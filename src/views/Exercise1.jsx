import IdCard from '../components/IdCard'
import data from '../assets/data/data.json'

function Exercise1() {
  return (
    <div>
        <h2>Exercise 1: </h2>
        {data.map((item, index)=>{
            let bdate = new Date(item.birth).toDateString();
            return <IdCard firstName={item.firstName} lastName={item.lastName} gender={item.gender} birth={bdate} picture={item.picture} height={item.height} key={index}/>
        })} 
    </div>
  )
}

export default Exercise1