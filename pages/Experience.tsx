const Experience = () => {
  return (
    <section
      className='container mx-auto p-4 bg-pink-200' // Changed to a single color
      id='experience'>
      <h1
        className='text-5xl font-bold text-center mb-10 text-white shadow-md 
               transition duration-300 transform hover:scale-105 
               bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500'>
        Experience dan My Project
      </h1>

      {/* Experience Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {/* Experience Item 1 */}
        <div className='bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:rotate-1 hover:translate-y-1'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-3'>
            Prestasi Non-Akademik
          </h2>
          <p className='text-md text-gray-700 mb-2'>
            Saat di kelas 5 SD saya mengikuti FLS2N Kriya Anyam dan memenangkan
            juara 3. Saat SMK, saya mengikuti ekskul Paskibra dan berkesempatan
            membawa piala di berbagai ajang lomba baris berbaris.
          </p>
        </div>

        {/* Experience Item 2: Project 1 with GitHub Link */}
        <div className='bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:rotate-1 hover:translate-y-1'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-3'>
            Project 1: Toko Sepatu
          </h2>
          <p className='text-md text-gray-700 mb-2'>
            Web pertama yang saya buat, tentang olshop.
            <a
              href='https://github.com/mahadewizx/toko-sepatu'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:underline'>
              View on GitHub
            </a>
          </p>
          <div className='flex gap-2 mt-2'>
            <span className='bg-purple-500 text-white px-3 py-1 rounded-full text-xs'>
              #Tugas
            </span>
            <span className='bg-purple-500 text-white px-3 py-1 rounded-full text-xs'>
              #PHP
            </span>
          </div>
        </div>

        {/* Experience Item 3: Project 2 with Itch.io Link */}
        <div className='bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:rotate-1 hover:translate-y-1'>
          <h2 className='text-2xl font-semibold text-gray-800 mb-3'>
            Project 2: Game Knight Dewi
          </h2>
          <p className='text-md text-gray-700 mb-2'>
            A 2D game developed for fun. Play the game and explore its features!
            <a
              href='https://ddewi.itch.io/knighdewi'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:underline'>
              Play on Itch.io
            </a>
          </p>
          <div className='flex gap-2 mt-2'>
            <span className='bg-purple-500 text-white px-3 py-1 rounded-full text-xs'>
              #GameDev
            </span>
            <span className='bg-purple-500 text-white px-3 py-1 rounded-full text-xs'>
              #Unity
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
