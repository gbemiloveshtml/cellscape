
import React from "react";
import "../home.css"
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap"
import Text from "./text";




const Home = () =>{
    const comp = useRef(null)

    useLayoutEffect(() =>{
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()
            t1.from("#intro-slider",{
                xPercent:"-100",
                duration:1.3,
                delay:0.3,

            }).from(["#title-1", "#title-2", "#title-3"],{
                opacity:0,
                y:"+=30",
                stagger:0.5,

            }).to(["#title-1", "#title-2", "#title-3"],{
                opacity:0,
                y:"-=30",
                delay:0.3,
                stagger:0.5,
            }).to("intro-slider",{
                xPercent:"-100",
                duration:1.3,

            })
           


        }, comp)
        return () => ctx.revert()

    },[])

    return (
        <div className="top full-screen" ref={comp}>
            <div className="animated" id="intro-slider">
                <h1 id="title-1">Welcome</h1>
                <h1 id="title-2">To</h1>
                <h1 id="title-3">Cellscape</h1>
            </div>
              <div className="main">
                 <h1 className="main-text" id="welcome">Cellscape</h1>
             </div>  


             
        </div>

        
      
        



    )
        

    
    
}

export default Home 