import React from "react";
import Link from 'next/link'

import Navbar from "./Navbar";
import Footer from "./Footer";
import Form from "./Form";
import Project from "./Project";
import {TrendingUpIcon, CurrencyRupeeIcon, SupportIcon} from "@heroicons/react/solid"



export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaCUyMGJ1c2luZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')"
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                       Let's Create an application for you!.
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                      Blyte tech is a nigerian tech company working towards proving that a profitable tech multinational corporation can be built from nigeria
                    </p>
                  </div>
                </div>

              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
           
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              
              
            </div>


            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <TrendingUpIcon className=" text-xl"/>
                </div>
                <h3 className="text-3xl mb-2 text-black font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                    We can build that web application you have always desired to acquire
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Why not contact us today and get it built in less than 2 weeks!!. <br/>
                  with our ever efficient team, you are promised a job well done 
                </p>
                
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-blue-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHRlY2glMjBidXNpbmVzc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=600"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                    
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Web development
                    </h4>
                    <p className="text-md font-light mt-2 text-white break-words">
                      Javavscript, php, node.js, Express.js, MongoDb, Sql, React.js, Next.js, HTML, CSS
                    </p>
                  </blockquote>
                </div>
              </div>

            </div>
          </div>
        </section>



        <section className="pb-20 bg-gray-100 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              
              
            </div>


            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  < CurrencyRupeeIcon className=" text-xl"/>
                </div>
                <h3 className="text-3xl text-black mb-2 font-semibold leading-normal">
                  Work with us
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                    We can build that mobile application you have always desired to acquire
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  Why not contact us today and get it built in less than 2 weeks!!. <br/>
                  with our ever efficient and time managing team, you are promised a job well done 
                </p>
                
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-blue-600">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                    
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Mobile development
                    </h4>
                    <p className="text-md font-light mt-2 text-white break-words">
                      Flutter, React-Native, Kotlin
                    </p>
                  </blockquote>
                </div>
              </div>

            </div>
          </div>
        </section>





        <section className="relative py-20">
          

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1603974603756-dc134b7054e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdldHMlMjBzaGl0JTIwZG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className=" p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full">
                    <SupportIcon className="text-xl" />
                  </div>
                  <h3 className="text-3xl text-black font-semibold">
                    A growing company that gets shit done
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    There is no time to waste time, Contact us now!! via the form below
                  </p>
                  <h1 className="mt-8 mb-3 font-bold text-black">
                    Contact Us and make this panda happy
                  </h1>

                  <img src="/panda.gif" className="h-72 rounded-xl w-72"/>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl text-black font-semibold">
                  Ungoing Project
                </h2>
               
                
              </div>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                

                 <Project />
                 <div className="flex justify-between ml-3 mr-2">

                      <Link href="/subscribe" ><h1 className="text-black text-base font-bold cursor-pointer">Register as source or student's User now</h1></Link>

                 </div>


              </div>
             
             
             
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
            
            </svg>
          </div>

          <div className="container mx-auto mb-10 px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl break-words font-semibold text-white">
                  You want to Build something? Contact Us Now
                </h2>
              
              </div>
            </div>
           
          </div>
        </section>

 


        <Form />
        
      </main>
      <Footer />
    </>
  );
}
