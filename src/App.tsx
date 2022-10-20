import { Fade } from 'react-awesome-reveal'

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
        <header className='flex justify-between items-center'>
          <nav class="navbar navbar-expand-md shadow-lg py-2 pl-4 pr-12 relative flex items-center w-full justify-between">
	  <h1 className='flex items-center'>
            <img src={logo} alt="ferramentas de desenho" className='logo' />
            <span className='font-bold text-xl text-gray-900'>rawTech</span>
          </h1>	     
	       <div class="px-6">
	       <button class="navbar-toggler border-0 py-3 px-2 md:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentX" aria-controls="navbarSupportedContentX" aria-expanded="false" aria-label="Toggle navigation">
								<svg
												               aria-hidden="true"
													                 focusable="false"
															           data-prefix="fas"
																             class="w-5"
																	               role="img"
																		                 xmlns="http://www.w3.org/2000/svg"
																				           viewBox="0 0 448 512"
																					           >
																						             <path
																							                 fill="currentColor"
																									             d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
																										               ></path>
																											               </svg>
																												             </button>
																													           <div class="navbar-collapse collapse grow items-center" id="navbarSupportedContentX">
																												<ul class="navbar-nav mr-auto flex flex-col md:flex-row">
<li className="nav-item"><a className="nav-link block pr-2 px-2 py-2 text-gray-700 hover:text-gray-500 transition duration-150 ease-in-out" href="#home">Início</a></li>
              <li className="nav-item"><a className="nav-link block pr-2 px-2 py-2 text-gray-700 hover:text-gray-500 transition duration-150 ease-in-out" href="#project">O Projeto</a></li>
              <li className="nav-item"><a className="nav-link block pr-2 px-2 py-2 text-gray-700 hover:text-gray-500 transition duration-150 ease-in-out" href="#gallery">Galeria</a></li>
              <li className="nav-item"><a className="nav-link block pr-2 px-2 py-2 text-gray-700 hover:text-gray-500 transition duration-150 ease-in-out" href="#aboutus">Sobre nós</a></li>
              <li className="nav-item"><a className="nav-link block pr-2 px-2 py-2 text-gray-700 hover:text-gray-500 transition duration-150 ease-in-out" href="#contacts">Contatos</a></li>
              <li className="nav-item"><a className="nav-link block pr-2 px-2 py-2 text-gray-700 hover:text-gray-500 transition duration-150 ease-in-out" href="#">Inscreva-se</a></li>
            </ul>
	    </div>
	    </div>
          </nav>
        </header>

	<Fade direction="up">
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
	</section>
	</Fade>
<section id="project">
<Fade direction="up" cascade>
<h2>Heading 2 | Some smart text</h2>
<p className="text-xl font-light leading-relaxed mt-6 mb-4 text-gray-800">Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
		 <div class="flex flex-wrap w-1/2">
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
            </div></div></div>
          </section>
	  </Fade>
        </section>
        <section id="gallery">
	<Fade direction="up">
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
	  </Fade>
	  </section>

        <section id="aboutus">
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc neque, porttitor efficitur malesuada aliquam, consequat vehicula justo. Fusce laoreet nisi non magna iaculis, vel posuere magna congue. Donec egestas elementum dui vel tristique. Donec ut ultrices massa, aliquam scelerisque felis. Donec sollicitudin rutrum libero. Suspendisse congue libero sed purus faucibus, sit amet pulvinar ipsum tempus. Proin posuere risus at dui efficitur, sed consequat ante efficitur.</p>
        </section>

        <section id="contacts">

        </section>

        <footer>
          &copy;2022 - Todos os direitos reservados
        </footer>
      </main>
      <Widget />
    </>
  )
}
