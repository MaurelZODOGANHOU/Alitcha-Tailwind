import React from 'react'

const Bouton5 = () => {
  return (
 
    <section class="text-gray-600 body-font bg-gray-50 h-screen flex justify-center items-center">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4 text-center">
                <div class="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500">
                    <div class=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md">
                        <div>
                            <h2 class="text-gray-900 text-lg font-bold">Prix Total</h2>
                            <h3 class="mt-2 text-xl font-bold text-yellow-500 text-left">+ 150.000 FCFA</h3>
                            <p class="text-sm font-semibold text-gray-400">Dernière transaction</p>
                            <button class="text-sm mt-6 px-4 py-2 bg-yellow-400 text-white rounded-lg  tracking-wider hover:bg-yellow-300 outline-none">Ajouter à ma carte</button>
                        </div>
                        <div class="bg-gradient-to-tr from-yellow-500 to-yellow-400 w-32 h-32  rounded-full shadow-2xl shadow-yellow-400 border-white  border-dashed border-2  flex justify-center items-center ">
                            <div>
                                <h1 class="text-white text-2xl">ALITCHA</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Bouton5