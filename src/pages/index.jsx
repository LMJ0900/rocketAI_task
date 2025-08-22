import Image from "next/image";
import DestinyTable from '@/components/destinyTable'
export default function Home() {
  return (
    <div className="flex items-center flex-col bg-mainBgcolor h-auto">
      <div className="relative w-full max-w-[440px] aspect-[375/652]">
        <div className="absolute top-0 flex flex-col items-center z-20 w-full mt-[clamp(0px,22.4%,98.56px)]">
          <div className="flex flex-col items-center w-[41.86vw] max-w-[184.184px] h-[5.33vw] max-h-[23.45px]">
            <h2 className="text-[5.33vw] xs:text-[23px] leading-[100%] mb-[clamp(0px,3.2vw,14.08px)] font-subTextFont font-normal">제 1장</h2>
            <Image
              src="/images/textBr.png"
              alt="글자 분리선"
              width={300}
              height={300}
              quality={100}
              className="mb-[clamp(0px,3.2vw,14.08px)]"></Image>
            <h2 className="text-[5.33vw] xs:text-[23px] leading-[100%] font-subTextFont font-normal">나의 사주 팔자</h2>
          </div>
        </div>
        <Image
          src="/images/startEdit.jpg"
          alt="스타트 배경 이미지"
          fill
          className="object-cover"
          sizes="(max-width: 440px) 100vw, 440px"
        />
        <div className="absolute top-[80%] inset-0 bg-gradient-to-t from-mainBgcolor to-transparent"></div>
        <div className="absolute bottom-[70%] inset-0 bg-gradient-to-b from-black to-transparent"></div>

        <div className="absolute flex items-center z-10 left-[6.4%] bottom-[-12.5%] w-[57.34%]">
          <Image
            src="/images/speechBubble.png"
            alt="speechBubble"
            width={600}
            height={300}
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 inset-0 flex items-center justify-center ">
            <h2 className="text-[4.26vw]  font-normal text-mainTextColor text-center leading-[150%] pt-[6.13vw] xs:text-[16px] xs:pt-[23px]">
              이제 본격적으로 <br /> OO님의 사주팔자를 <br /> 분석해볼 차례네요.
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[440px] h-[30.4vw] max-h-[133.76px]"></div>
      <div className="relative w-[93.6%] max-w-[411.84px] mr-[clamp(0px,6.4%,28.16px)] aspect-[351/285] mb-[clamp(0px,10.66%,40px)]">
        <Image
          src="/images/middle.png"
          alt="middle"
          fill
          className="object-cover "
          sizes="(max-width: 440px) 100vw, 440px"
        />
        <div className="absolute flex items-center z-10 left-[6.4%] bottom-[-28%] w-[68.095%]">
          <Image
            src="/images/speechBubble2.png"
            alt="speechBubble2"
            width={600}
            height={300}
            className="w-full h-auto block"
          />
          <div className="absolute inset-0 bottom-0 flex items-center justify-center">
            <h2 className="text-[4.26vw] font-normal  text-mainTextColor text-center leading-[150%] pb-[7.12vw] xs:text-[18.74px] xs:pb-[31.32px]">
              제가 oo님의 사주를 <br /> 보기 쉽게 표로 정리했어요
            </h2>
          </div>
        </div>
      </div>
      <div className="relative w-full max-w-[440px]  aspect-[375/306] overflow-hidden">
        <Image
          src="/images/end.png"
          alt="end"
          fill
          className="object-cover object-[27%_center] scale-105"
          sizes="(max-width: 440px) 100vw, 440px"
        />
        <div className="absolute top-[80%] inset-0 bg-gradient-to-t from-mainBgcolor to-transparent"></div>
      </div>
      <div className="w-[93.7vw] max-w-[412.28px] h-[165.6vw]
       max-h-[728.64px] bg-[url('/images/comBg.png')] 
       bg-contain bg-no-repeat bg-[center_30%] bg-[#FAF5ED] flex flex-col
       items-center relative bottom-[4.26vw] xs:bottom-[18.744px]
       outline outline-[3px] outline-outlineColor
       mb-[5.33vw] xs:mb-[23.45px]
       shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
      >
        <span class="pointer-events-none absolute inset-x-[2.1333vw] inset-y-0 xs:inset-x-[8px] border-x border-insetColor content-['']"></span>
        <span class="pointer-events-none absolute inset-y-[2.1333vw] inset-x-0 xs:inset-y-[8px] border-y border-insetColor content-['']"></span>
        <div className="flex flex-col items-center mt-[10.66vw] xs:mt-[46.90px] mb-[5.33vw] xs:mb-[23.45px]">
          <h3 className="text-[4.26vw] xs:text-[18.74px] font-normal text-mainTextColor mb-[3.2vw] xs:mb-[14.08px]">이민재님의 사주</h3>
          <h2 className="text-[5.33vw] xs:text-[23px] font-bold text-mainTextColor">2000년 9월 30일 08:10</h2>
        </div>
        <div className="flex justify-center w-full ">
          <DestinyTable></DestinyTable>
        </div>
      </div>
    </div>
  );
}
