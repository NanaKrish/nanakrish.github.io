import React from 'react';

const Experience: React.FC = () => {
  const companyLogos = [
    { 
      src: '/SFU.png', 
      alt: 'SFU Logo', 
      caption: (
        <>
          Graduate Research & Teaching Assistant<br />
          Simon Fraser University<br />
          September 2023 - December 2025
        </>
      )
    },
    { 
      src: '/IMSC.png', 
      alt: 'IMSC Logo', 
      caption: (
        <>
          Research Intern<br />
          The Institute of Mathematical Sciences, Chennai<br />
          January 2023 - June 2023
        </>
      )
    },
    { 
      src: '/MUN.jpg', 
      alt: 'MUN Logo', 
      caption: (
        <>
          MITACS Globalink Research Intern<br />
          Memorial University of Newfoundland, NL, Canada<br />
          June 2022 - August 2022
        </>
      )
    },
    { 
      src: '/LIMOS.png', 
      alt: 'LIMOS Logo', 
      caption: (
        <>
          Research Intern<br />
          LIMOS, Université Clermont-Auvergne<br />
          April 2021 - November 2021
        </>
      )
    },
    { 
      src: '/mango.png', 
      alt: 'mango Logo', 
      caption: (
        <>
          Curriculum Tech Intern<br />
          Mango Education<br />
          May 2020 - October 2020
        </>
      )
    },
    { 
      src: '/CDOt.png', 
      alt: 'CDOt Logo', 
      caption: (
        <>
          Student Intern<br />
          Centre for Development of Telematics, Bangalore<br />
          May 2019
        </>
      )
    },
  ];

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <h1 className="section-title">Experience</h1>
        
        <div className="space-y-12">
          {/* Company Logos Section */}
          <section className="fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center items-stretch"> {/* Changed items-center to items-stretch for uniform height */}
              {companyLogos.map((logo, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-xs h-full">
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="max-h-24 object-contain mb-4" // Adjust max-h as needed
                  />
                  {/* Removed flex-grow flex items-center justify-center from the <p> tag */}
                  <p className="text-neutral-700 font-medium text-sm"> 
                    {logo.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Experience;