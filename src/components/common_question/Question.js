import "./question.css";
import arrowImg from './arrow.png';
import underlineImg from './underline.png';

const Question = () => {
    return ( 
        <div className="question-content">
            <div className="top-content">
                <div className="main-content">
                <div className="center-heading">Some common <br/> question</div>
                <img className="center-heading-img" src={underlineImg} alt="underline-stroke" />
                </div>
                <div class="question-class">
                    <input type="checkbox" id="question1" name="q"  class="questions"/>
                    <label for="question1" class="question">
                    Question goes here
                    <img class="img-class" src={arrowImg} alt="arrowLikeImg"/>
                    </label>
                    <div class="answers">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ipsa quam magnam libero non nobis? Eveniet aspernatur consequuntur vero? Placeat ullam dolore neque natus quaerat. Rem officiis at nam aliquid!.
                    </div>
                </div>
                <hr class="line"></hr>
                <div class="question-class">
                    <input type="checkbox" id="question2" name="q"  class="questions"/>
                    <label for="question2" class="question">
                    Question goes here
                    <img class="img-class" src={arrowImg} alt="arrowLikeImg"/>
                    </label>
                    <div class="answers">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ipsa quam magnam libero non nobis? Eveniet aspernatur consequuntur vero? Placeat ullam dolore neque natus quaerat. Rem officiis at nam aliquid!.
                    </div>
                </div>
                <hr class="line"></hr>
                <div class="question-class">
                    <input type="checkbox" id="question3" name="q"  class="questions"/>
                    <label for="question3" class="question">
                    Question goes here
                    <img class="img-class" src={arrowImg} alt="arrowLikeImg"/>
                    </label>
                    <div class="answers">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste ipsa quam magnam libero non nobis? Eveniet aspernatur consequuntur vero? Placeat ullam dolore neque natus quaerat. Rem officiis at nam aliquid!.
                    </div>
                </div>
                <hr class="line"></hr>
            </div>
            <div class="btn-div"><button class="btn">Create my free resume</button></div>
            <div class="footer">
                <div class="line-div"><hr class="line-2"/></div>
                <div class="footer-content">
                    <div class="left-section">
                        <div class="head">Logo</div>
                        <div class="para-footer">
                            SUBSCRIBE TO THE <br/> NEWSLETTER FOR UPDATE
                        </div>
                        <input type="text" id="label-1" placeholder="yourname@domain.com" class="input-class"/>
                        <button class="btn">Subscribe Now</button>
                    </div>
                    <div class="right-section">
                        <div class="subsection">
                            <div class="title">GENERAL</div>
                            <div class="links">
                                <a href="#">Contact Us</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Documentation</a>
                            </div>
                        </div>
                        <div class="subsection">
                            <div class="title">COMMUNITY</div>
                            <div class="links">
                                <a href="#">Github Respository</a>
                                <a href="#">Join us on Discord</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
     );
}
 
export default Question;