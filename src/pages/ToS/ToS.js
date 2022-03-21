import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import "./ToS.css"
import {useNavigate} from "react-router-dom"

const ToS = () => {
    let navigate = useNavigate();
    
  return (
    <div className='tosContainer'>
      <Navbar className="tosNavbar"/>
        <div className='commissionProjects'>
            <h2>I can provide a wide range of commissioned projects including but not limited too:</h2>
            <ul className='commissionUL'>
                <li className='commissionLI'>Commissioned digital art of family, friends, and pets</li>
                <li className='commissionLI'>Customized clothing such as shirts and jackets</li>
                <li className='commissionLI'>NSFW depending on context</li>
                <li className='commissionLI'>Original characters</li>
                <li className='commissionLI'>Animated GIFs</li>
                
            </ul>
            
            <div className='commissionProjectsButtonContainer'>
            <button className='commissionProjectsButton' 
                onClick={()=>{navigate("/contact");}}
            >Contact us for a comission!</button>
            </div>
        </div>
        <div className='commissionProcess'>
            <h2 className= 'comissionProcessh4'>Comission Process</h2>
            <ol>
                <li className='commissionProcessLI'>To inquire about a commission, you will reach out to me via email, my contact link, or by DM’ing me on my Instagram, Tik-Tok, or Patreon.</li>
                <li className='commissionProcessLI'>I will review your response and get back to you if I accept your inquiry. Prices for digital art are posted below. Commissions for other artwork such as paintings, clothing, or other custom work vary based on the cost of materials and time for art. Generally, if all materials are provided by the client, I will charge roughly $50 per hour of work the project requires.</li>
                <li className='commissionProcessLI'>Upon the approval of your project, payment will need to be provided in FULL before I start the commission. Payments can be made via Venmo, Cashapp, or Paypal.</li>
                <li className='commissionProcessLI'>You will recieve updates on the project and you can provide reasonable feedback up to three times. Revisions towards the end of the commissions creation will not be accepted unless minor, such as text changes in digital art.</li>
                <li className='commissionProcessLI'>Once completed, I will send you the final files of the digital art, or ship you the item and provide a tracking number. Please note for shipped items, you will be asked to cover the cost of shipping of your choice.</li>
            </ol>
        </div>

        <div className='commissionToS'>
            <h2 className='commissionToSh4'>Terms of Service</h2>
            <p>Hiring me for commissions means you agree to the following terms. Violation of these terms may lead to you being blacklisted and declined future commissions.</p>
            <ul>
                <li className='commissionToSLI'>Client agrees to pay in full via an approved payment method. If you do not pay within three days without notice, I may move on to the next client and your commission will be forfeit</li>
                <li className='commissionToSLI'>It may take up to two weeks to finish a commission once work has begun. Rush commissions may be provided for an additional fee</li>
                <li className='commissionToSLI'>Once the commission has begun, should the client decide to abandon the project, up to a fifty percent refund will be provided and only before the first revision</li>
                <li className='commissionToSLI'>Only three revisions are permitted during the drafting phase and only up to three minor edits may be made in the final stages of the project. Any other changes will require an additional charge</li>
                <li className='commissionToSLI'>If you would like an original design with no reference or guidance, these commissions will incur an additional charge up to 50% to pay for the added design process</li>
                <li className='commissionToSLI'>You agree to credit me as the artist and designer for the project, and will not claim the commission as your own work</li>
                <li className='commissionToSLI'>I retain all rights to the commissioned art to use in marketing and social media. Commercial rights for merchandising and resale may be purchased for an additional fee.</li>
                <li className='commissionToSLI'>You hold responsibility for the permissions and DMCA claims or takedowns for projects animated or designed around artwork you provide or for artwork featuring copyrighted characters</li>               
            </ul>
        </div>
        
      <Footer/>
    </div>
)
}

export default ToS
