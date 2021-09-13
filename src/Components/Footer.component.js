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
                    <li class="cont"><Link to="#">About Us</Link></li>
                    <li class="cont"><Link to="#">Services</Link></li>
                    <li class="cont"><Link to="#">Team</Link></li>
                    <li class="cont"><Link to="#">Sponsorship</Link></li>
                    <li class="cont"><Link to="#">Affiliate Programme</Link></li>
                    <li class="cont"><Link to="#">Contact Us</Link></li>
                </ul>
            </div>
            <div class="col3" style={{paddingBottom: 2 + 'em'}}>
                <h5 class="co3">Resources</h5>
                <ul>
                    <li class="cont"><Link to="#">Blog</Link></li>
                    <li class="cont"><Link to="#">Training</Link></li>
                    <li class="cont"><Link to="/faqs">FAQs</Link></li>
                </ul>
            </div>
        </div>
        <div class="con">
            <div class="child2">
                <span><Link to="https://www.facebook.com/resources.efico"><i class="fab fa-facebook-square"></i></Link></span>
                <span><Link to="https://www.instagram.com/p/CSxVJtojf5c/?utm_medium=copy_link"><i class="fab fa-instagram"></i></Link></span>
                <span><Link to="https://vm.tiktok.com/ZMRHv2mFq/"><i class="fab fa-tiktok"></i></Link></span>
                <span><Link to="https://anchor.fm/eficoradio/episodes"><i class="fas fa-podcast"></i></Link></span>
                <span><Link to="https://twitter.com/EficoResources"><i class="fab fa-twitter"></i></Link></span>
                <span><Link to="https://youtube.com/channel/UC4BCMxcqIsr_ZBBafiAWV4g"><i class="fab fa-youtube"></i></Link></span>
                <span><Link to="https://www.linkedin.com/company/efico-resources"><i class="fab fa-linkedin"></i></Link></span>
                
            </div>
            <div class="child1">
                <p>Copyright 2021 All Rights Reserved</p>
            </div>
        </div>
</footer>
    )
}

export default Footer
