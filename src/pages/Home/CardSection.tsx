import React from 'react'

const CardSection = () => {
    return (
        <div className='bg-white'>
            <div className="p-4 mb-10">
                <div className="mx-auto max-w-screen-xl text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">A peça que faltava ...</h1>
                    <p className="my-4 mb-10 font-bold">A Smart Mecânico é uma startup que oferece serviços mecânicos delivery práticos, rápidos e sustentáveis sem sair de casa.</p>

                    <div className="grid grid-cols-4 gap-4">

                        <div className="col-span-1">
                            <div className="shadow hover:shadow-lg transition-shadow duration-300 rounded overflow-hidden h-96 flex flex-col border-transparent">
                                <div className="p-4 flex flex-col items-center justify-between flex-grow">
                                    <i className="fas fa-car-alt fa-3x text-primary"></i>
                                    <h2 className="text-2xl font-bold text-primary mb-4 text-center max-w-xs mt-5"> Comodidade </h2>
                                    <p className="my-4 text-center">Serviços Automotivos Personalizados e de Qualidade Superior para uma Experiência Conveniente e Confiável</p>
                                    <div className="mt-auto">
                                        <button className="py-2 px-4 bg-blue-500 text-white rounded-3xl bg-primary">Saber Mais</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1">
                            <div className="shadow hover:shadow-lg transition-shadow duration-300 rounded overflow-hidden h-96 flex flex-col border-transparent">
                                <div className="p-4 flex flex-col items-center justify-between flex-grow">
                                    <i className="fas fa-calendar-alt fa-3x text-primary"></i>
                                    <h2 className="text-2xl font-bold text-primary mb-4 text-center max-w-xs mt-5"> Facilidade </h2>
                                    <p className="my-4 text-center">Todos os dados de seu carro em uma agenda on-line, podendo ter acesso a todo o histórico de manutenções realizadas, o próximo dono poderá ter a certeza de que cuidamos bem do seu carro.</p>
                                    <div className="mt-auto">
                                        <button className="py-2 px-4 bg-blue-500 text-white rounded-3xl bg-primary">Saber Mais</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="shadow hover:shadow-lg transition-shadow duration-300 rounded overflow-hidden h-96 flex flex-col border-transparent">
                                <div className="p-4 flex flex-col items-center justify-between flex-grow">
                                    <i className="fas fa-smile-beam fa-3x text-primary"></i>
                                    <h2 className="text-2xl font-bold text-primary mb-4 text-center max-w-xs mt-5"> Sem Preocupações </h2>
                                    <p className="my-4 text-center">Não lide com terceiros, resolvemos tudo, garantimos todos os serviços realizados com excelência por nossos mecânicos especializados, e ainda contamos com a atuação direta de um Engenheiro Mecânico responsável.</p>
                                    <div className="mt-auto">
                                        <button className="py-2 px-4 bg-blue-500 text-white rounded-3xl bg-primary">Saber Mais</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="shadow hover:shadow-lg transition-shadow duration-300 rounded overflow-hidden h-96 flex flex-col border-transparent">
                                <div className="p-4 flex flex-col items-center justify-between flex-grow">
                                    <i className="fas fa-stopwatch fa-3x text-primary"></i>
                                    <h2 className="text-2xl font-bold text-primary mb-4 text-center max-w-xs mt-5"> Poupe Tempo </h2>
                                    <p className="my-4 text-center">Não tenha trabalho de levar seu carro a uma oficina, nós vamos até você.</p>
                                    <div className="mt-auto">
                                        <button className="py-2 px-4 bg-blue-500 text-white rounded-3xl bg-primary">Saber Mais</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSection;
