import gaming from '../assets/imgs/gaming3.png'

export default function About (){
    return( <>
      
            <div className="about">
                <div>
                    <h3>ABOUT US:</h3>

                <p >This website is my final project for the Webdesign course . Where we explore the elements of front-end development (HTML, CSS, JavaScript and other useful tools like Adobe photoshop, illustrator, Bootstrap...).<br/>
                 I chose this topic because creating these little webGames will give me the opportunity to dive more into advanced Javascript and Css while also having fun.<br/>
                 The reason why Python (Flask) is used, is my intention to keep expanding this project beyond this course, and adding a database to save users data and have functional sign-up sign-in forms.</p>
                </div>


                 <img width="400" height="auto" alt="" src={gaming}/>


            </div>
                    {/* <div className="bootstrap-container">

                    <div className="bootstrap">
                        <div   div id="demo" className="carousel slide" data-ride="carousel">
            
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                        </ul>
            
            
                        <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img width="400" height="auto" alt="" src={gaming}/>
                        </div>
                        <div className="carousel-item">
                        <img width="400" height="auto" alt="" src={gaming}/>
                        </div>
                        <div className="carousel-item">
                        <img width="400" height="auto" alt="" src={gaming}/>
                        </div>
                        </div>
            
                        <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                        <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                        </a>
                        </div>
            
            
                    </div>
                    </div> */}
                   </>

   
        
    )
}