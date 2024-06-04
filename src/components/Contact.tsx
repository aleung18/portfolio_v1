import { colorPalette } from '../assets'
import { PalettePopup } from '../components'
import { useState } from "react"

type SubmissionPopup = {
    isOpen: boolean;
    children: Function;
  }

const Contact = (props : SubmissionPopup) => {
  const [popup, setPopup] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let form = document.getElementById('contact-form') as HTMLFormElement | null;
    if (!form) return;
    let data = new FormData(form);

    // Convert FormData to URL-encoded string
    let formDataString = Array.from<[string, string]>(data.entries() as Iterable<[string, string]>)
        .map(([key, value]) => encodeURIComponent(key) + '=' + encodeURIComponent(value))
        .join('&');

    try {
        await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formDataString,
        });
        setSubmitted(true);
    } catch (err) {
        alert(err);
    }
  };

  if (submitted) {
    return (props.isOpen) ? (
        <div className='popup'>
            <div className='popup-inner sm:max-w-[550px] max-w-[300px] font-heyTiny text-black'>
                <button className='close-btn text-[24px]' onClick={() => props.children(false)}>close</button>
                <h3 className='text-[20px] text-center mb-5'>thanks for your message!</h3>
                <p className='text-center'>hope you're doing well :) i'll be in touch soon!</p>
            </div>
        </div>
    ) : ""
  }

  return (
    <section id='contact' className='w-full flex flex-col py-[120px] sm:px-36 px-6'>
      <div className='mb-6'>
        <h1 className='text-white font-plunct text-[48px]'>
          Contact
        </h1>
      </div>

      <div className="font-plunct text-white flex flex-col justify-center items-center">
        <form id="contact-form" name="contact" data-netlify="true" method="POST" netlify-honeypot="bot-field" className="inline-flex flex-wrap justify-between w-full" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact"/>
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
          
          <div className="inline-block flex-[1_1_40%] mr-[3%] mb-[40px]">
            <label id='name-label' htmlFor="name" className="label">Name</label>
            <input type="text" id="name" name="name" className="input relative text-[22px]" required/>  
          </div>

          <div className="inline-block flex-[1_1_40%] ml-[3%] mb-[40px]">
            <label id="email-label" htmlFor="email" className="label">Email</label>
            <input type="text" id="email" name="email" className="input relative text-[22px]" required/>
          </div>

          <div className="inline-block w-full my-[40px]">
            <label id="message-label" htmlFor="message" className="label">Message</label>
            <textarea name="message" id="message" className="input relative h-[88px] py-[8px] text-[22px]" required></textarea>
          </div>

          <div id='submit' className="w-full flex justify-center items-center">
            <button type="submit" className="text-white font-plunct text-[48px]">Send Message</button>
          </div>

        </form>

        <img src={colorPalette} alt="color palette" className='cursor-pointer h-auto w-[200px] mt-6 block sm:hidden' onClick={() => setPopup(true)}/>

        <PalettePopup isOpen={popup} children={setPopup}/>
      </div>
    </section>
  )
}
export default Contact