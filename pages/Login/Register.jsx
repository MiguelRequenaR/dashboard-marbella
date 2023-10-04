import Image from "next/image"

function Register() {
  return (
    <div className='bg-[#e3e9f3]'>
        <div className='flex flex-col-2 items-center justify-center h-screen'>
            <div className="flex items-center justify-center w-[389px] h-[509px] bg-[#295dc3] shadow-2xl rounded-l-lg">
                <Image
                    src="/image/loginImage.jpg"
                    alt="logo"
                    width={300}
                    height={10}
                    className="object-contain"
                />
            </div>
            <div className='bg-[#eaf5f5] w-[389px] h-[509px] rounded-r-lg shadow-2xl'>
                <div className="flex flex-col items-center justify-around mt-5">
                    <Image
                        src="/image/logoCM.png"
                        alt="logo"
                        width={70}
                        height={10}
                        className="object-contain rounded-full"
                    />
                    <h1 className="font-black text-indigo-600">CONSTRUCTORA MARBELLA</h1>
                </div>
                <div className='flex justify-around items-center mb-8 pt-6'>
                    <p className='text-indigo-600 text-sm'>Iniciar Sesión</p>
                    <h2 className='text-[#292f30] text-2xl font-black'>Registrarse</h2>
                </div>
                <form action="">
                    <div className='flex justify-center'>
                        <input 
                            type="text" 
                            placeholder='Usuario'
                            className='bg-white px-2 py-2 rounded-lg w-[80%] mb-5 border border-gray-300'
                        /> 
                    </div>
                    <div className='flex justify-center'>
                        <input 
                            type="text"
                            placeholder='Contraseña'
                            className='bg-white px-2 py-2 rounded-lg w-[80%] mb-5 border border-gray-300'
                        />
                    </div>
                    <div className='flex justify-center'>
                        <input 
                            type="text"
                            placeholder='Repite la contraseña'
                            className='bg-white px-2 py-2 rounded-lg w-[80%] mb-10 border border-gray-300'
                        />
                    </div>
                    <div className='flex justify-center'>
                        <input 
                            type="submit" 
                            value="Registrarse"
                            className='bg-indigo-600 text-white px-2 py-3 rounded-full shadow-lg w-[50%] focus:outline-none hover:bg-indigo-800 transition duration-500 ease-in-out cursor-pointer'
                        />
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register