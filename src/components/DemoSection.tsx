export default function DemoSection() {
  const testimonials = [
    { text: "The first time my mother could tell us she loved us after her stroke... we all cried.", author: "Sarah Tan", relation: "Daughter of stroke patient", credential: false },
    { text: "Setup was faster than putting on her reading glasses. Incredible technology.", author: "Michael Lim", relation: "Father of stroke patient", credential: false },
  ];

  return (
    <section className="section-y" id="demo">
      <div className="container-w">
        <div className="text-center mb-12">
          <h2 className="h2 mb-4 dark:text-white">See the Moment Everything Changes</h2>
          <p className="body-lg max-w-[50ch] mx-auto dark:text-slate-300">
            Watch how Neural Drive gives voice back to those who need it most, in just seconds.
          </p>
        </div>
        
        <div className="mb-8 lg:mb-12">
          <div className="card p-3 sm:p-4 lg:p-6">
            <div className="aspect-video w-full rounded-lg lg:rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/CLR19Y1oNJ4"
                title="Neural Drive Demo - Breakthrough Communication Technology"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ border: 'none' }}
              />
            </div>
            <div className="mt-3 lg:mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-3 lg:gap-4">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h3.763l7.79 3.894A1 1 0 0018 15V3zM3.5 9.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
                  </svg>
                  Captions available
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Click to play
                </span>
              </div>
              <a 
                href="https://youtu.be/CLR19Y1oNJ4?feature=shared" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium transition-colors text-center sm:text-right"
              >
                Watch on YouTube →
              </a>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="card text-center">
              <div className="mb-4">
                <svg className="w-8 h-8 text-teal-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <p className="body mb-4 italic dark:text-slate-300">&quot;{t.text}&quot;</p>
              <footer className="text-sm">
                <div className="font-semibold text-slate-900 dark:text-white">{t.author}</div>
                <div className="text-slate-600 dark:text-slate-400">{t.relation}</div>
                {t.credential && (
                  <div className="mt-2 inline-flex items-center gap-1 text-emerald-600 text-xs">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Credential verified
                  </div>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
