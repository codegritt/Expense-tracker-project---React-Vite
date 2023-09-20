export const Home = () => {
  return (
    <>
      <div
        style={{ border: "2px solid red" }}
        className="bg-[#1f2937] text-white pb-10"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h1 className="w-9/12 ml-24 mt-36 text-left font-semibold p-5 text-5xl">
              Travel and expense management for growing business
            </h1>
            <p className="w-9/12 ml-24 text-left font-semibold p-5 text-lg">
              Experience the convenience of simplified travel booking, faster
              expense reporting, and effective cost control. With Zoho Expense,
              take the first step to revolutionize the way you manage travel and
              expense.
            </p>
            <div className="w-full ml-24 text-left font-semibold p-5 text-lg">
              <a
                href="#"
                className="text-gray-800 border dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                START A FREE TRIAL
              </a>
              <a
                href="#"
                className="text-gray-800 border dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                REQUEST A DEMO
              </a>
            </div>
          </div>
          <div className="mt-24 w-11/12 h-11/12">
            <img src="../src/assets/expenses.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 xs:px-12 py-8">
        <h1 className="p-2 text-center font-semibold text-xl">
          TRUSTED BY THOUSANDS OF COMPANIES ACROSS 150+ COUNTRIES
        </h1>
        <div style={{ height: "100px" }} className="slider">
          <div className="slide-track">
            <div style={{ height: "300px" }} className="slide">
              <img
                src="../src/assets/Adidas-Logo-PNG.png"
                alt=""
                width="190"
                height="170"
              />
            </div>
            <div style={{ height: "300px" }} className="slide bg-purple-500">
              <img
                src="../src/assets/puma.png"
                alt=""
                width="190"
                height="170"
              />
            </div>
            <div className="slide bg-blue-500">
              {" "}
              <img
                src="../src/assets/Fila_logo.png"
                alt=""
                width="190"
                height="170"
              />
            </div>
            <div className="slide bg-indigo-500">4</div>
            <div className="slide bg-pink-500">5</div>
            <div className="slide bg-green-500">6</div>
            <div className="slide bg-yellow-500">7</div>
            <div className="slide bg-red-500">8</div>
            <div className="slide bg-gray-500 text-white">9</div>
            <div className="slide bg-blue-800">0</div>

            <div className="slide">
              <img
                src="../src/assets/Adidas-Logo-PNG.png"
                alt=""
                width="190"
                height="170"
              />
            </div>
            <div className="slide">
              {" "}
              <img
                src="../src/assets/puma.png"
                alt=""
                width="190"
                height="170"
              />
            </div>
            <div className="slide bg-blue-500">
              <img
                src="../src/assets/Fila_logo.png"
                alt=""
                width="190"
                height="170"
              />
            </div>
            <div className="slide bg-indigo-500">4</div>
            <div className="slide bg-pink-500">5</div>
            <div className="slide bg-green-500">6</div>
            <div className="slide bg-yellow-500">7</div>
            <div className="slide bg-red-500">8</div>
            <div className="slide bg-gray-500 text-white">9</div>
            <div className="slide bg-blue-800">0</div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Company = () => {
  return (
    <div style={{ border: "2px solid red" }} className="">
      hello
    </div>
  );
};

export const Features = () => {
  return (
    <>
      <div
        style={{ border: "2px solid red" }}
        className="text-3xl font-bold underline"
      >
        <div className="relative font-inter antialiased">
          <main className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 py-24">
              <div
                className="max-w-sm mx-auto md:max-w-none grid lg:grid-cols-4 md:-mx-6 text-sm"
                x-data="{ isAnnual: true }"
              >
                <section className="md:contents [&>div:first-child]:pt-10 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:pb-10 [&>div:last-child]:rounded-b-2xl">
                  <div className="relative bg-white dark:bg-slate-900 px-6 flex flex-col justify-end">
                    <div className="pb-5 md:border-b border-slate-200 dark:border-slate-700">
                      <div className="max-md:text-center">
                        <div className="inline-flex items-center whitespace-nowrap">
                          <div className="text-sm text-slate-500 mr-2 md:max-lg:sr-only">
                            Monthly
                          </div>
                          <div className="relative">
                            <input
                              type="checkbox"
                              id="toggle"
                              className="peer sr-only"
                              x-model="isAnnual"
                            />
                            <label className="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-slate-400 px-0.5 outline-slate-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow-sm before:transition-transform before:duration-150 peer-checked:bg-indigo-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-indigo-500">
                              <span className="sr-only">Pay Yearly</span>
                            </label>
                          </div>
                          <div className="text-sm text-slate-500 ml-2">
                            Yearly{" "}
                            <span className="text-emerald-500">(-20%)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-1"
                    aria-hidden="true"
                  >
                    <div className="py-2 text-slate-900 font-medium mt-4">
                      Platform
                    </div>
                  </div>

                  <div
                    className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-2"
                    aria-hidden="true"
                  >
                    <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                      Account Access
                    </div>
                  </div>

                  <div
                    className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-3"
                    aria-hidden="true"
                  >
                    <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                      Custom Domains
                    </div>
                  </div>

                  <div
                    className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-4"
                    aria-hidden="true"
                  >
                    <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                      Receipts Forward
                    </div>
                  </div>

                  <div
                    className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-5"
                    aria-hidden="true"
                  >
                    <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                      Supplier Management
                    </div>
                  </div>

                  <div
                    className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-6"
                    aria-hidden="true"
                  >
                    <div className="py-2 text-slate-900 font-medium mt-4">
                      Features
                    </div>
                  </div>

                  <div
                    className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-7"
                    aria-hidden="true"
                  >
                    <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                      Generate Public URLs
                    </div>
                  </div>

                  <div
                    className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-8"
                    aria-hidden="true"
                  >
                    <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                      API Integrations
                    </div>
                  </div>

                  <div
                    className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-9"
                    aria-hidden="true"
                  >
                    <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                      Extra Add-ons
                    </div>
                  </div>

                  <div
                    className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-10"
                    aria-hidden="true"
                  >
                    <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                      Admin Roles
                    </div>
                  </div>

                  <div
                    className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-11"
                    aria-hidden="true"
                  >
                    <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                      Admin Roles
                    </div>
                  </div>

                  <div
                    className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-12"
                    aria-hidden="true"
                  >
                    <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                      Enterprise Add-ons
                    </div>
                  </div>

                  <div
                    className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-[13]"
                    aria-hidden="true"
                  >
                    <div className="py-2 text-slate-900 font-medium mt-4">
                      Support
                    </div>
                  </div>

                  <div
                    className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-[14]"
                    aria-hidden="true"
                  >
                    <div className="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">
                      Custom Connection
                    </div>
                  </div>
                </section>

                <section className="md:contents [&>div:first-child]:pt-10 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:pb-10 [&>div:last-child]:rounded-b-2xl">
                  <div className="relative bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end">
                    <div className="grow mb-5">
                      <div className="font-semibold text-slate-900 dark:text-slate-200 mb-0.5">
                        Essential
                      </div>
                      <div className="mb-1">
                        <span className="text-xl font-medium text-slate-900 dark:text-slate-200">
                          $
                        </span>
                        <span
                          className="text-3xl font-bold text-slate-900 dark:text-slate-200"
                          x-text="isAnnual ? '29' : '35'"
                        >
                          29
                        </span>
                        <span className="text-slate-500 font-medium">/mo</span>
                      </div>
                      <div className="text-sm text-slate-500">
                        Unlimited placeholder texts.
                      </div>
                    </div>
                    <div className="pb-4 border-b border-slate-200 dark:border-slate-700">
                      <a
                        className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-2.5 py-1.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 group"
                        href="#0"
                      >
                        Get Started{" "}
                        <span className="tracking-normal text-indigo-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          -&gt;
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-1">
                    <div className="py-2 text-slate-900 font-medium mt-4 md:sr-only">
                      Platform
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-2">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        400 <span className="md:sr-only">Account Access</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-3">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        4 <span className="md:sr-only">Custom Domains</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-4">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        Unlimited{" "}
                        <span className="md:sr-only">Receipts Forward</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-5">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        1{" "}
                        <span className="md:sr-only">Supplier Management</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-6">
                    <div className="py-2 text-slate-900 font-medium mt-4 md:sr-only">
                      Features
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-7">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        <span className="md:sr-only">Generate Public URLs</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-8">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        <span className="md:sr-only">API Integrations</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-9">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        <span className="md:sr-only">Extra Add-ons</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-10">
                    <div className="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
                      <span>
                        <span className="md:sr-only">Admin Roles</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-11">
                    <div className="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
                      <span>
                        <span className="md:sr-only">Admin Roles</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-12">
                    <div className="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
                      <span>
                        <span className="md:sr-only">Enterprise Add-ons</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-[13]">
                    <div className="py-2 text-slate-900 font-medium mt-4 sr-only">
                      Support
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-[14]">
                    <div className="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
                      <span>
                        <span className="md:sr-only">Custom Connection</span>
                      </span>
                    </div>
                  </div>
                </section>

                <section className="md:contents [&>div:first-child]:pt-10 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:pb-10 [&>div:last-child]:rounded-b-2xl dark">
                  <div className="relative bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end">
                    <div className="absolute top-0 right-0 mr-6 -mt-4">
                      <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">
                        Most Popular
                      </div>
                    </div>
                    <div className="grow mb-5">
                      <div className="font-semibold text-slate-900 dark:text-slate-200 mb-0.5">
                        Perform
                      </div>
                      <div className="mb-1">
                        <span className="text-xl font-medium text-slate-900 dark:text-slate-200">
                          $
                        </span>
                        <span
                          className="text-3xl font-bold text-slate-900 dark:text-slate-200"
                          x-text="isAnnual ? '49' : '54'"
                        >
                          49
                        </span>
                        <span className="text-slate-500 font-medium">/mo</span>
                      </div>
                      <div className="text-sm text-slate-500">
                        Unlimited placeholder texts.
                      </div>
                    </div>
                    <div className="pb-4 border-b border-slate-200 dark:border-slate-700">
                      <a
                        className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-2.5 py-1.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 group"
                        href="#0"
                      >
                        Get Started{" "}
                        <span className="tracking-normal text-indigo-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          -&gt;
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-1">
                    <div className="py-2 text-slate-900 font-medium mt-4 md:sr-only">
                      Platform
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-2">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        800 <span className="md:sr-only">Account Access</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-3">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        10 <span className="md:sr-only">Custom Domains</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-4">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        Unlimited{" "}
                        <span className="md:sr-only">Receipts Forward</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-5">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        10{" "}
                        <span className="md:sr-only">Supplier Management</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-6">
                    <div className="py-2 text-slate-900 font-medium mt-4 md:sr-only">
                      Features
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-7">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        <span className="md:sr-only">Generate Public URLs</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-8">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        <span className="md:sr-only">API Integrations</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-9">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        <span className="md:sr-only">Extra Add-ons</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-10">
                    <div className="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
                      <span>
                        <span className="md:sr-only">Admin Roles</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-11">
                    <div className="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
                      <span>
                        <span className="md:sr-only">Admin Roles</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-12">
                    <div className="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
                      <span>
                        <span className="md:sr-only">Enterprise Add-ons</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-[13]">
                    <div className="py-2 text-slate-900 font-medium mt-4 sr-only">
                      Support
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-[14]">
                    <div className="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
                      <span>
                        <span className="md:sr-only">Custom Connection</span>
                      </span>
                    </div>
                  </div>
                </section>

                <section className="md:contents [&>div:first-child]:pt-10 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:pb-10 [&>div:last-child]:rounded-b-2xl">
                  <div className="relative bg-white dark:bg-slate-900 px-6 flex flex-col justify-end">
                    <div className="grow mb-5">
                      <div className="font-semibold text-slate-900 dark:text-slate-200 mb-0.5">
                        Enterprise
                      </div>
                      <div className="mb-1">
                        <span className="text-xl font-medium text-slate-900 dark:text-slate-200">
                          $
                        </span>
                        <span
                          className="text-3xl font-bold text-slate-900 dark:text-slate-200"
                          x-text="isAnnual ? '79' : '85'"
                        >
                          79
                        </span>
                        <span className="text-slate-500 font-medium">/mo</span>
                      </div>
                      <div className="text-sm text-slate-500">
                        Unlimited placeholder texts.
                      </div>
                    </div>
                    <div className="pb-4 border-b border-slate-200 dark:border-slate-700">
                      <a
                        className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-2.5 py-1.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 group"
                        href="#0"
                      >
                        Get Started{" "}
                        <span className="tracking-normal text-indigo-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                          -&gt;
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-1">
                    <div className="py-2 text-slate-900 font-medium mt-4 md:sr-only">
                      Platform
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-2">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        Unlimited{" "}
                        <span className="md:sr-only">Account Access</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-3">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        Unlimited{" "}
                        <span className="md:sr-only">Custom Domains</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-4">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        Unlimited{" "}
                        <span className="md:sr-only">Receipts Forward</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-5">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        Unlimited{" "}
                        <span className="md:sr-only">Supplier Management</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-6">
                    <div className="py-2 text-slate-900 font-medium mt-4 md:sr-only">
                      Features
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-7">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        <span className="md:sr-only">Generate Public URLs</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-8">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        <span className="md:sr-only">API Integrations</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-9">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        <span className="md:sr-only">Extra Add-ons</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-10">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        <span className="md:sr-only">Admin Roles</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-11">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        <span className="md:sr-only">Admin Roles</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-12">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        <span className="md:sr-only">Enterprise Add-ons</span>
                      </span>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-[13]">
                    <div className="py-2 text-slate-900 font-medium mt-4 sr-only">
                      Support
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-[14]">
                    <div className="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                      <svg
                        className="shrink-0 fill-emerald-500 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="9"
                      >
                        <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                      </svg>
                      <span>
                        <span className="md:sr-only">Custom Connection</span>
                      </span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export const Contact = () => {
  return (
    <div
      style={{ border: "2px solid red" }}
      className="text-3xl font-bold underline"
    >
      This is the Contact
    </div>
  );
};
