import Image from 'next/image';

export default function ProjectsSection() {
	return (
		<section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Featured Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
						<div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src="/code.jpg" alt= "Project" fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2">CacheCollective - Learning Management System</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">Group Project aimed at creating a LMS (Learning Managment System) similar to one commonly used at
								schools and universities within a group environment. It is coded in C# using the ASP.NET Framework.</p>
								<div className="flex gap-2">
									<a href="https://github.com/Torch178/CacheCollective-LMS-CS_3750" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>
							</div>
						</div>
						<div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-video bg-gray-700 relative">
                                <Image src="/code.jpg" alt= "Project" fill className="object-cover" />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Witch&#39;s Cauldron Web App</h3>
                                <p className="text-sm sm:text-base text-gray-300 mb-4">A full-stack web application coded in Python using the Django Web Framework, alongside the Django REST API.
                                It is a virtual storefront with a home page, about us page, store listings, and detailed views for individual store items.
                                It has full implementation of an ordering system, user profiles, shopping cart, order history, search filters, and etc.</p>
                                <div className="flex gap-2">
                                    <a href="https://github.com/Torch178/Witchs-Cauldron-Django-WebApp" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                                        View Project →
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-video bg-gray-700 relative">
                                <Image src="/code.jpg" alt= "Project" fill className="object-cover" />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Pizza Web App</h3>
                                <p className="text-sm sm:text-base text-gray-300 mb-4">A simple web application simulating an ordering system for a local pizza chain.</p>
                                <div className="flex gap-2">
                                    <a href="https://github.com/Torch178/PizzaWebApp" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                                        View Project →
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-video bg-gray-700 relative">
                                <Image src="/code.jpg" alt= "Project" fill className="object-cover" />
                            </div>
                            <div className="p-4 sm:p-6">
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">CV Generator</h3>
                                <p className="text-sm sm:text-base text-gray-300 mb-4">This app takes information from the user, stores it in a data model, and spits out that data into a
                                formatted web page meant to represent a CV (Curriculum Vitae) which can be downloaded as a pdf.
                                A CV is a resume, but with more detail and information, and is used in academia and high-level professional jobs.</p>
                                <div className="flex gap-2">
                                    <a href="https://github.com/Torch178/CV-Generator" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
                                        View Project →
                                    </a>
                                </div>
                            </div>
                        </div>
				</div>
			</div>
		</section>
	);
}
