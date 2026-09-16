import React from 'react';

const linkClass =
  'text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200';

const Education: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <div className="max-w-4xl mx-auto">

          <h1 className="section-title">
            Education & Teaching Assistantships
          </h1>

          {/* Education */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">
              Education
            </h2>

            <div className="bg-white border border-neutral-200 rounded-2xl divide-y divide-neutral-200">

              {/* PhD */}
              <article className="p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-6">
                  <div>
                    <h3 className="text-[1.2rem] font-semibold text-neutral-900">
                      PhD in Computer Science
                    </h3>

                    <p className="mt-1 text-neutral-600">
                      University of Southern Denmark, Odense
                    </p>
                  </div>

                  <span className="text-sm font-medium text-primary-600 whitespace-nowrap">
                    Aug 2026 – present
                  </span>
                </div>

                <p className="mt-4 text-neutral-700">
                  <span className="font-medium">Supervisor:</span>{' '}
                  <a
                    href="https://larsrohwedder.com/"
                    className={linkClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Prof. Lars Rohwedder
                  </a>
                </p>

                <p className="mt-3 text-neutral-600 italic">
                  Let's just say something's cooking for now.
                </p>
              </article>

              {/* SFU */}
              <article className="p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-6">
                  <div>
                    <h3 className="text-[1.2rem] font-semibold text-neutral-900">
                      M.Sc. in Mathematics
                    </h3>

                    <p className="mt-1 text-neutral-600">
                      Simon Fraser University, Burnaby, BC, Canada
                    </p>
                  </div>

                  <span className="text-sm font-medium text-primary-600 whitespace-nowrap">
                    Sep 2023 – Dec 2025
                  </span>
                </div>

                <p className="mt-4 text-neutral-700">
                  <span className="font-medium">Supervisor:</span>{' '}
                  <a
                    href="https://www.sfu.ca/~tstephen/"
                    className={linkClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Prof. Tamon Stephen
                  </a>
                </p>

                <p className="mt-3 text-neutral-700 leading-relaxed">
                  Focused on discrete optimization and polytope theory,
                  exploring the computational complexity of algorithmic
                  questions in polyhedra arising from combinatorial
                  optimization.
                </p>

                <div className="mt-5 pt-5 border-t border-neutral-100">
                  <h4 className="font-semibold text-neutral-800 mb-3">
                    Awards & Scholarships
                  </h4>

                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li>
                      <span className="font-medium">
                        SFU Graduate Fellowship
                      </span>{' '}
                      <span className="text-neutral-500">· Summer 2025</span>
                    </li>

                    <li>
                      <span className="font-medium">
                        Graduate Travel and Research Award
                      </span>{' '}
                      <span className="text-neutral-500">· Spring 2025</span>
                    </li>

                    <li>
                      <span className="font-medium">
                        MITACS Globalink Graduate Fellowship
                      </span>{' '}
                      <span className="text-neutral-500">· 2024</span>
                    </li>

                    <li>
                      <span className="font-medium">
                        Special Graduate Entrance Scholarship
                      </span>{' '}
                      <span className="text-neutral-500">· Fall 2023</span>
                    </li>
                  </ul>
                </div>
              </article>

              {/* PSG */}
              <article className="p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-6">
                  <div>
                    <h3 className="text-[1.2rem] font-semibold text-neutral-900">
                      Integrated M.Sc. in Theoretical Computer Science
                    </h3>

                    <p className="mt-1 text-neutral-600">
                      PSG College of Technology, Coimbatore, India
                    </p>

                    <p className="mt-1 text-sm text-neutral-500 italic">
                      Graduated First Class with Distinction
                    </p>
                  </div>

                  <span className="text-sm font-medium text-primary-600 whitespace-nowrap">
                    Graduated Jun 2023
                  </span>
                </div>

                <div className="mt-5 space-y-3 text-neutral-700">
                  <p>
                    <span className="font-medium">Internal Supervisor:</span>{' '}
                    <a
                      href="https://scholar.google.com/citations?user=Qs-0HKwAAAAJ&hl=en"
                      className={linkClass}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Prof. Lekshmi R S
                    </a>
                  </p>

                  <p>
                    <span className="font-medium">Project:</span>{' '}
                    Monitoring edge-geodetic sets in graphs
                  </p>
                </div>

                {/* External projects */}
                <div className="mt-6">
                  <h4 className="font-semibold text-neutral-800 mb-4">
                    External Research Projects
                  </h4>

                  <div className="space-y-5">
                    <div className="border-l-2 border-primary-200 pl-4">
                      <p className="font-medium text-neutral-800">
                        Monitoring edge-geodetic sets in graphs
                      </p>

                      <ul className="mt-2 space-y-1 text-sm text-neutral-700">
                        <li>
                          <a
                            href="https://perso.limos.fr/ffoucaud/"
                            className={linkClass}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Prof. Florent Foucaud
                          </a>
                          <span className="text-neutral-500">
                            {' '}
                            · LIMOS, Université Clermont Auvergne, France
                          </span>
                        </li>

                        <li>
                          <a
                            href="https://www.imsc.res.in/~vraman/"
                            className={linkClass}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Prof. Venkatesh Raman
                          </a>
                          <span className="text-neutral-500">
                            {' '}
                            · Institute of Mathematical Sciences, Chennai, India
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-2 border-primary-200 pl-4">
                      <p className="font-medium text-neutral-800">
                        Deduction number of graphs, a variant of the cops and
                        robber game
                      </p>

                      <ul className="mt-2 space-y-1 text-sm text-neutral-700">
                        <li>
                          <a
                            href="https://www.mun.ca/math/our-people/faculty/danny-dyer/"
                            className={linkClass}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Prof. Danny Dyer
                          </a>
                          <span className="text-neutral-500">
                            {' '}
                            · Memorial University of Newfoundland, Canada
                          </span>
                        </li>

                        <li>
                          <a
                            href="https://aburges2.ext.unb.ca/"
                            className={linkClass}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Prof. Andrea Burgess
                          </a>
                          <span className="text-neutral-500">
                            {' '}
                            · University of New Brunswick / Memorial University
                            of Newfoundland, Canada
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-neutral-100">
                  <h4 className="font-semibold text-neutral-800 mb-3">
                    Awards & Scholarships
                  </h4>

                  <ul className="space-y-2 text-sm text-neutral-700">
                    <li>
                      <span className="font-medium">
                        Achievement Award — PSG Tech Alumni Association
                      </span>{' '}
                      <span className="text-neutral-500">· Mar 2023</span>
                    </li>

                    <li>
                      <span className="font-medium">
                        MITACS Globalink Research Internship Award
                      </span>{' '}
                      <span className="text-neutral-500">· 2022 cohort</span>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          </section>

          {/* Competitive examinations */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-5">
              Competitive Exams
            </h2>

            <div className="border-l-2 border-primary-200 pl-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-6">
                <div>
                  <h3 className="text-[1.1rem] font-semibold text-neutral-900">
                    Joint Entrance Screening Test (JEST) 2023
                  </h3>

                  <p className="mt-2 text-neutral-700">
                    National Eligibility Test in Theoretical Computer Science
                  </p>
                </div>

                <span className="text-sm font-medium text-primary-600 whitespace-nowrap">
                  Qualified
                </span>
              </div>

              <p className="mt-3 text-sm text-neutral-600">
                All India Rank: <span className="font-semibold">51</span>
              </p>
            </div>
          </section>

          {/* Teaching */}
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">
              Teaching Assistantships
            </h2>

            <div className="bg-white border border-neutral-200 rounded-2xl divide-y divide-neutral-200">

              {/* SDU */}
              <article className="p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-6">
                  <div>
                    <h3 className="text-[1.2rem] font-semibold text-neutral-900">
                      Teaching Assistant
                    </h3>

                    <p className="mt-1 text-neutral-600">
                      University of Southern Denmark, Odense
                    </p>
                  </div>

                  <span className="text-sm font-medium text-primary-600 whitespace-nowrap">
                    2026 – present
                  </span>
                </div>

                <div className="mt-5 sm:grid sm:grid-cols-[7rem_1fr] sm:gap-5">
                  <p className="text-sm font-medium text-neutral-500">
                    Fall 2026
                  </p>

                  <div className="mt-1 sm:mt-0 border-l-2 border-primary-200 pl-4">
                    <p className="font-medium text-neutral-800">
                      DM587 — Scientific Programming
                    </p>
                  </div>
                </div>
              </article>

              {/* SFU */}
              <article className="p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-6">
                  <div>
                    <h3 className="text-[1.2rem] font-semibold text-neutral-900">
                      Graduate Teaching Assistant
                    </h3>

                    <p className="mt-1 text-neutral-600">
                      Simon Fraser University, Burnaby & Surrey, BC
                    </p>
                  </div>

                  <span className="text-sm font-medium text-primary-600 whitespace-nowrap">
                    2023 – 2025
                  </span>
                </div>

                <div className="mt-6 divide-y divide-neutral-100">

                  {/* Fall 2025 */}
                  <div className="pb-5 sm:grid sm:grid-cols-[8rem_1fr] sm:gap-5">
                    <p className="text-sm font-medium text-neutral-500">
                      Fall 2025
                    </p>

                    <div className="mt-1 sm:mt-0">
                      <p className="font-medium text-neutral-800">
                        Introductory Math Workshop — Surrey
                      </p>

                      <p className="mt-1 text-sm text-neutral-600">
                        Facilitated office hours and examinations, including
                        grading for MATH 100 — Pre-Calculus.
                      </p>
                    </div>
                  </div>

                  {/* 2024-25 */}
                  <div className="py-5 sm:grid sm:grid-cols-[8rem_1fr] sm:gap-5">
                    <p className="text-sm font-medium text-neutral-500">
                      Fall 2024 &
                      <br className="hidden sm:block" /> Spring 2025
                    </p>

                    <div className="mt-1 sm:mt-0 space-y-5">
                      <div className="border-l-2 border-primary-200 pl-4">
                        <p className="font-medium text-neutral-800">
                          MATH 308 — Linear Optimization
                        </p>

                        <p className="mt-1 text-sm text-neutral-600">
                          Led tutorial lectures, graded assignments, handled
                          tests and examinations, and provided student support.
                        </p>
                      </div>

                      <div className="border-l-2 border-primary-200 pl-4">
                        <p className="font-medium text-neutral-800">
                          Introductory Math Workshop — Surrey
                        </p>

                        <p className="mt-1 text-sm text-neutral-600">
                          Facilitated office hours and examinations, including
                          grading.
                        </p>

                        <p className="mt-3 text-sm text-neutral-600">
                          <span className="font-medium text-neutral-700">
                            Courses supported:
                          </span>{' '}
                          FAN X99, MATH 100, MATH 130, MACM 201
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Spring 2024 */}
                  <div className="py-5 sm:grid sm:grid-cols-[8rem_1fr] sm:gap-5">
                    <p className="text-sm font-medium text-neutral-500">
                      Spring 2024
                    </p>

                    <div className="mt-1 sm:mt-0">
                      <p className="font-medium text-neutral-800">
                        Introductory Math Workshop — Surrey
                      </p>

                      <p className="mt-1 text-sm text-neutral-600">
                        Facilitated office hours and examinations, including
                        grading.
                      </p>
                    </div>
                  </div>

                  {/* Fall 2023 */}
                  <div className="pt-5 sm:grid sm:grid-cols-[8rem_1fr] sm:gap-5">
                    <p className="text-sm font-medium text-neutral-500">
                      Fall 2023
                    </p>

                    <div className="mt-1 sm:mt-0">
                      <p className="font-medium text-neutral-800">
                        Algebra Workshop — Burnaby
                      </p>

                      <p className="mt-1 text-sm text-neutral-600">
                        Facilitated office hours and examinations, including
                        grading.
                      </p>

                      <p className="mt-3 text-sm text-neutral-600">
                        <span className="font-medium text-neutral-700">
                          Courses supported:
                        </span>{' '}
                        MATH 100, MATH 232, MATH 240, MACM 201
                      </p>
                    </div>
                  </div>

                </div>
              </article>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Education;