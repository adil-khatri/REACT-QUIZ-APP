import React from 'react';
import './contactStyle.css';
// import IconPhone from './images/icon-phone.png';
// import IconPhone from 'images/IconPhone.png'
import IconPhone from './images/icon-phone.png'
import IconEMail from './images/icon-email.png';
import IconAddress from './images/icon-address.png';


const Contact = () => {
    return (
        <>
            <div className='contact-details'>
                <h1 className='common-heading'>Contact Us</h1>
                <div className='container-details grid grid-three-column'>
                    <div className='details'>
                        <h5><span className='details-icon'><img src={IconPhone} alt="phonr-icon"></img></span>  Phone</h5>
                        <a href="tel:+919029124666"> +91 9029124666 </a>
                        {/* <p>+91 9029124666</p> */}
                    </div>

                    <div className='details'>
                        <h5><span className='details-icon'><img src={IconEMail} alt="phonr-icon"></img></span>  Email</h5>
                        <a href="mailto:harshchotaliya@269gmail.com">
                            harsh269@gmail.com
                        </a>
                    </div>

                    <div className='details'>
                        <h5><span className='details-icon'><img src={IconAddress} alt="phonr-icon"></img></span>  Address</h5>
                        <p>Mumbai, India</p>
                    </div>
                </div>

            </div>
            <div className='container-contact'>
                <h2 className='contact-heading'>Get in Touch</h2>
                <div className='contact-form'>
                    <form action="#">
                        <div class="grid grid-three-column">
                            <div>
                                <input type="text" name="username" placeholder="Username" id="username" required></input>
                            </div>

                            <div>
                                <input type="email" name="email" placeholder="Email" id="email" required></input>
                            </div>

                            <div>
                                <input type="phone" name="phone" placeholder="Your Phone number" id="email" required></input>
                            </div>
                        </div>
                        <div>
                            <textarea name="textarea" id="textarea" cols="60" rows="5" placeholder='Message' required></textarea>
                        </div>

                        <div className='div-form-btn'>
                            <input type="submit" name='btn-send-message' value="Send Message"></input>
                        </div>
                    </form>
                </div>

            </div>
        </>
    );
}

export default Contact;
