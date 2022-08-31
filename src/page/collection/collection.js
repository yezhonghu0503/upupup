import collectionData from './collection.json'

export default function collection(){
    let items = [];
    Object.keys(collectionData).forEach(v =>{
        let o = {};
        o[v] = collectionData[v]
        items.push(o)
    })
    console.log(items);
    // let listitems = items.map((item)=>
    //     <div className=''>
    //         <div>{item}</div>
    //         <div>{item}</div>
    //     </div>
        
    // )
    
    return (
        <div>1</div>
        
    )
}