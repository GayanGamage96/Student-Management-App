useEffect(() => {
    getAllStudent()
  
   
  }, [])
  

  const getAllStudent = () => {
    fetch('http://192.168.70.232:3000/api/v1/student')
    .then(response=>response.json())
    .then(response=>setStudent(response))  
}



                // std_id: id,
                // name: name,
                // address: address,
                // registered_date: date,
                // course: course,