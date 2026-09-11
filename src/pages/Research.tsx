import React from 'react';

const Research: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="section-title">Research</h1>
        
        <div className="space-y-8">
          {/* Research Interests */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Research Interests</h2>
            <div className="card group">
              <p className="text-neutral-700 mb-4">
                My current research focuses on the questions arising in the larger overview of hardness of approximation. My interests over time have been in combinatorial optimization. I previously explored the computational complexity of geometric parameters in polytopes, which have implications in linear optimization. 
                I've also worked on graph-theoretic problems, and they remain of interest to me. Algorithms and computational complexity theory are natural extensions of my research interests.  
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-3">Primary Areas:</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Hardness of Approximation
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Combinatorial Optimization
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Linear Programming
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-3">Areas of interest</h3>
                  <ul className="space-y-2 text-neutral-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Graph Theory 
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Computational Complexity
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Algorithm Design & Analysis
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Publications Section */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Publications</h2>
            <div className="space-y-6">
              {/* NEW: Placeholder for Peer-Reviewed/Accepted/In Progress */}
              <div>
                <div className="card group">
                  <p className="text-neutral-700">
                    Florent Foucaud, <b>Krishna Narayanan</b> and Lekshmi R S. <a href = "https://link.springer.com/chapter/10.1007/978-3-031-25211-2_19" className="text-primary-600 hover:text-primary-700 decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"><i>Monitoring edge-geodetic sets in graphs.</i></a> Proceedings of the 9th International Conference on Algorithms and Discrete Applied Mathematics (CALDAM 2023), Lecture Notes in Computer Science 13947:245-256, 2023
                  </p>
                </div>
                {/* You can add more placeholder items here if you have multiple distinct works */}
                
                <div className="card group">
                  <p className="text-neutral-700">
                    Subhadeep R. Dev, Sanjana Dey, Florent Foucaud, <b>Krishna Narayanan</b> and Lekshmi R S. <a href = "https://doi.org/10.1016/j.dam.2025.08.041" className="text-primary-600 hover:text-primary-700 decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"><i>Monitoring edge-geodetic sets in graphs.</i></a> <i>Discrete Applied Mathematics</i> 377:598-610, 2025. <i>Special issue for CALDAM 2023. </i>.
                  </p>
                </div>

                <div className="card group">
                  <p className="text-neutral-700">
                    <b>Krishna Narayanan</b> and Tamon Stephen <a href = "https://doi.org/10.1007/978-3-032-17156-6_27" className="text-primary-600 hover:text-primary-700 decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"><i>The Hardness of Monotone Eccentricity on Polytopes.</i></a> In: Misra, N., Pandey, A. (eds) Algorithms and Discrete Applied Mathematics. CALDAM 2026. Lecture Notes in Computer Science, vol 16445. Springer, Cham.
                  </p>
                </div>
              </div>


              {/* Submitted Sub-section */}
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">Preprints</h3>
                <div className="card group">
                  <p className="text-neutral-700">
                     <b>Krishna Narayanan</b> and Tamon Stephen <a href = "https://doi.org/10.48550/arXiv.2605.26505" className="text-primary-600 hover:text-primary-700 decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"><i>--A note on the exact partition polytope of Frieze and Teng</i></a>.
                  </p>
                </div> 
                 
              </div> 
{/* */}
              <div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">In Progress</h3>
                <div className="card group">
                  <p className="text-neutral-700">
                    <b>Krishna Narayanan</b> and Tamon Stephen <i>--On the hardness of monotone eccentricity in polytopes, exact partition and beyond</i>.
                  </p>
                </div>
                {/* Add more submitted papers as needed */}
              </div>
            

            </div>
          </section>
          
          {/* Academic Presentations */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">Presentations & Conferences</h2>
            <div className="card group">
              <p className="text-neutral-600 whitespace-pre-line">
                The 12th Annual International Conference on Algorithms and Discrete Applied Mathematics (CALDAM) - February 2026 <br />
                <a 
                  href="https://caldam2026.iitdh.ac.in/accepted-papers" 
                  className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                >
                  The hardness of monotone eccentricity on polytopes 
                </a> <br />
                  <br />
                  
                Indian Institute of Technology, Dharwad, Karnataka, India  
              </p>
            </div>
            <div className="card group">
              <p className="text-neutral-600 whitespace-pre-line">
                West Coast Optimization Meeting - October 2025 <br />
                <a 
                  href="https://ocana.ok.ubc.ca/wcom25/abstracts.php" 
                  className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                >
                  Towards the computational complexity of monotone diameters of polytopes
                </a> <br />
                  <br />
                  
                University of British Columbia, Okanagan Campus, Kelowna, BC, Canada. 
              </p>
            </div>
            <div className="card group">
              <p className="text-neutral-600 whitespace-pre-line">
                SFU Operations Research Seminar - December 2024 <br />
                <a 
                  href="https://researchseminars.org/talk/SFUOR/49/" 
                  className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                >
                  Coping with intractability: Topics at the intersection of Parameterized Algorithms and Linear Optimization
                </a> <br />
                  <br />
                  
                Graduate Student Presentation for MATH 708. 
              </p>
            </div>
            <div className="card group">
              <p className="text-neutral-600 whitespace-pre-line">
                Cascadia Combinatorial Feast - October 2024 <br />
                <a 
                  href="https://faculty.sarkara.wwu.edu/2024(2)/ccf_Oct_2024.html" 
                  className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                >
                  Monitoring edge-geodetic sets in graphs
                </a><br />
                <br />
                Held at the University of Victoria, Victoria, BC, Canada. 
              </p>
            </div>
            <div className="card group">
              <p className="text-neutral-600 whitespace-pre-line">
                9th Annual International Conference on Algorithms and Discrete Applied Mathematics - February 2023 <br />
                <a 
                  href="https://caldam2023.daiict.ac.in/acceptedpapers.php" 
                  className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                >
                  Monitoring edge-geodetic sets in graphs
                </a><br />
                Held at the Dhirubhai Ambani Institute of Information and Communication Technology, Gandhinagar, India. <br />
                <br />
                <b>Springer Award for Best Student Presentation (One of five recipients)</b>
              </p>
            </div>
            <div className="card group">
              <p className="text-neutral-600 whitespace-pre-line">
                Graph theoretical analysis of Buckminsterfullerene <br />
                <br />
                Young Researchers' Forum - 6th Annual International Conference on Algorithms and Discrete Applied Mathematics - February 2020, Indian Institute of Technology, Hyderabad, India.<br />
              </p>
            </div>
            <br />
            <h3 className="text-2xl font-semibold text-neutral-800 mb-6">Other contributions</h3>
            <div className="card group">
              <p className="text-neutral-600 whitespace-pre-line">
                
                <a 
                  href="https://sites.google.com/view/eccc2022/abstracts" 
                  className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                >
                  Deduction in graph products
                </a><br />
                East Coast Combinatorics Conference (ECCC) - 2022, University of Prince Edward Island, Charlottetown.  <br />
                <br />
                <b>Presentation by Dr. Danny Dyer. I contributed to the findings presented.</b>
              </p>
            </div>
            
          </section>
        </div>
      </div>
    </div>
  )
}

export default Research;