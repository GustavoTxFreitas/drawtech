import './styles/App.css'
import "./styles/main.css";


export default function CarouselItem() {
    return (
        <div className="carousel-item relative float-left w-full">
            <img
                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                className="block w-full"
                alt="Camera"
            />
        </div>
    )
}
