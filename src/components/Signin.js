import fb from "../assets/fb.png";
import linkedin from "../assets/linkedin.png";
import gplus from "../assets/gplus.png";
const Signin = _ =>
{
    return (
        <div className="signindiv">
            <nav>
                <span><h2 className="greentext company">Company</h2><h2 className="name">Name</h2></span>
            </nav>
            <main>
                <div className="flex">
                    <h1 className="greentext signacc">Sign in to Account</h1>
                </div>
                <div className="hr">
                    <hr/>
                </div>
                <div>
                    <ul className="flex ul">
                        <li>
                            <a className="social" href="https://www.facebook.com/"><img src={ fb } alt="fb" /></a>
                        </li>
                        <li>
                            <a className="social" href="https://www/linkedin.com/"><img src={ linkedin } alt="linkedin" /></a>
                        </li>
                        <li>
                            <a className="social" href="https://google.com/"><img src={ gplus } alt="gplus" /></a>
                        </li>
                    </ul>
                </div>
                <div className="flex">
                    <h3 className="oruse">or use your email account</h3>
                </div>
                <div className="flex">
                    <form>
                        <label htmlFor="email">Email</label>
                        <input className="email" type="email" id="email" name="email" /><br/>
                        <label htmlFor="pass">Password</label>
                        <input className="pass" type="password" id="pass" name="pass" /><br />
                        <span className="remfor">
                            <span>
                                <input type="checkbox" /><p>Remember me</p>
                            </span>
                            
                            <a href="https://www.google.com/">Forgot Password?</a>
                        </span>
                        <div className="flex">
                            <input className="submit" type="submit" value= "Submit"  />
                        </div>
                    </form>
                </div>
                
            </main>
            <footer>
                <ul>
                    <li>
                        <a href="https://google.com/">Privacy Policy</a>
                    </li>
                    <li>
                        &#128900;
                    </li>
                    <li>
                        <a href="https://google.com/">Terms & Conditions</a>
                    </li>
                </ul>
            </footer>
        </div>
    )
};

export default Signin;