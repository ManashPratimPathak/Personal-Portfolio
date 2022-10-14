import React from 'react'

<style jsx>{`
.experince{
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;
    font-weight: 400;
    background-color: #4c4177;
    color: white;
    background-image: linear-gradient(315deg,#4c4177 0%, #2a5470);
}

.container{
    padding: 2rem;
    padding-bottom: 400px;
    margin: 0 auto;
    max-width: 800px;
}

.top-section{
    text-align: center ;
    padding: 4rem 0;
    max-width: 600px;
    margin: 0 auto;
}

.timeline{
    position: relative;
    min-height: 150px;
}

.line{
    position: absolute;
    z-index: 2;
    left: calc(50% - 1px);
    width: 2px;
    top: -50px;
    bottom: -50px;
    background-color: #000;
    display: none;
}

.line::before,
.line::before{
    position: absolute;
    display: block;
    content: ' ';
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background-color: #000;
    left: 50%;
    transform: translateX(-50%);
}

.line:after{
    bottom: 0;
}

.section{
    display: flex;
    opacity: 0;
    transform: translateX(-100%);
    transition: relative;
    z-index: 1;
    margin: 50px 0;
    padding: 1rem;
    border-radius: 1rem;
    align-items: center;
    min-height: 300px;
}

.section:nth-child(odd){
    flex-direction: row-reverse;
    transform: translateX(100%);
}

.bead{
    position: absolute;
    display: block;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background-color: #000;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
}

.content{
    width: calc(50% - 2rem);
}


.Show-me:nth-child(n){
    transform: none;
    opacity: 1;

}

h1{
    font-weight: 400;
    letter-spacing: 1px;
}
      `}</style>

function Experince() {
  return (
    <div className='experience'>
        <div className='container'>
            <div className='top-section'>
                <h1>Animated Timeline</h1>
                <p>
                    lorem ipsumeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                </p>
            </div>

            <div className='timeline'>
                <div className='line'>
                    <div className='section'>
                        <div className='bead'></div>
                        <div className='content'>
                            <h2>Web Design</h2>
                            <p>
                                lorem ipsumeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                            </p>
                        </div>
                    </div>

                    <div className='section'>
                        <div className='bead'></div>
                        <div className='content'>
                            <h2>Web Design</h2>
                            <p>
                                lorem ipsumeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                            </p>
                        </div>
                    </div>


                    <div className='section'>
                        <div className='bead'></div>
                        <div className='content'>
                            <h2>Web Design</h2>
                            <p>
                                lorem ipsumeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                            </p>
                        </div>
                    </div>


                    <div className='section'>
                        <div className='bead'></div>
                        <div className='content'>
                            <h2>Web Design</h2>
                            <p>
                                lorem ipsumeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Experince