import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-base-200 p-10">
                <aside>
                    <h1 className='footer-title'>
                        CS — Ticket System
                    </h1>
                    <p className='text-[#A1A1AA]'>Welcome to our Support Zone: your  <br /> one-stop hub for fast solutions, expert <br /> guidance, and seamless troubleshooting <br /> to keep you moving.</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover text-[#A1A1AA]">About us</a>
                    <a className="link link-hover text-[#A1A1AA]">Our Mission</a>
                    <a className="link link-hover text-[#A1A1AA]">Contact Sales</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover text-[#A1A1AA]">Product & Services</a>
                    <a className="link link-hover text-[#A1A1AA]">Customer Stories</a>
                    <a className="link link-hover text-[#A1A1AA]">Download Apps</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover text-[#A1A1AA]">Privacy policy</a>
                    <a className="link link-hover text-[#A1A1AA]">Terms & Conditions</a>
                    <a className="link link-hover text-[#A1A1AA]">Join Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>

                    <a className="link link-hover flex items-center justify-center gap-2 text-[#A1A1AA]"><span className='bg-white p-1 rounded-full'><FaXTwitter className='text-black'/></span>
                        @CS — Ticket System</a>

                    <a className="link link-hover flex items-center justify-center gap-2 text-[#A1A1AA]">
                        <span className='bg-white p-1 rounded-full'><TiSocialLinkedin className='text-black'/></span>
                        @CS — Ticket System</a>

                    <a className="link link-hover flex items-center justify-center gap-2 text-[#A1A1AA]"><span className='bg-white p-1 rounded-full'><FaFacebook className='text-black'/></span>
                        @CS — Ticket System</a>

                    <a className="link link-hover flex items-center justify-center gap-2 text-[#A1A1AA]"><span className='bg-white p-1 rounded-full'><TfiEmail className='text-black'/></span>
                        support@cst.com</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;