/* eslint-disable max-len */
import { CubeTransparentIcon } from '@heroicons/react/20/solid';

export function ContentWithTestimonial() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Deploy faster
          </p>
          <h1
            id="how-does-it-work"
            data-aos="fade-up"
            className="info-section mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            How Does VECTTOR Work?
          </h1>
          <p
            data-aos="fade-up"
            className="info-section mt-6 text-xl leading-8 text-gray-700"
          >
            It is believed to stimulate your body to produce proteins called
            Neuropeptides, which cause the smallest blood vessels to open and
            increase oxygenation throughout the body, thus stopping Chronic
            Pain.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
              />
            </svg>
            <figure className="border-l border-indigo-600 pl-8">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>
                  “Vel ultricies morbi odio facilisi ultrices accumsan donec
                  lacus purus. Lectus nibh ullamcorper ac dictum justo in
                  euismod. Risus aenean ut elit massa. In amet aliquet eget
                  cras. Sem volutpat enim tristique.”
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80"
                  alt=""
                  className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">Steve Sacks</div>
                  <div className="text-gray-600">@vecttorMedical</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <h2
              data-aos="fade-up"
              className="info-section mt-16 text-2xl font-bold tracking-tight text-gray-900"
            >
              What Conditions Are Treated With VECTTOR Therapy?
            </h2>

            <ul
              role="list"
              data-aos="fade-up"
              className="info-section mt-8 max-w-xl space-y-8 text-gray-600"
            >
              <li className="flex gap-x-3">
                <CubeTransparentIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />

                <span>
                  <strong className="font-semibold text-gray-900">
                    Complex Regional Pain Syndrome also known as RSD
                  </strong>{' '}
                </span>
              </li>
              <li className="flex gap-x-3">
                <CubeTransparentIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />

                <span>
                  <strong className="font-semibold text-gray-900">
                    Asthma, Diabetes, Sickle Cell Disease, Rheumatologic
                    disorders
                  </strong>{' '}
                </span>
              </li>
              <li className="flex gap-x-3">
                <CubeTransparentIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Spinal Pain, Muscle Pain
                  </strong>{' '}
                </span>
              </li>
              <li className="flex gap-x-3">
                <CubeTransparentIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Pain due to Rhuematoid Arthritis
                  </strong>{' '}
                </span>
              </li>
            </ul>

            <h2
              data-aos="fade-up"
              className="info-section mt-16 text-2xl font-bold tracking-tight text-gray-900"
            >
              What Conditions Are Treated With VECTTOR Therapy?
            </h2>

            <p className="info-section" data-aos="fade-up">
              During therapy, small flat rubber adhesive discs (Electrodes) are
              applied to your skin. They&apos;re hooked up to the VECTTOR
              machine, which sends an alternating electrical current to the
              electrodes. This treatment is monitored carefully to ensure its
              effectiveness.
            </p>

            <h2
              data-aos="fade-up"
              className="info-section mt-16 text-2xl font-bold tracking-tight text-gray-900"
            >
              VECTTOR: A SOLUTION, NOT JUST A TREATMENT
            </h2>

            <p className="info-section" data-aos="fade-up">
              The number of sessions varies per individual. Patients are trained
              on using VECTTOR, and once comfortable, can continue the therapy
              at home. It&lsquo;s not just a temporary solution but a long-term
              relief method.
            </p>

            <h2
              data-aos="fade-up"
              className="info-section mt-16 text-2xl font-bold tracking-tight text-gray-900"
            >
              CLINICAL SUPPORT AND CREDENTIALS
            </h2>

            <ul
              role="list"
              data-aos="fade-up"
              className="info-section mt-8 max-w-xl space-y-8 text-gray-600"
            >
              <li className="flex gap-x-3">
                <CubeTransparentIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />

                <span>
                  <strong className="font-semibold text-gray-900">
                    FDA cleared.
                  </strong>{' '}
                </span>
              </li>
              <li className="flex gap-x-3">
                <CubeTransparentIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />

                <span>
                  <strong className="font-semibold text-gray-900">
                    Designated as a Non-Risk Device by the FDA.
                  </strong>{' '}
                </span>
              </li>
              <li className="flex gap-x-3">
                <CubeTransparentIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    No reportable side effects over its 25-year development and
                    use.
                  </strong>{' '}
                </span>
              </li>
              <li className="flex gap-x-3">
                <CubeTransparentIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Clinical Understanding & Technology Potential
                  </strong>{' '}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentWithTestimonial;
