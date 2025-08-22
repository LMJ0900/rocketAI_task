export default function TableCom({ text, text2, text3, Bgcolor, textColor, plus }) {
    return (
        <div className={`h-[14.786vw] max-h-[65.0584px] w-[14.786vw] max-w-[65.0584px] rounded-[3.733vw] xs:rounded-[14px] border-black`}
            style={{ backgroundColor: `var(--${Bgcolor})`, borderWidth: `${plus}`, color: `${textColor}` }}>
            <div className="flex flex-col h-full justify-center  items-center">
                <h4 className="text-[2.026vw] leading-[1.7] xs:text-[8.9143px] p-[0px] m-[0px]">{text}</h4>
                <h2 className="text-[6.695vw] leading-[1] xs:text-[29.458px] p-[0px] m-[0px]">{text2}</h2>
                <h3 className="text-[2.2319vw]  xs:text-[9.8207px] p-[0px] m-[0px]">{text3}</h3>
            </div>
        </div>
    )
}