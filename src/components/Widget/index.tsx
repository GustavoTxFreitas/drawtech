import { VscGithubInverted } from "react-icons/vsc";
import "./styles.css";

export default function Widget() {
    return (
        <a
            target="_blank"
            id="github"
            href="https://github.com/GustavoTxFreitas/drawtech">

            <VscGithubInverted
                size={20}
                className="icon"
                title="Contribuir no Github" />

            <span
                className="text">
                Código Fonte
            </span>
        </a>

    )
}