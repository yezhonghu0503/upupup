import collectionData from './collection.json'
import './collection.css'

export default function collection(){
    let {log} = console;
    let [items] = [[]];

    //数据处理
    Object.keys(collectionData).forEach(v =>{
        let o = {};
        o[v] = collectionData[v]
        items.push(o[v])
    })
    
    
    let listitems = items.map((item,idx)=>
        <div key={idx} className='collection'>
            <img className='collection_logo' src={item.logo} alt=''></img>
            <div>{item.name}</div>
        </div>
        
    )
    
    return (
        <div className='main'>{listitems}</div>
        
    )
}