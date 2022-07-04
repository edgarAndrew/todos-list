import React from 'react'

export const About = () => {
  let myStyle = {
    backgroundColor:"#f7f7e8",
    borderRadius:"2%",
    marginBottom:"20px",
    paddingTop:"15px",
    boxShadow:"8px 10px #D3D3D3",
    position:"relative",
    top:"2vh"
  } 

  return (
    <div style={myStyle}>
        <h3>About page</h3>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Reprehenderit obcaecati modi eum possimus tempora illo quibusdam laborum, 
            quis harum accusamus? Doloremque dolore explicabo odit, nobis facere neque in. 
            Dolor distinctio excepturi obcaecati vitae similique. <br></br><br></br>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora necessitatibus 
            temporibus dignissimos voluptatum qui, in, blanditiis accusamus placeat laborum iure 
            sit enim nostrum cumque sint minima. Ad repudiandae velit tempora?
        </p>
    </div>
  )
}
