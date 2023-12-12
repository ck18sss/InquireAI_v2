import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import {LoginLink, RegisterLink, LogoutLink, getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server"
import { ArrowRight } from 'lucide-react'


const Navbar = async () => {

  const {getUser} = getKindeServerSession()
  const user = await getUser()
  const location = user ? "/dashboard" : "/";

  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          
          <Link href={location} className='flex z-40 font-semibold text-2xl'>
            <span>InquireAI.</span>
          </Link>

          <div className="hidden items-center space-x-4 sm:flex">

            <Link
              href='/pricing'
              className={buttonVariants({
                variant: "ghost", 
                size: "sm"
              })}
            >
              Pricing 
            </Link>

            { !user || !user.id ? (
              <>
                <LoginLink 
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm"
                  })}
                >
                  Sign In
                </LoginLink>

                <RegisterLink
                  className={buttonVariants({
                    size: "sm", 
                  })}                  
                >
                  Get Started <ArrowRight className="ml-1.5 h-5 w-5"/>
                </RegisterLink>
              </>
            ) : (
              <>
                <LogoutLink
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}                
                >
                  Sign Out
                </LogoutLink>
                
                {/* Display user profile pic */}
                <img 
                  src={user.picture} 
                  className="rounded-full w-8 h-8 border-solid"
                />
              </>
            )}

          </div>
        
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar