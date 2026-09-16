import React from 'react';

const Miscellaneous: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <header className="mb-12 text-center">
            <h1 className="section-title mb-3">
              Beyond Academics
            </h1>

            <p className="text-xl sm:text-2xl text-neutral-600">
              A Proud{' '}
              <span className="font-medium text-neutral-800">
                भारतीय
              </span>
            </p>
          </header>

          <div className="space-y-12">

            {/* My World Outside Studies */}
            <section className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-neutral-800 mb-5">
                My World Outside Studies
              </h2>

              <p className="text-neutral-700 leading-relaxed mb-8 max-w-3xl">
                While my academic pursuits in discrete optimization and
                polytope theory consume a significant portion of my time,
                my interests span a much wider spectrum. I find immense joy
                in exploring subjects that enrich my understanding of the
                world and challenge my perspectives.
              </p>

              {/* Intellectual interests */}
              <div className="grid md:grid-cols-2 gap-8">

                <div className="border-l-2 border-primary-200 pl-5">
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                    History and the World
                  </h3>

                  <div className="space-y-4 text-neutral-700 leading-relaxed">
                    <p>
                      My curiosity often leads me to delve into topics like
                      Aviation — I'm a bit of an "av-geek" in general, having
                      had the good fortune to travel a fair bit at such a
                      young age. This interest extends to International
                      Affairs and global politics, as well as the fascinating
                      evolution of Military Doctrines and History.
                    </p>

                    <p>
                      These passions were deeply cultivated over almost nine
                      years of participating in Model UN debates, where I had
                      a near-perfect award placement record during my college
                      days. My debate style evolved considerably during this
                      period, moving from rhetoric to arguments driven by
                      facts and precedence. While powerful, this shift also
                      meant I couldn't always be up to the task with such a
                      demanding approach. These events were pivotal in shaping
                      my understanding of global dynamics, limited as they
                      may be.
                    </p>
                  </div>
                </div>

                <div className="border-l-2 border-amber-300 pl-5">
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                    Other Contemporary Interests
                  </h3>

                  <div className="space-y-4 text-neutral-700 leading-relaxed">
                    <p>
                      I also dedicate time to Environmental Sciences and
                      sustainability, recognizing their importance. In
                      particular, I take an ardent interest in the climate and
                      ecology of Peninsular India. This was driven initially
                      by curiousity about the Southwest Monsoon and associated
                      phenomena, the importance of this in not only the life
                      and livelihoods of the people of the regions I am native
                      to and grew up in, but also how it shapes the
                      socio-political narratives in these regions.
                    </p>

                    <p>
                      Occasionally, I'll deep-dive into the nuances of global
                      economics and market dynamics, appreciating their
                      interconnectedness. I wouldn't call myself anything more
                      than amateur though.
                    </p>

                    <p>
                      My interest in reading doesn't always live up to my
                      ambitious bucket list, but I genuinely try to make an
                      effort where and when I can.
                    </p>
                  </div>
                </div>
              </div>

              {/* Recreation */}
              <div className="mt-9 pt-8 border-t border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-800 mb-4">
                  Recreation & Personal Habits
                </h3>

                <div className="space-y-4 text-neutral-700 leading-relaxed">
                  <p>
                    For recreation, these days, I've been hooked on to Sudoku puzzles. Not long ago, I enjoyed the intellectual sparring of rapid
                    and blitz chess on chess.com, though I must admit I'm no
                    grandmaster; far from it! I used to be something of an
                    athlete, even a competitive swimmer in my younger days,
                    but now, my physical routine is less about competition and
                    more about maintaining regular fitness and workout
                    routines &mdash; definitely no bodybuilder aspirations
                    here! My interest in cricket, while once strong, is also
                    fading fast, but I can still appreciate a good match.
                  </p>

                  <p>
                    I also enjoy driving, especially on the more unpredictable
                    Indian roads and highways. Driving overseas, where people
                    follow rules to the T, can sometimes leave me feeling
                    bored, and perhaps even sleepy, given my native driving
                    experiences.
                  </p>

                  <p className="text-neutral-600 italic">
                    Above all, I am a creature of habit. I value routines and
                    find comfort in their predictability, extending even to my
                    food choices. This appreciation for repetitiveness helps
                    anchor my day-to-day life.
                  </p>
                </div>
              </div>
            </section>

            {/* Other activities */}
            <section className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-6 w-1 rounded-full bg-green-400" />

                <h2 className="text-2xl font-semibold text-neutral-800">
                  Other Activities
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">

                <div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                    Media & Entertainment
                  </h3>

                  <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc pl-5">
                    <li>
                      Comedy sequences from just about any source, as long as
                      it makes me laugh out loud (which isn't so hard, so bad
                      jokes are welcome).
                    </li>

                    <li>
                      Shounen anime and manga.
                    </li>

                    <li>
                      Interviews and Podcasts; generally long form
                      conversations which do more than the average reel.
                    </li>
                  </ul>
                </div>

                <div className="md:border-l md:border-neutral-200 md:pl-8">
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                    A Quiet Pursuit
                  </h3>

                  <p className="text-neutral-700 leading-relaxed">
                    Though I have failed in the past and continue to face
                    constraints regularly, efforts to keep up with my नित्य
                    कर्म - my daily duties encompasses any and all notions of
                    mindfulness, meditation, breathing exercises etc. I am
                    also a master procrastinator; I need to overcome this.
                    Therefore, these are my quiet pursuits.
                  </p>
                </div>

              </div>
            </section>

            {/* Philosophy & Expression */}
            <section className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-neutral-800 mb-7">
                Philosophy & Expression
              </h2>

              <div className="space-y-9">

                {/* Philosophy */}
                <div className="border-l-2 border-amber-300 pl-5">
                  <h3 className="text-lg font-semibold text-neutral-800 mb-3">
                    My Philosophical Stance
                  </h3>

                  <div className="space-y-4 text-neutral-700 leading-relaxed">
                    <p>
                      I come from a Iyer-Brahmin household and fundametally
                      believe in whatever that entails. I have no qualms in
                      admitting that I am imperfect vis-à-vis my ideals, but
                      I am ever aware of my fundamental goals, which
                      continually inspires me to grow and change.
                    </p>

                    <p>
                      My parents and extended family are my greatest role
                      models and my first gurus, whose wisdom continues to
                      guide me.
                    </p>

                    <p>
                      Naturally, my ideological views lean unapologetically
                      towards conservatism. However, this conviction is always
                      balanced by a deep respect for the choice and will of
                      individuals above anything else. So, even if you're very
                      dear to me, you're very <em>unlikely</em> to hear my
                      unfiltered opinions. That said, I still believe in
                      thoughtful discourse and the power of well-reasoned
                      arguments to bridge different perspectives or otherwise,
                      establish the differences in opinions clearly.
                    </p>
                  </div>
                </div>

                {/* Writing */}
                <div className="pt-8 border-t border-neutral-200">
                  <h3 className="text-lg font-semibold text-neutral-800 mb-4">
                    Other interests, and a little bit of who I really am
                  </h3>

                  <div className="space-y-4 text-neutral-700 leading-relaxed">
                    <p>
                      In the past, I had the good fortune to write from time
                      to time on a wide variety of topics and engage with some
                      wonderful people. You can find my contributions to PSG
                      Tech's online student magazine,{' '}
                      <em>The Bridge</em>,{' '}
                      <a
                        href="https://thebridge.psgtech.ac.in/author/nanakrish/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 underline decoration-primary-300 hover:decoration-primary-500 transition-colors duration-200"
                      >
                        here
                      </a>.
                    </p>

                    <p>
                      I consider myself rather indolent, thus reserving my very
                      best for when I am backed into a corner, so to speak.
                      This approach, while perhaps unconventional and
                      self-damaging, has often yielded my most focused and
                      creative work. Rest assured, however, that I am
                      bone-headed enough to stick it out until I've taken an
                      objective to its logical conclusion, no matter the cost.
                    </p>
                  </div>
                </div>

              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Miscellaneous;