import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/bg.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/65" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 pt-28 pb-14 sm:pt-32 sm:pb-20">
          <div className="flex flex-col items-center sm:flex-row sm:items-center gap-7 sm:gap-10">

            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-36 h-44 sm:w-48 sm:h-60 rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="/NK.png"
                    alt="Krishna Narayanan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/20" />
              </div>
            </div>

            {/* Hero text */}
            <div className="text-center sm:text-left">
              <h1
                className="text-white tracking-tight leading-tight"
                style={{
                  fontSize: 'clamp(2.4rem, 6vw, 4rem)',
                  fontWeight: '200',
                  letterSpacing: '-0.035em',
                  textShadow: '0 4px 8px rgba(0,0,0,0.25)',
                }}
              >
                Krishna Narayanan
              </h1>

              <p className="mt-3 text-lg sm:text-xl text-white/90 font-light">
                PhD Research Fellow in Computer Science
              </p>

              <p className="mt-1 text-sm sm:text-base text-white/75">
                University of Southern Denmark · Odense, Denmark
              </p>

              {/* Research summary */}
              <p className="mt-5 max-w-2xl text-sm sm:text-base text-white/80 leading-relaxed">
                Hardness of Approximation · Combinatorial Optimization ·
                Graph Theory
              </p>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-3">
                <Link
                  to="/research"
                  className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-800 shadow-sm hover:bg-neutral-100 transition-colors duration-200"
                >
                  Research
                </Link>

                <a
                  href="/NK_CV_full-2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-white/40 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20 transition-colors duration-200"
                >
                  CV
                </a>

                <a
                  href="mailto:nanakrish@imada.sdu.dk"
                  className="inline-flex items-center rounded-lg border border-white/40 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20 transition-colors duration-200"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-5 sm:px-6 py-10 sm:py-14">

        {/* About */}
        <section className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-neutral-800 mb-5">
            About
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
            <p>
              I am a PhD Research Fellow at the University of Southern Denmark,
              where I am advised by Lars Rohwedder in the Algorithms unit of the
              Department of Mathematics and Computer Science. My current research
              focuses on hardness of approximation, with broader interests in
              combinatorial optimization, graph theory and computational hardness.
            </p>

            <p>
              Previously, I completed a Master's degree in Mathematics at Simon
              Fraser University under the supervision of Prof. Tamon Stephen,
              where my work focused on the computational complexity of some questions in polytope theory. Before that, I completed an
              Integrated Master's degree in Theoretical Computer Science at PSG
              College of Technology where I worked under the supervision of Dr. Lekshmi R S, with the degree awarded by Anna University, Chennai, India.
            </p>

            <p>
              I enjoy open-minded discussion and debate and have a variety of
              interests outside academics. You can read more about them{' '}
              <Link
                to="/miscellaneous"
                className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
              >
                here
              </Link>.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="max-w-xl mx-auto mt-10 bg-primary-50 rounded-2xl shadow-sm p-5 sm:p-7 border border-primary-200">
          <h2 className="text-2xl font-bold text-primary-800 mb-5 pb-2 border-b border-primary-300">
            Contact
          </h2>

          <div className="space-y-5 text-sm text-neutral-700">
            <div>
              <h3 className="text-lg font-semibold text-primary-700 mb-2">
                Academic
              </h3>

              <p>
                <a
                  href="mailto:nanakrish@imada.sdu.dk"
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  nanakrish@imada.sdu.dk
                </a>
              </p>

              <p className="mt-1 text-neutral-600">
                Department of Mathematics and Computer Science
                <br />
                University of Southern Denmark, Odense
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary-700 mb-2">
                General & Personal
              </h3>

              <p>
                <a
                  href="mailto:nkrishna0602@gmail.com"
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  nkrishna0602@gmail.com
                </a>
              </p>

              <p className="mt-1 text-neutral-600">
                I keep my social media presence minimal. If you know me
                personally, you probably already know where to find me online.
              </p>
            </div>
          </div>
        </section>

        <p className="text-center text-xs text-neutral-400 mt-8">
          Last updated: September 2026
        </p>
      </main>
    </div>
  );
};

export default Home;