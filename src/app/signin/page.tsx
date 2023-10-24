import SignInForm from './sign-in-form';
import AuthWrapperOne from '@/app/shared/auth-layout/auth-wrapper-one';
import Image from 'next/image';
import UnderlineShape from '@/components/shape/underline';

export default function SignIn() {
  return (
    <AuthWrapperOne
      title={
        <>
          판매자 로그인{' '}
          <span className="relative inline-block">
            GentleDog
            <UnderlineShape className="absolute -bottom-2 start-0 h-2.5 w-100 text-blue md:w-full xl:-bottom-1.5 xl:w-36" />
          </span>{' '}
          에 오신것을 환영합니다.
        </>
      }
      description="GentleDog는 AI를 활용한 우리 아이에게 어울리는 옷을 추천해주는 애견전용 맞춤 쇼핑몰입니다."
      bannerTitle="The simplest way to manage your workspace."
      bannerDescription="Amet minim mollit non deserunt ullamco est sit aliqua dolor do
      amet sint velit officia consequat duis."
      isSocialLoginActive={true}
      pageImage={
        <div className="relative mx-auto aspect-[4/3.37] w-[500px] xl:w-[620px] 2xl:w-[820px]">
          <Image
            src={
              'https://isomorphic-furyroad.s3.amazonaws.com/public/auth/sign-up.webp'
            }
            alt="Sign Up Thumbnail"
            fill
            priority
            sizes="(max-width: 768px) 100vw"
            className="object-cover"
          />
        </div>
        
      }
    >
      <SignInForm />
    </AuthWrapperOne>
  );
}
