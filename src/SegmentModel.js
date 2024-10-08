import { useState } from "react";


function SegmentModel({status,setStatus}) {
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
      res.splice(index,0,value) // used to replace the word that place
      setListData([...res])
    }


    const removeFunction =(value)=>{

        let temp= listData.filter((ele)=> ele !== value)

        setListData(temp)
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

     alert(JSON.stringify(final, null, 2));
       setListData([])
       setSelectData([])
       setSegmentName("")
  }


  console.log(listData)   

    return (
        <div className="segment-model-container">
            <div>
            <div className="model-heading"> Saving Segment</div>
            <div className="model-field-1">
                <label>Enter the Name of the Segment</label>
                <input type="text"
                 className="input"
                 value={segmentName}
                  placeholder="Name of segment" 
                onChange={(e)=> setSegmentName(e.target.value)}/>

             <p>To Save your segment,you need to add the schemas to build the query </p>
            </div>

            <div className="blue-box">
               
           {listData.map((item,index) => (
                   <div className="select-list-items">
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
                     <button onClick={()=>removeFunction(item)}>-</button>
                   </div>

                ))}
          </div>

            <div className="sub3">

                <select value={selectedOption} onChange={selectOption} className="selection-drop" >
                   <option>Add schema to segment </option> 
                    <option value="first_name" disabled={listData.includes("first_name")}>First Name</option>
                    <option value="last_name" disabled={listData.includes("last_name")}>Last Name</option>
                    <option value="gender"  disabled={listData.includes("gender")}>Gender</option>
                    <option value="age" disabled={listData.includes("age")}>Age</option>
                    <option value="account_name" disabled={listData.includes("account_name")}>Account Name</option>
                </select>

        <div onClick={addSchema} className="add-btn">+Add new schema</div>
        </div>

        </div>
            <div className="footer">
                <button onClick={submitFunction} className="save-btn">save the segment</button>
                <button className="cancel-btn" onClick={()=> setStatus((pre)=> pre = status)}>cancel</button>
            </div>

        </div>
    )
}

export default SegmentModel;