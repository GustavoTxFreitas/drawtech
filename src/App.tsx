import Widget from './components/Widget'
import qrcode from './assets/qrcode.png'
import logo from '/favicon3.svg'

import 'tw-elements';
import './styles/App.css'
import "./styles/main.css";


export default function App() {
  return (
    <>
      <main>
        <header className='flex justify-between items-center p-2 px-8'>
          <h1 className='flex items-center'>
            <img src={logo} alt="ferramentas de desenho" className='logo' />
            <span className='font-bold text-xl text-gray-900'>rawTech</span>
          </h1>

          <nav>
            <ul className='flex mr-8'>
              <li className="nav-item"><a className="nav-link block pr-2 px-2 py-2 text-gray-700 hover:text-gray-500 transition duration-150 ease-in-out" href="#home">Início</a></li>
              <li className="nav-item"><a className="nav-link block pr-2 px-2 py-2 text-gray-700 hover:text-gray-500 transition duration-150 ease-in-out" href="#project">O Projeto</a></li>
              <li className="nav-item"><a className="nav-link block pr-2 px-2 py-2 text-gray-700 hover:text-gray-500 transition duration-150 ease-in-out" href="#gallery">Galeria</a></li>
              <li className="nav-item"><a className="nav-link block pr-2 px-2 py-2 text-gray-700 hover:text-gray-500 transition duration-150 ease-in-out" href="#aboutus">Sobre nós</a></li>
              <li className="nav-item"><a className="nav-link block pr-2 px-2 py-2 text-gray-700 hover:text-gray-500 transition duration-150 ease-in-out" href="#contacts">Contatos</a></li>
              <li className="nav-item"><a className="nav-link block pr-2 px-2 py-2 text-gray-700 hover:text-gray-500 transition duration-150 ease-in-out" href="#">Inscreva-se</a></li>
            </ul>
          </nav>
        </header>

        <section id="home">

          <div className="text-center">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
              className="rounded-full w-32 mb-4 mx-auto"
              alt="Avatar"
            />
            <h5 className="text-xl font-medium leading-tight">Gabriel Simão</h5>
            <p className="text-gray-500 mb-2">@gsimao</p>

            <img className='w-20 mx-auto' src={qrcode} alt="qrcode" />
          </div>

          <section className="overflow-hidden text-gray-700">
            <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
              <div className="flex flex-wrap -m-1 md:-m-2">
                <div className="flex flex-wrap w-1/2">
                  <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
                  </div>
                  <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
                  </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                  <div className="w-full p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
                  </div>
                </div>
              </div>
            </div>
          </section>


        </section>

        <section id="project">

        </section>

        <section id="gallery">
          <div id="carouselExampleControls" className="carousel slide carousel-fade relative" data-bs-ride="carousel">
            <div className="carousel-inner relative w-full overflow-hidden rounded-lg">
              <div className="carousel-item active relative float-left w-full">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                  className="block w-full"
                  alt="Wild Landscape"
                />
              </div>
              <div className="carousel-item relative float-left w-full">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                  className="block w-full"
                  alt="Camera"
                />
              </div>
              <div className="carousel-item relative float-left w-full">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                  className="block w-full"
                  alt="Exotic Fruits"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>



        </section>

        <section id="aboutus">

        </section>

        <section id="contacts">

        </section>

        <footer>
          &copy;2022 - Todos os direitos reservados
        </footer>
      </main >
      <Widget />
    </>
  )
}
