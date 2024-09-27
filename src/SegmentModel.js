import { useState } from "react";


function SegmentModel() {
    const [segmentName,setSegmentName] = useState("")
    const [selectData, setSelectData] = useState([])
    const [listData, setListData] = useState([])
    const data = [
        { value: "first_name", label: "First Name" },
        { value: "last_name", label: "Last Name" },
        { value: "gender", label: "Gender" },
        { value: "age", label: "Age" },
        { value: "account_name", label: "Account Name" },
    ]
    const [selectedOption, setSelectedOption] = useState('Add schema to segment')

    const selectOption = (e) => {

        setSelectData(e.target.value)
        setSelectedOption(e.target.value);
    }
    const addSchema = () => {
        setListData([...listData, selectData])
        setSelectedOption('Add schema to segment');
        
    }
    const reOrder = (value,index)=>{
    
      let res = listData.filter((ele,ind)=> ind !==index)
      res.splice(index,0,value)
      setListData([...res])
    }


  const submitFunction = ()=>{

    const out =data.filter((ele)=> listData.includes(ele.value))
    
    const res = out.map((val,index)=> {
        console.log(val.value, val.label)
         let obj ={};
         obj[val.value] = val.label
         return obj;
    })
     const final= {
         "segment name" : segmentName,
         "schema" : res
     }

     console.log(final)

  }


   

    return (
        <div className="segment-model-container">

            <div> Saving Segment</div>
            <div>
                <label>Enter the Name of the Segment</label>
                <input type="text" placeholder="Name of segment" 
                onChange={(e)=> setSegmentName(e.target.value)}/>

             <p>To Save your segment,you need to add the schemas to build the query </p>
            </div>

            <div className="blue-box">
               
           {listData.map((item,index) => (
                    <select key={item} className="selection" 
                     onChange={(e)=>reOrder(e.target.value,index)}>

                        {data.filter((el) => el.value === item).map((lt) => (
                            <option key={lt.value} value={lt.value}>
                                {lt.label}
                            </option>
                        ))}
                        {data.filter((val) => !listData.includes(val.value)).map((dt) => (
                            <option key={dt.value} value={dt.value}>
                                {dt.label}
                            </option>
                        ))}
                    </select>
                ))}
          </div>

            <div className="sub3">

                <select value={selectedOption} onChange={selectOption} >
                   <option>Add schema to segment </option> 
                    <option value="first_name">First Name</option>
                    <option value="last_name">Last Name</option>
                    <option value="gender">Gender</option>
                    <option value="age">Age</option>
                    <option value="account_name">Account Name</option>
                </select>

        <div onClick={addSchema} className="add-btn">+Add new schema</div>
        </div>


            <div>
                <button onClick={submitFunction}>save the segment</button>
            </div>

        </div>
    )
}

export default SegmentModel;