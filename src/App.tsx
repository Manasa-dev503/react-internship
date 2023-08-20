
import './App.css'
function App(){
  const x = 30
  const p = 14
  const q = 134.42
  const r = "praveen"
  const s = "manasa"
  const y = "manasa"
  const z = "bathina"
  const ar = [12,13,14,15,16,7,5,78]
  const ar3 = [10,20,30]
  const ar2 = ["manasa","bathina","kalyani"]
  /*const k = +prompt()
  const l = +prompt()
  const m = +prompt()*/
  const img1 = "https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg"
  const img2 = "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"
  const imgurl =["https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg","https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg"]
  const mydetails = {
    firstname : "manasa",
    lastname : "bathina",
    gender : "female"
  }
  const mydetails1 = [{
    firstname : "manasa",
    lastname : "bathina",
    gender : "female"
  },
  {
    firstname : "gopi",
    lastname : "bhavani",
    gender : "male"
  }
]
  const img3='https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg'
  const img4='https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHklMjBkb2d8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
  return(
  <>
      <h1>Welcome to JSX</h1>
      <h1>{30}</h1>
      <h1>{`${y}${z}`}</h1>
      <h1>{y+z}</h1>
      {
        ar.map((a)=>{
          return a
        })
      }
      {
        ar2.map((b)=>{
          return b
        })
      }
      <h1>{Math.sqrt(p)}</h1>
      <h1>{parseInt(q.toString())}</h1>
      <h1>{r.toUpperCase()}</h1>
      <h1>{s.length}</h1>
      <h1>{s.split('').reverse().join('')}</h1>
      <h1>{x+p}</h1>
      <h1>{x>p?x:p}</h1>
      {/*<h1>{k%2===0?'even':'odd'}</h1>
      <h1>{k>l?(k>m?k:m):(l>m?l:m)}</h1>
      <h1>{k%2===0?'even':'odd'}</h1>
      <h1>{k>0?'positive':'negative'}</h1>
      <img src={k%2===0?img1:img2} alt="" />
      {
        ar.map((a)=>{
          return <li>{a}</li>
        })
      }*/}
      {
        ar.map((a)=>{
          return <li>{a*a}</li>
        })
      }
      {
        ar.map((a)=>{
          return <h1>{a}</h1>
        })
      }
      {
        ar.sort((a,b)=>{return a<b?-1:1}).map((a)=>{
          return <h1>{a}</h1>
        })
      }
      {
        ar.concat(ar3).map((a)=>{
          return <h1>{a}</h1>
        })
        
      }
      {
        ar.concat(ar3).sort((a,b)=>{return a<b?-1:1}).map((a)=>{
          return <h1>{a}</h1>
        })

      }
      {
        ar2.map((a)=>{
          return <li>{a}</li>
        })
      }
      <ul>
        {
        ar2.map((a)=>{
        return <li>{a}</li>
      })
      }
      </ul>
      <ol>
        {
          ar2.map((a)=>{
            return <li>{a}</li>
          })
        }
      </ol>
      <ul>
        {
        ar2.map((a)=>{
        return <li>{a.toUpperCase()}</li>
      })
      }
      </ul>
      <ol>
        {
          ar2.map((a)=>{
            return <li>{a.toLowerCase()}</li>
          })
        }
      </ol>
      {
        ar2.map((a)=>{
          return <li>{a.toLowerCase()}</li>
        })
      }
      {
        ar2.map((a)=>{
          return <li>{a.length}</li>
        })
      }
      {
        ar2.map((a)=>{
          return <li>{(a.length%2===0)?(<b>{a}</b>):(<i>{a}</i>)}</li>
        })
      }
      {
        ar2.map((a)=>{
          return <h1>{a.slice(0,2)}</h1>
        })
      }
      {
        ar2.map((a)=>{
          return <h1>{a.slice(0,1)}</h1>
        })
      }
      {
        ar2.map((a)=>{
          return <li>{a.split('').reverse().join('')}</li>
        })
      }
      {
        ar2.sort().map((a)=>{
          return <li>{a}</li>

        })
      }
      {
        ar.map((a)=>{
          return (a%2===0)?<li>{a}</li>:null
        })
      }
      {
        ar.map((a)=>{
          return (a%2!==0)?<li>{a}</li>:null
        })
      }
      {
        ar.map((a)=>{
          return (a>25)?<li>{a}</li>:null
        })
      }


      {
        ar.map((a)=>{
          return (a%2===0)?<li><i>{a}</i></li>:<li><b>{a}</b></li>
        })

      }
      {
        ar.map((a)=>{
          return (a<25)?<li>{a}</li>:null
        })
      }
      {
        ar.reduce((acc,a)=>{
          acc+=a;
          return acc;
        },0)
      }
      {
        imgurl.map((a)=>{
          return <img src={a} alt="" />
        })
      }
      {
        imgurl.map((a)=>{
          return <li><img src={a} alt="" /></li>
        })
      }
      {
         <table>
          <tr>
            {
              imgurl.map((a)=>{
                return (
                <td><img src={a} alt="" width="200px" height="150px"/></td>
                )
              })
            }
          </tr>
         </table>
        
      }
      {
       Object.entries(mydetails).map((a)=>{
        return <h1>{a[0]+":"+a[1]}</h1>
       })

      }
      {
       Object.entries(mydetails).map((a)=>{
        return <h1>{a[0]+":"+a[1].toUpperCase()}</h1>
       })

      }
     {
      mydetails1.map((a)=>{
        return (
        Object.entries(a).map((b)=>{
          return <li>{b[1]}</li>
        })
        )
      })
     }
{/*      
     <table border='2'>
   
   <thead>
     <th>firstname</th>
     <th>Lastname</th>
   </thead>
   <tbody>
    {
        mydetails.map((a)=>{
           return  <tr><td>{a.firstname}</td><td>{a.lastname}</td></tr>
       
     })
    }
   
   </tbody>
</table> */}


{/* <table border='2'>
   
   <thead>
     <th>firstname</th>
     <th>Lastname</th>
     <th>Image</th>
   </thead>
   <tbody>
    {
        mydetails.map((a)=>{
           return  <tr><td>{a.firstname}</td><td>{a.lastname}</td>
           <td><img src={a.gender==='female'?(img3):(img4)}></img></td>
           </tr>
       
     })
    }
   
   </tbody>
</table> */}


{/* {
  mydetails.map((a)=>{
    return <div style={{border:'2px solid '}}>
     
      <h1>{a.firstname}{a.lastname}</h1>
      <h1>gender:{a.gender}</h1>
    </div>
  })
} */}
<br></br>
<br></br>
<div>
<div style={{border:'50px  solid skyblue'}} >
  {
   
    <div style={{border:'2px solid',marginBottom:'20px'}}>
      <h1>SLIDE 1</h1>
     
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDYW7KmPsXBqNwJQpDdltzo1hV1s7iMz9Rg&usqp=CAU'/>
      <img src='data:image/jpeg;base64,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'/>
    </div>
  }
 
  {
     <div style={{border:'2px solid', marginBottom:'10px'}}>
      <h1>SLIDE 2</h1>
     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GCtZMzmnVwuqdgNzniwrRQhYuPHXziD8TQ&usqp=CAU'></img>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGEIKf5RT-lxMxx_qOrK4opqQMOecvvGn9w&usqp=CAU'></img>
   </div>
  }
</div>
</div>




     

      </>
  )
}
export default App
