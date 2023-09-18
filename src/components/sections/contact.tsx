'use client';

import { useState } from 'react';
import { Copy, Mail, Phone } from 'lucide-react';
import axios from 'axios';

// import Link from 'next/link';
import Button from '@/components/general/button';
import SocialIcons from '@/components/data-display/social-icons';
import Tag from '@/components/data-display/tag';
import IconButton from '@/components/general/icon-button';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import useWindowSize from '@/hooks/use-window-size';
import { copyTextToClipboard } from '@/lib/utils';

let email = 'harshbsharma1209@gmail.com';
let phone = '+91 6263937759';


type CopyValue = 'email' | 'phone';

const ContactSection = () => {

  const [formdata,setformdata] = useState({
    firstname:"",
    lastname:"",
    email:"",
    phone:"",
    message:""
})

const postdata = async(data:any)=>
    {
        console.log(data)
        try{
            
            // const response = await axios.post(`${process.env.BACKEND_URL}`, data);
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`,
                {
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({...data})
                }
            )
            
            return response;
        }
        catch(error)
        {
            console.log("Request can't be send");
        }
    }



function changehandler(e:any)
{
    setformdata((prevData)=>
    (
        {
            ...prevData,
            [e.target.name] : e.target.value
        }
    ))
}

  const submithandler = async(e:any)=>
  {
    e.preventDefault();
    // console.log(formdata);

    try{
      const response = await postdata(formdata);
      console.log('Response from server:', response);
      setformdata({
        firstname:"",
    lastname:"",
    email:"",
    phone:"",
    message:""
      })
    }
    catch(error)
    {
        console.log("Error in sending data")
    }

  }
  
  const { width } = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(
    null
  );

  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      let timoutId: any = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert('Unable to copy!');
    }
  };

  return (
    <Container id="contact">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Get in touch" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          What’s next? Feel free to reach out to me if you are looking for a
          developer, have a query, or simply want to connect.
        </Typography>
      </div>

      <div className="flex flex-col items-center gap-6 md:gap-12">
        <div className="flex flex-col items-center md:gap-4">
          <div className="flex items-center gap-4 md:gap-5">
            <Mail className="h-6 w-6 md:h-8 md:w-8" />
            {/* <Link href={`mailto:${email}`}> */}
            <Typography variant="h2">{email}</Typography>
            {/* </Link> */}
            <IconButton
              size={width && width < 768 ? 'md' : 'lg'}
              onClick={() => handleCopyClick(email, 'email')}
              showTooltip={isCopied && copiedValueType === 'email'}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div>
          {/* <div className="flex items-center gap-4 md:gap-5">
            <Phone className="h-6 w-6 md:h-8 md:w-8" />
            <Link href={`tel:${phone.replace(' ', '')}`}>
            <Typography variant="h2">{phone}</Typography>
            </Link>
            <IconButton
              size={width && width < 768 ? 'md' : 'lg'}
              onClick={() => handleCopyClick(phone.replace(' ', ''), 'phone')}
              showTooltip={isCopied && copiedValueType === 'phone'}
              tooltipText="Copied!"
            >
              <Copy />
            </IconButton>
          </div> */}
          <form className='flex flex-col gap-3 mt-2'
                onSubmit={submithandler}>
            <div className='flex flex-row gap-5'>
              
              <label className=''>
              <p className='font-medium text-gray-600'>First Name *</p>
              <input
                className='border-2 border-solid border-amber-400 rounded-md px-2 
                dark:bg-transparent dark:border-white py-1'
                type='text' 
                required
                name="firstname"
                value={formdata.firstname}
                onChange={changehandler}
              />

              </label>          

              <label className=''>
                <p>Last Name *</p>
                <input
                  className='border-2 border-soli border-amber-400 rounded-md 
                  dark:bg-transparent dark:border-white px-2 py-1'
                  type='text'
                  required
                  name="lastname"
                  value={formdata.lastname}
                  onChange={changehandler}
                />
              </label>
            </div>
            
            <div className='flex flex-row gap-5'>
              <label className=''>
                <p>Email *</p>
                <input
                  className='border-2 border-solid rounded-md border-amber-400
                  dark:bg-transparent dark:border-white px-2 py-1'
                  type='email'
                  required
                  name="email"
                  value={formdata.email}
                  onChange={changehandler}
                />
              </label>

              <label className=''>
                <p>Phone</p>
                <input
                  className='border-2 border-solid rounded-md border-amber-400
                  dark:bg-transparent dark:border-white px-2 py-1'
                  type='tel'
                  name="phone"
                  value={formdata.phone}
                  onChange={changehandler}
                />
              </label>
            </div>
              <p>Message</p>
              <textarea rows={4} placeholder='Please leave your message here'
                  className="font-normal text-md pt-3 pl-3 border-2 border-solid rounded-md
                  dark:bg-transparent dark:border-white px-2 py-1 border-amber-400"
                  name="message"
                  value={formdata.message}
                  onChange={changehandler} 
                />
        
            <div className="flex items-center justify-center gap-4 mt-3">
            
            <Button className='p-3 rounded-3xl w-full'>
              Contact
            </Button>
          </div>    

          </form>


        </div>
        <div className="flex  flex-col items-center gap-2">
          <Typography className="text-center">
            You may also find me on these platforms!
          </Typography>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
