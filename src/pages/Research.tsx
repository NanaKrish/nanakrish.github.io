import React from 'react';

type PublicationProps = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  href?: string;
  note?: string;
};

type PresentationProps = {
  date: string;
  event: string;
  title: string;
  location?: string;
  href?: string;
  linkLabel?: string;
  note?: string;
};

const highlightName = (authors: string) => {
  const parts = authors.split('Krishna Narayanan');

  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < parts.length - 1 && (
        <span className="font-medium text-neutral-900">
          Krishna Narayanan
        </span>
      )}
    </React.Fragment>
  ));
};

const Publication: React.FC<PublicationProps> = ({
  title,
  authors,
  venue,
  year,
  href,
  note,
}) => {
  return (
    <article className="py-6 first:pt-0 last:pb-0">
      <h3 className="text-lg font-medium text-neutral-900 leading-snug">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-700 transition-colors duration-200"
          >
            {title}
            <span
              className="ml-1 text-sm text-primary-500"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        ) : (
          title
        )}
      </h3>

      <p className="mt-2 text-neutral-700">
        {highlightName(authors)}
      </p>

      <p className="mt-1 text-sm text-neutral-500">
        {venue}
        {year && <> · {year}</>}
      </p>

      {note && (
        <p className="mt-2 text-sm text-neutral-500 italic">
          {note}
        </p>
      )}
    </article>
  );
};

