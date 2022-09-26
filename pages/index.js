import { faCaretDown, faSeedling } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Image from 'next/image'
import Bold from '../components/Bold'
import Citation from '../components/Citation'
import QnaPill from '../components/QnaPill'
import styles from '../styles/Home.module.css'

export const citations = new Map();
citations.set('You have been reduced to absurdity.', 'https://en.wikipedia.org/wiki/Reductio_ad_absurdum')

export default function Home() {
  return (
    <>
      <Head>
        <title>Why Veganism</title>
        <meta name="description" content="Why veganism?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-[#060b37] open-sans text-gray-100'>
        <div className='px-8 py-4 w-full flex flex-row justify-between items-center'>
          <div onClick={{/**/ }} className='flex flex-row items-center'>
            <FontAwesomeIcon className='w-16' icon={faSeedling} />
            <h1 className='text-2xl  mx-2 font-extrabold'>Why-Veganism</h1>
          </div>
          <div className='flex flex-row gap-12 '>
            <p className='hover:opacity-70 hover:cursor-pointer'>
              Fundamental question
            </p>
            <p className='hover:opacity-70 hover:cursor-pointer'>
              Contact
            </p>
            <p className='hover:opacity-70 hover:cursor-pointer'>
              Common arguments
            </p>
          </div>
        </div>
        <div className='text-center bg-[#091153] flex flex-col py-8 min-h-screen'>
          <div className='mx-64 max-w-[50rem] self-center text-xl'>
            Alright, lets start off with a pretty fundamental question.
            <h1 className='text-4xl mt-8'>What is the <span className='font-bold'>morally relevant </span>
              difference between humans and animals
              that makes it morally okay to turn <span className='font-bold'>animals</span> into hamburgers but <span className='font-bold'>not humans</span>?
            </h1>
            <div className='mt-8'>
              If <span className='font-bold'>no answer</span> to this can be found,
              <span className='font-bold'> veganism logically follows</span>.
            </div>
          </div>

          <div className='h-[0rem] border-[#060b37] border-y-[0.15rem] rounded-2xl mx-24 my-8'>

          </div>

          <QnaPill question={`They're not human`} >
            If an alien race where to visit us tommorow with
            the exact same level of intelligence, appearance and ability to feel pain, but they&apos;re not human per se.
            Would it be okay to turn them into hamburgers?
            
            <br /><br />
            <Bold>If you say no:</Bold> Then the distinction is not one of species and it must be something else, so keep looking!
            
            <br /><br />
            <Bold>If you say yes:</Bold> <Citation citation={'You have been reduced to absurdity.'} />
          </QnaPill>

          <QnaPill question={`Intelligence`} >
            If we were to find a human that was just as intelligent as a pig, would it be okay to turn them into meat?
            Furthermore, should society do involuntary heart transplants from stupid people to smart people to save the smart persons life?
          </QnaPill>

          <QnaPill question={`Ability to suffer`} >
            I agree! If you believe this, the <span className='font-bold'>logical conclusion is to go vegan</span>.
            Animals are capable of suffering and feeling emotional pain just like us.
          </QnaPill>

          <QnaPill question={`Social contract`} >
            The argument goes like this: &apos;if animals cannot respect the golden rule 
            (Treat others as you would like others to treat you). Then <Bold>they do not deserve moral consideration</Bold>&apos;.
            
            <br /><br />
            The problem with this is that you have now accepted the conclusion that <Bold>there is no act against an animal that is wrong.</Bold>
            
            <br /><br />
            Under this logic: raping & torturing animals is morally permissible. And all animal rights should be done away with.
            Would this be morally acceptable?

            <br /><br />
            Furthermore, do <Bold>severely mentally disabled people </Bold> 
            who cannot adhere to the golden rule deserve moral consideration?

            <br /><br />
            <Bold>If you say no:</Bold> You are not willing to own the logical conclusions of your argument,
            which is a <Citation citation={'Logical contradiction'}>logical contradiction</Citation>
            
            <br /><br />
            <Bold>If you say yes:</Bold> <Citation citation={'You have been reduced to absurdity.'}>You have been reduced to absurdity.</Citation>
          
          </QnaPill>

          <QnaPill question={`I dont care, I want my steak!`} >
            I dont know how to tell you that you should be a person that cares about the impacts of their choices
          </QnaPill>


        </div>

      </div>

      <p></p>
    </>

  )
}
