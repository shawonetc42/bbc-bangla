import React from 'react'


import Section1bg from '../../components/TechWind/Section1bg'



function index() {
  return (
    <div>
      <Section1bg/>

      {/* <!-- Start Hero --> */}
        <section class="relative table w-full py-32 lg:py-40 bg-[url('../../public/Upwork.png">
            <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
            <div class="container">
                <div class="grid grid-cols-1 pb-8 text-center mt-10">
                    <h3 class="mb-3 text-3xl leading-normal font-medium text-white">Portfolio & Works</h3>

                    <p class="text-slate-300 text-lg max-w-xl mx-auto">Showcase of Our Awesome Works in Three Columns</p>
                </div>
                 {/* <!--end grid--> */}
            </div>
            {/* <!--end container--> */}
            
            <div class="absolute text-center z-10 bottom-5 right-0 left-0 mx-3">
                <ul class="breadcrumb tracking-[0.5px] breadcrumb-light mb-0 inline-block">
                   <li class="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><a href="index.html">Techwind</a></li>
                   <li class="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><a href="">Portfolio</a></li>
                    <li class="inline breadcrumb-item uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Classic</li>
                </ul>
            </div>
        </section>
        {/* <!--end section--> */}
        <div class="relative">
            <div class="shape absolute right-0 sm:-bottom-px -bottom-[2px] left-0 overflow-hidden z-1 text-white dark:text-slate-900">
                <svg class="w-full h-auto" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        {/* <!-- End Hero --> */}

        {/* <!-- Start Section--> */}
        <section class="relative md:py-24 py-16">
            <div class="container">
                <div class="grid grid-cols-1 items-center gap-[30px]">
                    <div class="filters-group-wrap text-center">
                        <div class="filters-group">
                            <ul class="mb-0 list-none container-filter-box filter-options">
                                <li class="inline-block font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md transition duration-500 active" data-group="all">All</li>
                                <li class="inline-block font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md transition duration-500" data-group="branding">Branding</li>
                                <li class="inline-block font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md transition duration-500" data-group="designing">Designing</li>
                                <li class="inline-block font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md transition duration-500" data-group="photography">Photography</li>
                                <li class="inline-block font-medium text-base mx-1.5 mb-3 py-1 px-3 cursor-pointer relative text-slate-400 border border-gray-100 dark:border-gray-700 rounded-md transition duration-500" data-group="development">Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!--grid--> */}

                <div  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0 mt-0 px-10">
                    <div class="lg:w-1/3 md:w-1/3 p-4 picture-item" data-groups='["branding"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <a href="portfolio-detail-one.html"><img src="/Upwork.png" class="rounded-md" alt=""/></a>
                            <div class="content pt-3">
                                <h5 class="mb-1"><a href="portfolio-detail-one.html" class="hover:text-indigo-600 transition-all duration-500 font-semibold">Iphone mockup</a></h5>
                                <h6 class="text-slate-400">Branding</h6>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/3 md:w-1/3 p-4 picture-item" data-groups='["designing"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <a href="portfolio-detail-one.html"><img src="/Upwork.png" class="rounded-md" alt=""/></a>
                            <div class="content pt-3">
                                <h5 class="mb-1"><a href="portfolio-detail-one.html" class="hover:text-indigo-600 transition-all duration-500 font-semibold">Mockup Collection</a></h5>
                                <h6 class="text-slate-400">Mockup</h6>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/3 md:w-1/3 p-4 picture-item" data-groups='["photography"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <a href="portfolio-detail-one.html"><img src="/Upwork.png" class="rounded-md" alt=""/></a>
                            <div class="content pt-3">
                                <h5 class="mb-1"><a href="portfolio-detail-one.html" class="hover:text-indigo-600 transition-all duration-500 font-semibold">Abstract images</a></h5>
                                <h6 class="text-slate-400">Abstract</h6>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/3 md:w-1/3 p-4 picture-item" data-groups='["development"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <a href="portfolio-detail-one.html"><img src="/Upwork.png" class="rounded-md" alt=""/></a>
                            <div class="content pt-3">
                                <h5 class="mb-1"><a href="portfolio-detail-one.html" class="hover:text-indigo-600 transition-all duration-500 font-semibold">Yellow bg with Books</a></h5>
                                <h6 class="text-slate-400">Books</h6>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/3 md:w-1/3 p-4 picture-item" data-groups='["branding"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <a href="portfolio-detail-one.html"><img src="/Upwork.png" class="rounded-md" alt=""/></a>
                            <div class="content pt-3">
                                <h5 class="mb-1"><a href="portfolio-detail-one.html" class="hover:text-indigo-600 transition-all duration-500 font-semibold">Company V-card</a></h5>
                                <h6 class="text-slate-400">V-card</h6>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/3 md:w-1/3 p-4 picture-item" data-groups='["branding"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <a href="portfolio-detail-one.html"><img src="/Upwork.png" class="rounded-md" alt=""/></a>
                            <div class="content pt-3">
                                <h5 class="mb-1"><a href="portfolio-detail-one.html" class="hover:text-indigo-600 transition-all duration-500 font-semibold">Mockup box with paints</a></h5>
                                <h6 class="text-slate-400">Photography</h6>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/3 md:w-1/3 p-4 picture-item" data-groups='["designing"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <a href="portfolio-detail-one.html"><img src="/Upwork.png" class="rounded-md" alt=""/></a>
                            <div class="content pt-3">
                                <h5 class="mb-1"><a href="portfolio-detail-one.html" class="hover:text-indigo-600 transition-all duration-500 font-semibold">Coffee cup</a></h5>
                                <h6 class="text-slate-400">Cups</h6>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/3 md:w-1/3 p-4 picture-item" data-groups='["development"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <a href="portfolio-detail-one.html"><img src="/Upwork.png" class="rounded-md" alt=""/></a>
                            <div class="content pt-3">
                                <h5 class="mb-1"><a href="portfolio-detail-one.html" class="hover:text-indigo-600 transition-all duration-500 font-semibold">Pen and article</a></h5>
                                <h6 class="text-slate-400">Article</h6>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/3 md:w-1/3 p-4 picture-item" data-groups='["photography"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <a href="portfolio-detail-one.html"><img src="/Upwork.png" class="rounded-md" alt=""/></a>
                            <div class="content pt-3">
                                <h5 class="mb-1"><a href="portfolio-detail-one.html" class="hover:text-indigo-600 transition-all duration-500 font-semibold">White mockup box</a></h5>
                                <h6 class="text-slate-400">Color</h6>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/3 md:w-1/3 p-4 picture-item" data-groups='["photography"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <a href="portfolio-detail-one.html"><img src="/Upwork.png" class="rounded-md" alt=""/></a>
                            <div class="content pt-3">
                                <h5 class="mb-1"><a href="portfolio-detail-one.html" class="hover:text-indigo-600 transition-all duration-500 font-semibold">Logo Vectors</a></h5>
                                <h6 class="text-slate-400">Logos</h6>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/3 md:w-1/3 p-4 picture-item" data-groups='["branding"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <a href="portfolio-detail-one.html"><img src="/Upwork.png" class="rounded-md" alt=""/></a>
                            <div class="content pt-3">
                                <h5 class="mb-1"><a href="portfolio-detail-one.html" class="hover:text-indigo-600 transition-all duration-500 font-semibold">Black and white T-shirt</a></h5>
                                <h6 class="text-slate-400">Clothes</h6>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/3 md:w-1/3 p-4 picture-item" data-groups='["branding"]'>
                        <div class="group relative block overflow-hidden rounded-md transition-all duration-500">
                            <a href="portfolio-detail-one.html"><img src="/Upwork.png" class="rounded-md" alt=""/></a>
                            <div class="content pt-3">
                                <h5 class="mb-1"><a href="portfolio-detail-one.html" class="hover:text-indigo-600 transition-all duration-500 font-semibold">Yellow bg with cellphone</a></h5>
                                <h6 class="text-slate-400">Cellphone</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid md:grid-cols-12 grid-cols-1 mt-8">
                    <div class="md:col-span-12 text-center">
                        <nav aria-label="Page navigation example">
                            <ul class="inline-flex items-center -space-x-px">
                                <li>
                                    <a href="#" class="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-l-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                        <i class="uil uil-angle-left text-[20px]"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">1</a>
                                </li>
                                <li>
                                    <a href="#" class="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">2</a>
                                </li>
                                <li>
                                    <a href="#" aria-current="page" class="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600">3</a>
                                </li>
                                <li>
                                    <a href="#" class="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">4</a>
                                </li>
                                <li>
                                    <a href="#" class="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">5</a>
                                </li>
                                <li>
                                    <a href="#" class="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-r-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                        <i class="uil uil-angle-right text-[20px]"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!--end container--> */}

            <div class="container md:mt-24 mt-16">
                <div class="grid grid-cols-1 text-center">
                    <span class="text-slate-400 mb-4">Available for freelance projects</span>
                    <h3 class="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Do you have designing project </h3>

                    <div class="mt-6">
                        <a href="contact-one.html" class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><i class="uil uil-phone"></i> Contact us</a>
                    </div>
                </div>
                {/* <!--end grid--> */}
            </div>
            {/* <!--end container--> */}
        </section>
        {/* <!--end section-->
        <!-- End Section--> */}

        
      
     
    </div>
  )
}

export default index