const Presentation: React.FC<PresentationProps> = ({
  date,
  event,
  title,
  location,
  href,
  linkLabel,
  note,
}) => {
  return (
    <article className="py-5 first:pt-0 last:pb-0 sm:flex sm:gap-6">
      <div className="mb-2 sm:mb-0 sm:w-28 sm:flex-shrink-0">
        <span className="text-sm font-medium text-neutral-500">
          {date}
        </span>
      </div>

      <div className="min-w-0">
        <h3 className="font-medium text-neutral-900">
          {event}
        </h3>

        <p className="mt-1 text-neutral-700">
          {title}
        </p>

        {location && (
          <p className="mt-1 text-sm text-neutral-500">
            {location}
          </p>
        )}

        {href && (
          <p className="mt-2 text-sm">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
            >
              {linkLabel || 'Event link'} ↗
            </a>
          </p>
        )}

        {note && (
          <p className="mt-2 text-sm text-neutral-600 italic">
            {note}
          </p>
        )}
      </div>
    </article>
  );
};
const Research: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <div className="max-w-4xl mx-auto">

          <h1 className="section-title">Research</h1>

          {/* Research interests */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
              Research Interests
            </h2>

            <p className="max-w-3xl text-neutral-700 leading-relaxed">
              My current research focuses on questions arising in hardness of
              approximation, with broader interests in combinatorial
              optimization and computational complexity. My earlier work has
              included graph-theoretic problems and computational questions
              concerning polytopes and linear optimization.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                'Hardness of Approximation',
                'Combinatorial Optimization',
                'Linear Programming',
                'Graph Theory',
                'Computational Complexity',
                'Algorithm Design & Analysis',
              ].map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 rounded-full bg-primary-50 border border-primary-100 text-sm text-primary-700"
                >
                  {area}
                </span>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">
              Publications
            </h2>

            <div className="bg-white border border-neutral-200 rounded-2xl px-6 sm:px-7 py-6 divide-y divide-neutral-200">

              <Publication
                title="The Hardness of Monotone Eccentricity on Polytopes"
                authors="Krishna Narayanan and Tamon Stephen"
                venue="Algorithms and Discrete Applied Mathematics (CALDAM 2026), Lecture Notes in Computer Science, vol. 16445, Springer"
                year="2026"
                href="https://doi.org/10.1007/978-3-032-17156-6_27"
              />

              <Publication
                title="Monitoring edge-geodetic sets in graphs"
                authors="Subhadeep R. Dev, Sanjana Dey, Florent Foucaud, Krishna Narayanan and Lekshmi R S"
                venue="Discrete Applied Mathematics, 377:598–610"
                year="2025"
                href="https://doi.org/10.1016/j.dam.2025.08.041"
                note="Special issue for CALDAM 2023."
              />

              <Publication
                title="Monitoring edge-geodetic sets in graphs"
                authors="Florent Foucaud, Krishna Narayanan and Lekshmi R S"
                venue="Algorithms and Discrete Applied Mathematics (CALDAM 2023), Lecture Notes in Computer Science, 13947:245–256"
                year="2023"
                href="https://link.springer.com/chapter/10.1007/978-3-031-25211-2_19"
              />

            </div>
          </section>

          {/* Preprints */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">
              Preprints
            </h2>

            <div className="border-l-2 border-primary-200 pl-5">
              <Publication
                title="A note on the exact partition polytope of Frieze and Teng"
                authors="Krishna Narayanan and Tamon Stephen"
                venue="arXiv preprint"
                year="2026"
                href="https://doi.org/10.48550/arXiv.2605.26505"
              />
            </div>
          </section>

          {/* Work in progress */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-5">
              Work in Progress
            </h2>

            <div className="border-l-2 border-neutral-200 pl-5">
              <h3 className="text-lg font-medium text-neutral-900">
                On the hardness of monotone eccentricity in polytopes,
                exact partition and beyond
              </h3>

              <p className="mt-2 text-neutral-700">
                <span className="font-medium text-neutral-900">
                  Krishna Narayanan
                </span>{' '}
                and Tamon Stephen
              </p>
            </div>
          </section>

          {/* Presentations */}
          <section className="mb-14">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-neutral-800">
                Talks & Presentations
              </h2>

              <p className="mt-2 text-sm text-neutral-500">
                Conference and seminar presentations.
              </p>
            </div>

            <div className="divide-y divide-neutral-200">
            <Presentation
  date="Apr 2026"
  event="Department of Applied Mathematics and Computational Sciences, PSG College of Technology"
  title="Towards the complexity of monotone shortest paths on simple polytopes"
  location="Coimbatore, Tamil Nadu, India"
  href="https://www.linkedin.com/posts/psgandsonscharities_psgevents-psgtech-psgtechalumni-activity-7444999327841841152-pQ64?utm_source=share&utm_medium=member_desktop&rcm=ACoAACf01xABmYG8zG8XWeNMXXJbXVsKj_udoSI"
  linkLabel="Department announcement"
  note="Invited seminar on my master's thesis research."
/>

              <Presentation
                date="Feb 2026"
                event="12th International Conference on Algorithms and Discrete Applied Mathematics (CALDAM)"
                title="The hardness of monotone eccentricity on polytopes"
                location="Indian Institute of Technology Dharwad, Karnataka, India"
                href="https://caldam2026.iitdh.ac.in/accepted-papers"
              />

              <Presentation
                date="Oct 2025"
                event="West Coast Optimization Meeting"
                title="Towards the computational complexity of monotone diameters of polytopes"
                location="University of British Columbia, Okanagan Campus, Kelowna, BC, Canada"
                href="https://ocana.ok.ubc.ca/wcom25/abstracts.php"
              />

              <Presentation
                date="Dec 2024"
                event="SFU Operations Research Seminar"
                title="Coping with intractability: Topics at the intersection of Parameterized Algorithms and Linear Optimization"
                location="Simon Fraser University"
                href="https://researchseminars.org/talk/SFUOR/49/"
                note="Graduate student presentation for MATH 708."
              />

              <Presentation
                date="Oct 2024"
                event="Cascadia Combinatorial Feast"
                title="Monitoring edge-geodetic sets in graphs"
                location="University of Victoria, Victoria, BC, Canada"
                href="https://faculty.sarkara.wwu.edu/2024(2)/ccf_Oct_2024.html"
              />

              <Presentation
                date="Feb 2023"
                event="9th International Conference on Algorithms and Discrete Applied Mathematics (CALDAM)"
                title="Monitoring edge-geodetic sets in graphs"
                location="Dhirubhai Ambani Institute of Information and Communication Technology, Gandhinagar, India"
                href="https://caldam2023.daiict.ac.in/acceptedpapers.php"
                note="Springer Award for Best Student Presentation — one of five recipients."
              />

              <Presentation
                date="Feb 2020"
                event="Young Researchers' Forum — 6th International Conference on Algorithms and Discrete Applied Mathematics"
                title="Graph theoretical analysis of Buckminsterfullerene"
                location="Indian Institute of Technology Hyderabad, India"
              />

            </div>
          </section>

          {/* Other contributions */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">
              Other Contributions
            </h2>

            <div className="border-l-2 border-neutral-200 pl-5">
              <p className="text-sm font-medium text-neutral-500 mb-1">
                2022 · East Coast Combinatorics Conference
              </p>

              <h3 className="text-lg font-medium text-neutral-900">
                <a
                  href="https://sites.google.com/view/eccc2022/abstracts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-700 transition-colors duration-200"
                >
                  Deduction in graph products ↗
                </a>
              </h3>

              <p className="mt-2 text-sm text-neutral-500">
                University of Prince Edward Island, Charlottetown, Canada
              </p>

              <p className="mt-2 text-neutral-700">
                Presented by Dr. Danny Dyer. I contributed to the findings
                presented.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Research;