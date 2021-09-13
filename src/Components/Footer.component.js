import React from 'react'
import { Link } from "react-router-dom"


function Footer() {
    return (
        <footer id="footer" style={{background: "#3C185B"}}>
		
        <form id="form">
            <h2 class="head">Subscribe to our newsletter</h2>
            <label for="email">
            <input type="email" name="email" id="email" placeholder="Enter Email Address" />
            </label>
            <input  type="submit" id="submit" name="submit" value="submit" />
        </form>
        <div class="col-con">
            <div class="col1" style={{paddingBottom: 2+ 'em'}}>
                <h5 class="co1" style={{paddingBottom: 0.5 + 'em'}}>Contact</h5>
                <span><i class="fas fa-map-marker-alt" style={{marginRight: 1 + 'em'}}></i><span>Ladipo, Lagos</span></span><br /><br />
                <span><i class="fas fa-phone" style={{marginRight: 1 + 'em'}}></i><span>+234 905 407 8392</span></span><br /><br />
                <span><i class="far fa-envelope" style={{marginRight: 1 + 'em'}}></i><span>David.Adefunmilyo@<br />eficoresources.com</span></span><br />
            </div>
            <div class="col2" style={{paddingBottom: 2 + 'em'}}>
                <h5 class="co2">Efico</h5>
                <ul>
                    <li class="cont"><Link to="/about">About Us</Link></li>
                    <li class="cont"><Link to="/services">Services</Link></li>
                    <li class="cont"><Link to="/about">Team</Link></li>
                    <li class="cont"><Link to="/services">Sponsorship</Link></li>
                    <li class="cont"><Link to="/services">Affiliate Programme</Link></li>
                    <li class="cont"><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </div>
            <div class="col3" style={{paddingBottom: 2 + 'em'}}>
                <h5 class="co3">Resources</h5>
                <ul>
                    <li class="cont"><Link to="/blog">Blog</Link></li>
                    <li class="cont"><Link to="/services">Training</Link></li>
                    <li class="cont"><Link to="/faqs">FAQs</Link></li>
                </ul>
            </div>
        </div>
        <div class="con">
            <div class="child2">
                <span><a href="https://www.facebook.com/resources.efico" target="_blank" rel="noreferrer"><i class="fab fa-facebook-square"></i></a></span>
                <span><a href="https://www.instagram.com/p/CSxVJtojf5c/?utm_medium=copy_link" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a></span>
                <span><a href="https://vm.tiktok.com/ZMRHv2mFq/" target="_blank" rel="noreferrer"><i class="fab fa-tiktok"></i></a></span>
                <span><a href="https://anchor.fm/eficoradio/episodes" target="_blank" rel="noreferrer"><i class="fas fa-podcast"></i></a></span>
                <span><a href="https://twitter.com/EficoResources" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a></span>
                <span><a href="https://youtube.com/channel/UC4BCMxcqIsr_ZBBafiAWV4g" target="_blank" rel="noreferrer"><i class="fab fa-youtube"></i></a></span>
                <span><a href="https://www.linkedin.com/company/efico-resources" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a></span>
                
            </div>
            <div class="child1">
                <p>Copyright 2021 All Rights Reserved</p>
            </div>
        </div>
</footer>
    )
}

export default Footer
