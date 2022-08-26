import { quotes } from "../assets";


const FeedbackCards = ({ content, name, title, img, id }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 my-5 feedback-card">
    <img src={ quotes } alt="Quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-poppins font-normal text-white text-[18px] leading-[32px] my-10"> {content} </p>

    <div className="flex flex-row">
      <img src ={ img } alt={name} className="w-[48] h-[48] rounded-full"/>
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-white text-[20px] leading-[32px]">{name}</h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[32px]">{title}</p>
      </div>
    </div>
  </div>
)

export default FeedbackCards
