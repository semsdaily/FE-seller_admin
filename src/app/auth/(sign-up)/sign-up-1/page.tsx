import Image from 'next/image';
import UnderlineShape from '@/components/shape/underline';
import SignUpForm from './sign-up-form';
import AuthWrapperOne from '@/app/shared/auth-layout/auth-wrapper-one';

export default function SignUp() {
  return (
    <AuthWrapperOne
      title={
        <>
          GentleDog 입점을 환영합니다.{' '}
          <span className="relative inline-block">
            {/* <UnderlineShape className="absolute -bottom-2 start-0 h-2.5 w-28 text-blue xl:-bottom-1.5 xl:w-36" /> */}
          </span>
        </>
      }
      description="사업자 등록번호, 통신판매업 신고 번호 확인 후 순차적으로 등록해드리고 있으니 양해부탁드립니다. 대표자명으로 가입부탁드립니다"
      bannerTitle="GentleDog 페이지에 오신것을 환영합니다"
      bannerDescription="견주와 애견의 만족도를 최선으로 생각하는 맞춤형 AI 애견 옷 사이트 GentleDog입니다. 입점은 순차적으로 안내드리고 있으니 많은 양해 부탁드립니다"
      isSocialLoginActive={true}
      pageImage={
        <div className="relative mx-auto aspect-[4/3.37] w-[500px] xl:w-[620px] 2xl:w-[820px]">
          <Image
            src={
              'public/assets/images/dog.jpg'
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
      <SignUpForm />
    </AuthWrapperOne>
  );
}
