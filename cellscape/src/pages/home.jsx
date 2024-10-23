import React, { useState, useLayoutEffect, useRef } from "react";
import "../pages/home.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";


const Home = () => {

    window.onbeforeunload = function (){
        window.scrollTo(0,0)
    }
    //gsap scroll trigger
    gsap.registerPlugin(ScrollTrigger)
    const splitTypes = document.querySelectorAll('.reveal-type')

    splitTypes.forEach((word,i) => {
        const text = new SplitType(word, {types:'chars,words'})

        gsap.from(text.words,{
            scrollTrigger:{
                trigger: word,
                start:'top 78%',
                end:'top 20%',
                scrub:true,
                markers:false,

            },
            scaleX:0,
            x:-30,
            transformOrigin:'top',
            stagger:0.1
        })
        
        
       

        
    })

    









    const [showText, setShowText] = useState(false); // State to control text display
    const comp = useRef(null);
   

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline({
                onComplete: () => setShowText(true), // Trigger text display when animation ends
            });

            t1.from("#intro-slider", {
                xPercent: "-100",
                duration: 0,
                delay: 0,
            })
            .from(["#title-1", "#title-2", "#title-3"], {
                opacity: 0,
                y: "+=30",
                stagger: 0.5,
            })
            .to(["#title-1", "#title-2", "#title-3"], {
                opacity: 0,
                y: "-=30",
                delay: 0.3,
                stagger: 0.5,
            })
            .to("#intro-slider", {
                xPercent: "-100",
                duration: 1.3,
            });
        }, comp);

        return () => ctx.revert();
    }, []);

    const lenis = new Lenis()
    lenis.on('scroll', (e) => {
        console.log(e)
    })

    function raf(time){
        lenis.raf(time);
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)


    return (
        <div className="top" ref={comp}>

            {/*Scroll */}





            {/* Animation Section */}
            <div className="full-screen animated" id="intro-slider">
                <h1 id="title-1">Welcome</h1>
                <h1> </h1>
                <h1> </h1>
                <h1> </h1>
                <h1 id="title-2">To</h1>
                <h1> </h1>
                <h1> </h1>
                <h1> </h1>
                <h1 id="title-3">Cellscape</h1>
            </div>

            {/* Text Appears After Animation Completes */}
            {showText}
            <div className="title"> 
            <h1 >Sickle Cell Basics</h1>
            <h2>Scroll Down ↓</h2>
            </div>
           

            {/* Content Section */}
            <div className="content">

                <section>
                    <div className="section-1">
                <h1 className="reveal-type header"  >
                         Red Blood Cell
                    </h1>
                    <div className="text-image">
                    <p className="reveal-type">
                    This is a red blood cell, also known as an Erythrocyte. They transport nutrients and gas throughout the body. They live to around 120 days. The shape of a blood cell allows it to be able to navigate the cardiovascular system easily.
                    </p>
                    <img  className="blood-cell img" src="src/assets/bloodcell.png"/>
                    </div>
                    </div>
                </section>

               
                <section>
                <h1 className="reveal-type header">
                         Sickle Cell
                    </h1>
                    <p className="reveal-type">
                    This is also a red blood cell. It also transports nutrients and gas throughout the body. However, here's the difference, it only lives to 60 days and has a quite abnormal shape, doesn't it?
                    </p>
                    
                </section>
                
             
                <section>
                <h1 className="reveal-type header">
                         Genetics
                    </h1>
                    <div className="text-image">
                    <p className="reveal-type">
                    This is caused by this change in DNA, specifically in the HBB, aka the hemoglobin gene.Glutamic Acid(Glu), an amino acid is replaced by another amino acid, Valine(Val), which is how a normal red blood cell now changes to a sickle cell.
                    </p>
                    <img  className="reveal-type" src="src/assets/gene-change.png"/>
                    </div>
                </section>

              
                <section>
                <h1 className="reveal-type header">
                         Inheritance
                    </h1>
                    <div className="text-image">
                    <p className="reveal-type">
                    People with sickle cell anemia inherit hemoglobin gene trait S from both parents. Those that only inherit from one parent have sickle cell trait, and can pass sickle cell anemia on if their partner has at least one S trait.
                    </p>
                    <img  className="trait"src="src/assets/trait.png"/>
                    </div>
                </section>


                
                <section>
                <h1 className="reveal-type header">
                         What's bad about it?
                    </h1>
                    <p className="reveal-type">
                    Due to oxygen being cut off due to blockage caused by the sickle cells, the person feels immense pain and is unable to move for hours, days, sometimes weeks and even months.<a className="links"href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8217144/#:~:text=Chronic%20pain%20in%20SCD%20can,report%20nearly%20daily%20chronic%20pain.&text=In%20the%20child%20and%20adolescent,with%2035%25%20having%20pain%20daily.">Around 30% of people with Sickle Cell state that they feel pain daily.</a> If you think you can imagine the pain, you can not. Oxygen can be cut off anywhere in the body: legs, brain, heart, lungs, and more. This could lead to death.
                    </p>
                </section>


               
                <section>
                <h1 className="reveal-type header">
                         Treatments
                    </h1>
                    <p className="reveal-type">
                    DHydration, hydroxreau, bone marrow treatment, and a recently developed treatment CRISPR. 
                    </p>
                </section>

            
                
               


                <section>
                <h1 className="reveal-type header">
                         Get Involved
                    </h1>
                    <div className="text-image">
                    <p >
                    If you would like to get more involved or would like to make a donation to spread awarenesss on Sickle Cell Anemia
                    </p>
                    <ul >
                        <li className="links-bottom"><a href="https://www.scdfc.org/">https://www.scdfc.org/</a></li>
                        <li className="links-bottom"><a href="https://www.sicklecelldisease.org/">https://www.sicklecelldisease.org/</a></li>
                        <li className="links-bottom"><a href="https://www.fscdr.org/">https://www.fscdr.org/</a></li>
                        <li className="links-bottom"><a href="https://www.sicklecelltx.org/">https://www.sicklecelltx.org/</a></li>
                    </ul>
                    </div>
                </section>

                <section>
                <h1 className="reveal-type header">
                         How Much Did You Know?
                    </h1>
                    <div className="text-image">
                    <p >
                    how much
                    </p>
                    </div>
                </section>



                <section>
                <h1 className="reveal-type header">
                         Completed
                    </h1>
                    <div className="text-image">
                    <p >
                    This was a basic overview into sickle cell. If you would like to gain more info about sickle cell and dive deeper into how it works. Look through these links on the right.
                    </p>
                    <ul >
                        <li className="links-bottom"><a href="https://www.sparksicklecellchange.com/sickle-cell-genetics">https://shorturl.at/HdmlI</a></li>
                        <li className="links-bottom"><a href="https://shorturl.at/oXDGy">https://shorturl.at/oXDGy</a></li>
                        <li className="links-bottom"><a href="https://shorturl.at/Kc57u">https://shorturl.at/Kc57u</a></li>
                    </ul>
                    </div>
                </section>
                
            </div>
        </div>
    );
};

export default Home;
