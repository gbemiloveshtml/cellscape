import React, { useState, useLayoutEffect, useRef } from "react";
import "../pages/home.css";
import gsap from "gsap";

const Home = () => {
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

    return (
        <div className="top" ref={comp}>
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
                    <img  className="blood-cell" src="src/assets/bloodcell.png"/>
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
                    <p className="reveal-type">
                    This is caused by this change in DNA, specifically in the HBB, aka the hemoglobin gene. Glu which is what allows a normal blood cell to form is now val instead.
                    </p>
                </section>

              
                <section>
                <h1 className="reveal-type header">
                         Inheritance
                    </h1>
                    <p className="reveal-type">
                    People with sickle cell anemia inherit hemoglobin gene trait S from both parents. Those that only inherit from one parent have sickle cell trait, and can pass sickle cell anemia on if their partner has at least one S trait.
                    </p>
                </section>


                
                <section>
                <h1 className="reveal-type header">
                         What's bad about it?
                    </h1>
                    <p className="reveal-type">
                    Due to oxygen being cut off due to blockage caused by the sickle cells, the person feels immense pain and is unable to move for hours, days, sometimes weeks and even months. If you think you can imagine the pain, you can not. Oxygen can be cut off anywhere in the body: legs, brain, heart, lungs, and more. This could lead to death.
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
                         Completed
                    </h1>
                    <p className="reveal-type">
                    This was a basic overview into sickle cell. If you would like to gain more info about sickle cell and how it works biology-wise, here are some great links.
                    </p>
                </section>
                
            </div>
        </div>
    );
};

export default Home;
