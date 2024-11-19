// import CarouselDefault from "../components/Carousel"

const Dress = () => {
  return (
    <div className="min-h-screen grid grid-cols-2 mt-20 font-montserrat">
      <div className="mx-auto max-w-xl">
        <p className="text-sm text-primary-darker">
          home/
          <span className="text-xl font-semibold"> Vestido Fenda</span>
        </p>
      </div>
      <main className="mx-auto max-w-xl">
        <div>
          <p className="text-sm">6059_309</p>
          <h1 className="text-2xl font-semibold text-primary-darker mt-1">Vestido De Festa Longo com Fenda Lateral e Manga Longa </h1>
          <h2 className="text-2xl font-medium text-primary-darker mt-8 ">
            R$ 350,00
            <span className="text-base font-normal text-black ml-2">10x de 35,00 sem juros</span>
          </h2>
          <button className="text-white bg-primary-darker font-medium mt-4 h-10 w-[593px] rounded-md hover:bg-btn-hover">COMPRAR</button>
        </div>

        <div className="h-px bg-primary-darker/40 mt-7"></div>

        <div className="mt-6 text-md">
          <h2 className="text-xl font-semibold text-primary-darker">DESCRIÇÃO</h2>

          <p className="text-justify text-black mt-5">Vestido longo de festa, a epítome da elegância com o nosso deslumbrante modelo. Este vestido emana sensualidade onde quer que você vá, destacando-se com um sedutor decote tomara que caia, complementado por um corset que realça suas curvas. Feito sob medida para abraçar delicadamente cada contorno do seu corpo, apresenta uma ousada fenda na perna e um deslumbrante corte sereia. É a escolha ideal para qualquer ocasião em que você deseje deixar uma impressionante marca de sofisticação e beleza.</p>

          <h3 className="font-lg font-semibold text-primary-darker mt-4">Detalhes:</h3>
          <ul className="list-disc ml-7">
            <li>Drapeado na cintura</li>
            <li>Tomara que caia</li>
            <li>Barbatanas</li>
            <li>Corset</li>
            <li>Fenda</li>
          </ul>

          <h3 className="font-lg font-semibold text-primary-darker mt-4">Ideal para ocasiões:</h3>
          <ul className="list-disc ml-7">
            <li>Casamento no campo</li>
            <li>Casamento de dia</li>
            <li>Casamento a noite</li>
            <li>Eventos ao ar livre</li>
            <li>Casamento na praia</li>
            <li>Formatura</li>
          </ul>
        </div>

        <div className="h-px bg-primary-darker/40 mt-7"></div>

        <div className="mt-6">
          <h2 className="text-xl font-medium text-primary-darker">Frete</h2>
          <div className="flex items-center justify-center gap-11 mt-4">
            <input type="number" placeholder="Digite seu CEP..." className="border border-black rounded-md w-[317px] h-12 placeholder:font-medium placeholder:text-gray-600 p-4"/>
            <button className="text-white bg-primary-darker font-medium mt-4 h-12 w-[226px] rounded-md hover:bg-btn-hover">CALCULAR</button>
          </div>
        </div>

        <div className="h-px bg-primary-darker/40 mt-7"></div>

        <div className="mt-5">
          <h2 className="text-xl font-medium text-primary-darker">Compartilhar</h2>
          <div className="flex item center">

          </div>
        </div>

      </main>
    </div>
  )
}

export default Dress