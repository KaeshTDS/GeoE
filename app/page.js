export default function GeoExplorerKidsSalesPage() {
  const features = [
    {
      title: "Explore the World Visually",
      description:
        "Kids can discover countries, continents, landmarks, maps, flags, anthems, and exciting geography facts in one fun app.",
      icon: "🌍",
    },
    {
      title: "Made for Young Learners",
      description:
        "Colorful design, child-friendly navigation, and engaging learning experiences built for kids to enjoy independently or with parents.",
      icon: "🧒",
    },
    {
      title: "Interactive Learning",
      description:
        "Learning becomes memorable with voice guidance, visuals, country discovery, and playful exploration features.",
      icon: "🎧",
    },
    {
      title: "Great for Home and School",
      description:
        "Perfect for parents, teachers, homeschool activities, enrichment sessions, and self-learning time.",
      icon: "📚",
    },
  ];

  const highlights = [
    "Countries and continents exploration",
    "Fun learning for kids",
    "Audio-guided educational experience",
    "Beautiful interactive geography screens",
    "Simple one-time purchase flow",
    "Ideal for ages 5+",
  ];

  const steps = [
    {
      step: "1",
      title: "Click Buy Now",
      description: "Open your payment page and complete the purchase securely.",
    },
    {
      step: "2",
      title: "Download the App",
      description: "After payment, share your download instructions or file delivery details.",
    },
    {
      step: "3",
      title: "Start Exploring",
      description: "Let kids begin learning geography in a fun and interactive way.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-emerald-500/20" />
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/30 bg-white/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur">
                Learnuva Labs • Kids Educational App
              </div>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                GeoExplorer Kids
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
                  Discover the world through play
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
                A fun and engaging geography learning app for children to explore countries,
                continents, landmarks, flags, and more in an exciting interactive experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://your-payment-link-here.com"
                  className="rounded-2xl bg-cyan-400 px-6 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:scale-[1.02]"
                >
                  Buy Now
                </a>
                <a
                  href="#features"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
                >
                  See Features
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 md:max-w-xl md:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 backdrop-blur"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="mx-auto max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-cyan-500/10 backdrop-blur">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-sky-400 via-blue-500 to-emerald-400 p-6 text-slate-950">
                  <div className="text-7xl">🌍</div>
                  <h2 className="mt-4 text-3xl font-bold">Explore. Learn. Grow.</h2>
                  <p className="mt-3 text-base font-medium text-slate-900/80">
                    Build world knowledge with a joyful geography adventure designed for kids.
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="rounded-2xl bg-slate-900/70 p-4">
                    <div className="text-sm text-slate-400">Best for</div>
                    <div className="mt-1 text-lg font-semibold">Parents, teachers, and young explorers</div>
                  </div>
                  <div className="rounded-2xl bg-slate-900/70 p-4">
                    <div className="text-sm text-slate-400">Purchase</div>
                    <div className="mt-1 text-lg font-semibold">One-time payment / direct link checkout</div>
                  </div>
                  <div className="rounded-2xl bg-slate-900/70 p-4">
                    <div className="text-sm text-slate-400">Delivery</div>
                    <div className="mt-1 text-lg font-semibold">Download instructions after payment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold md:text-4xl">Why families love GeoExplorer Kids</h2>
          <p className="mt-4 text-slate-300">
            Designed to make geography fun, memorable, and accessible for children through interactive exploration.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 p-8">
            <h2 className="text-3xl font-bold">What’s included</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Interactive geography learning",
                "Countries and continents discovery",
                "Educational visuals and guided exploration",
                "Kid-friendly learning experience",
                "Perfect for screen-based learning time",
                "Easy direct purchase access",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-slate-200">
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">Special Offer</div>
            <h2 className="mt-3 text-3xl font-bold">Ready to start the journey?</h2>
            <p className="mt-4 text-slate-200">
              Add your price, your payment link, and your delivery method to start selling GeoExplorer Kids online.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-950/50 p-5">
              <div className="text-sm text-slate-400">Price</div>
              <div className="mt-1 text-4xl font-bold">RM XX</div>
              <div className="mt-2 text-sm text-slate-300">Replace this with your actual selling price.</div>
            </div>

            <a
              href="https://your-payment-link-here.com"
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-bold text-slate-950 transition hover:scale-[1.01]"
            >
              Purchase GeoExplorer Kids
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold md:text-4xl">How it works</h2>
          <p className="mt-4 text-slate-300">
            A simple setup for selling your app using your own checkout or payment page.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 text-xl font-bold text-slate-950">
                {item.step}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-emerald-500/20 p-8 text-center backdrop-blur md:p-12">
          <h2 className="text-3xl font-bold md:text-5xl">Bring the world into your child’s hands</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Launch your GeoExplorer Kids sales page with your payment link and start selling today.
          </p>
          <a
            href="https://your-payment-link-here.com"
            className="mt-8 inline-flex rounded-2xl bg-cyan-400 px-8 py-4 text-lg font-bold text-slate-950 shadow-xl shadow-cyan-500/25 transition hover:scale-[1.02]"
          >
            Buy GeoExplorer Kids Now
          </a>
        </div>
      </section>
    </div>
  );
}
