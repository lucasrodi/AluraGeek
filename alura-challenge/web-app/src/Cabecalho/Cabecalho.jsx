
import '../css/Cabecalho/index.css'
import React from 'react';
import { Link } from 'react-router-dom';



export default function Cabecalho() {
    return (
        <header className="cabecalho">
            <nav className="cabecalho__nav">
                <Link className="cabecalho__nav--link" to="/"><svg className="cabecalho__link--img" width="42" height="31"
                    viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M40.9557 24.0209L38.685 8.06252C38.1017 3.95835 34.5811 0.916687 30.4355 0.916687H11.5615C7.41593 0.916687 3.8953 3.95835 3.312 8.06252L1.04129 24.0209C0.582983 27.2292 3.06201 30.0834 6.29099 30.0834C7.70758 30.0834 9.04084 29.5209 10.0408 28.5209L14.7488 23.8334H27.2481L31.9354 28.5209C32.9353 29.5209 34.2894 30.0834 35.6852 30.0834C38.935 30.0834 41.414 27.2292 40.9557 24.0209ZM18.9153 13.4167H14.7488V17.5834H12.6656V13.4167H8.4992V11.3334H12.6656V7.16669H14.7488V11.3334H18.9153V13.4167ZM27.2481 11.3334C26.1024 11.3334 25.1649 10.3959 25.1649 9.25002C25.1649 8.10419 26.1024 7.16669 27.2481 7.16669C28.3939 7.16669 29.3314 8.10419 29.3314 9.25002C29.3314 10.3959 28.3939 11.3334 27.2481 11.3334ZM31.4146 17.5834C30.2688 17.5834 29.3314 16.6459 29.3314 15.5C29.3314 14.3542 30.2688 13.4167 31.4146 13.4167C32.5603 13.4167 33.4978 14.3542 33.4978 15.5C33.4978 16.6459 32.5603 17.5834 31.4146 17.5834Z"
                        fill="#2A7AE4" />
                </svg>
                    <span className="cabecalho__logo--alura">Alura</span>
                    <span className="cabecalho__logo--Geek">Geek</span>
                </Link>
                <input className="cabecalho__input" placeholder="Oque voce deseja encontrar?" type="text" />
                <button className="cabecalho__button--busca">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.4999 11.5H11.7099L11.4299 11.23C12.6299 9.83002 13.2499 7.92002 12.9099 5.89002C12.4399 3.11002 10.1199 0.890015 7.31989 0.550015C3.08989 0.0300153 -0.470107 3.59001 0.0498932 7.82001C0.389893 10.62 2.60989 12.94 5.38989 13.41C7.41989 13.75 9.32989 13.13 10.7299 11.93L10.9999 12.21V13L15.2499 17.25C15.6599 17.66 16.3299 17.66 16.7399 17.25C17.1499 16.84 17.1499 16.17 16.7399 15.76L12.4999 11.5ZM6.49989 11.5C4.00989 11.5 1.99989 9.49002 1.99989 7.00002C1.99989 4.51002 4.00989 2.50002 6.49989 2.50002C8.98989 2.50002 10.9999 4.51002 10.9999 7.00002C10.9999 9.49002 8.98989 11.5 6.49989 11.5Z"
                            fill="#A2A2A2" />
                    </svg>
                </button>

            </nav>

        </header>
    );
}



