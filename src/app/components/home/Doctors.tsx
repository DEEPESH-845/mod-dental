import Image from 'next/image'

const doctors = [
  {
    name: 'Dr. Neha Sharma',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/assets/images/dr-neha.jpg',
  },
  {
    name: 'Dr. Smit Patel',
    bio: 'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum.',
    image: '/assets/images/dr-smith.jpg',
  }
]

export default function Doctors() {
  return (
    <section id="doctors" className="py-20 bg-[#F6F1E9]">
            {/* Background Image */}

      {/* Content Overlay */}
      <div className="relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-3xl text-gray-700">Meet Us</h2>
            <div className="p-2 border border-stone-300">
              <Image
                src={doctors[0].image}
                alt={doctors[0].name}
                width={500}
                height={600}
                className="object-cover"
              />
            </div>
            <div className="flex space-x-4">
              <button className="bg-[#2C4F3C] text-white px-6 py-3">REQUEST AN APPOINTMENT</button>
              <button className="border border-gray-400 text-gray-600 hover:text-white hover:bg-[#2C4F3C] px-6 py-3">MEET OUR DOCTORS</button>
            </div>
          </div>

          {/* Center Column */}
          <div className="lg:col-span-1 space-y-12 text-gray-600 pt-16">
            <div>
              <h3 className="text-2xl text-[#4A7D5A] mb-2">{doctors[0].name}</h3>
              <p className="text-sm leading-relaxed">{doctors[0].bio}</p>
            </div>
            <div className="pt-12">
              <h3 className="text-2xl text-[#4A7D5A] mb-2 text-right">{doctors[1].name}</h3>
              <p className="text-sm leading-relaxed text-right">{doctors[1].bio}</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 text-right">
            <h2 className="text-3xl text-gray-700">Caring hands<br/>behind<br/>every smile.</h2>
            <div className="p-2 border border-stone-300 inline-block">
              <Image
                src={doctors[1].image}
                alt={doctors[1].name}
                width={500}
                height={600}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}
