export default function Footer(){
    return(
            <div style={{width:"100%",
                backgroundColor:"teal",
                height:"200px",
                color:"white",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                fontSize:"10px",
                boxShadow:"0px 5px 13px rgba(0,0,0,0.4)",}}>
                  <div style={{width:"30%",display:"flex",alinItems:"left",justifyContent:"left", padding:"5px"}}>
                      <p style={{color:"black",fontSize:"20px"}}> this is a social media links </p>
                      <a href="#whatsApp" style={{justifyContent:"center", padding:"10px",margin:"10px",fontSize:"12px"}}> https://web.whatsapp.com </a> 
                      <a href="#telegram" style={{justifyContent:"center", padding:"10px",margin:"10px",fontSize:"12px"}}> https://t.me/An3RRA </a>
                  </div>
                  <div style={{margin:"30%"}}>
                     
                  </div>
                  <div style={{color:"black",fontSize:"18px"}}>
                       <p> this is my menu </p>
                       <hr/>
                       <p>
                        text1<br/>
                        text2<br/>
                        text3<br/>
                        text4<br/>
                       </p>
                  </div>
            </div>
    );
}