import { rowHeadData, oneRowData, tableComData, tableComData2, twoRowData, threeRowData, fourRowData, fiveRowData } from '@/data/tableData'
import TableCom from '@/components/tableCom'

export default function DestinyTable() {
    return (<table className="w-[82.66vw] max-w-[363.704px] h-[126.133vw] 
          max-h-[554.985px] border-b-[0.279vw] xs:border-b-[1.05px]
           border-r-[0.279vw] xs:border-r-[1.05px] border-r-black  text-center text-black font-tableFont
           ">
        <thead>
            <tr className="border-b-[0.279vw] xs:border-b-[1.05px] border-r-[0.279vw] xs:border-r-[1.05px] border-black h-[11.997vw] xs:h-[52.7868px]
            ">
                <th className="w-[12.7786vw] max-w-[56.225px] border-r-[0.279vw] xs:border-r-[1.05px] border-black bg-tableBg"></th>
                {rowHeadData.map((col, idx) => (
                    <th
                        key={idx}
                        className="w-[17.471vw] max-w-[76.8724px] border-r-[0.13vw] xs:border-r-[0.57px] text-[5.5786vw] xs:text-[20.52px] border-borderColor last:border-r-black bg-tableBg">
                        {col}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            <tr className="h-[11.213vw] xs:h-[49.337px] ">
                <td className="border-b-[0.279vw] xs:border-b-[1.05px] border-r-[0.279vw] xs:border-r-[1.05px] border-r-black border-b-black bg-tableBg" >
                    <div className="text-[3.2vw] xs:text-[14.08px] font-bold">十星</div>
                    <div className="text-[2.085vw] xs:text-[9.174px]">(십성)</div>
                </td>
                {oneRowData.map((item) => (
                    <td key={item.id} className='border-b-[0.279vw] xs:border-b-[1.05px] border-r-[0.13vw] xs:border-r-[0.57px] border-b-black'
                        style={{ borderRightColor: `var(--${item.borderColor})` }}>
                        <div className="text-[3.2vw] xs:text-[14.08px] font-bold">{item.text}</div>
                        <div className="text-[2.66vw] xs:text-[11.704px]">{item.text2}</div>
                    </td>
                ))}
            </tr>
            <tr className="h-[17.733vw] xs:h-[78.02px]">
                <td className="border-b-[0.13vw] xs:border-b-[0.57px] border-r-[0.279vw] xs:border-r-[1.05px] border-r-black border-b-borderColor2 bg-tableBg" >
                    <div className="text-[3.2vw] xs:text-[14.08px] font-bold">天干</div>
                    <div className="text-[2.085vw] xs:text-[9.174px]">(천간)</div>
                </td>
                {tableComData.map((item, idx) => (
                    <td key={idx} className="relative p-0 border-b-[0.13vw] xs:border-b-[0.57px] border-r-[0.13vw] xs:border-r-[0.57px]  border-b-borderColor2"
                        style={{ borderRightColor: `var(--${item.borderColor})` }}>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <TableCom
                                text={item.text}
                                text2={item.text2}
                                text3={item.text3}
                                Bgcolor={item.Bgcolor}
                                textColor={item.textColor}
                            />
                        </div>
                    </td>
                ))}
            </tr>
            <tr className="h-[17.733vw] xs:h-[78.02px]">
                <td className="border-b-[0.279vw] xs:border-b-[1.05px] border-r-[0.279vw] xs:border-r-[1.05px] border-r-black   border-b-black bg-tableBg">
                    <div className="text-[3.2vw] xs:text-[14.08px] font-bold">地支</div>
                    <div className="text-[2.085vw] xs:text-[9.174px]">(지지)</div>
                </td>
                {tableComData2.map((item, idx) => (
                    <td key={idx} className="relative p-0 border-b-[0.279vw] xs:border-b-[1.05px] border-r-[0.13vw] xs:border-r-[0.57px] border-r-borderColor2 border-b-black last:border-r-black ">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <TableCom
                                text={item.text}
                                text2={item.text2}
                                text3={item.text3}
                                Bgcolor={item.Bgcolor}
                                textColor={item.textColor}
                                plus={item.plus}
                            />
                        </div>
                    </td>
                ))}
            </tr>
            <tr className="h-[11.808vw] xs:h-[51.9552px]">
                <td className="border-b-[0.279vw] xs:border-b-[1.05px] border-r-[0.279vw] xs:border-r-[1.05px] border-r-black border-b-black bg-tableBg" >
                    <div className="text-[3.2vw] xs:text-[14.08px] font-bold">十星</div>
                    <div className="text-[2.085vw] xs:text-[9.174px]">(십성)</div>
                </td>
                {twoRowData.map((item) => (
                    <td key={item.id} className='border-b-[0.279vw] xs:border-b-[1.05px] border-r-[0.13vw] xs:border-r-[0.57px] border-b-black last:border-r-black'
                        style={{ borderRightColor: `var(--${item.borderColor})` }}>
                        <div className="text-[3.2vw] xs:text-[14.08px] font-bold">{item.text}</div>
                        <div className="text-[2.66vw] xs:text-[11.704px]">{item.text2}</div>
                    </td>
                ))}
            </tr>
            <tr className="h-[11.808vw] xs:h-[51.9552px]">
                <td className="border-b-[0.279vw] xs:border-b-[1.05px] border-r-[0.279vw] xs:border-r-[1.05px] border-r-black border-b-black bg-tableBg" >
                    <div className="text-[3.2vw] xs:text-[14.08px] font-bold">十星</div>
                    <div className="text-[2.085vw] xs:text-[9.174px]">(십이운성)</div>
                </td>
                {threeRowData.map((item) => (
                    <td key={item.id} className='border-b-[0.279vw] xs:border-b-[1.05px] border-r-[0.13vw] xs:border-r-[0.57px] border-b-black last:border-r-black'
                        style={{ borderRightColor: `var(--${item.borderColor})` }}>
                        <div className="text-[3.2vw] xs:text-[14.08px] font-bold">{item.text}</div>
                        <div className="text-[2.66vw] xs:text-[11.704px]">{item.text2}</div>
                    </td>
                ))}
            </tr>
            <tr className="h-[11.808vw] xs:h-[51.9552px]">
                <td className="border-b-[0.279vw] xs:border-b-[1.05px] border-r-[0.279vw] xs:border-r-[1.05px] border-r-black border-b-black bg-tableBg" >
                    <div className="text-[2.66vw] xs:text-[11.704px] font-bold">十星</div>
                    <div className="text-[2.13vw] xs:text-[9.372px]">(십이신살)</div>
                </td>
                {fourRowData.map((item) => (
                    <td key={item.id} className='border-b-[0.279vw] xs:border-b-[1.05px] border-r-[0.13vw] xs:border-r-[0.57px] border-b-black last:border-r-black'
                        style={{ borderRightColor: `var(--${item.borderColor})` }}>
                        <div className="text-[3.2vw] xs:text-[14.08px] font-bold">{item.text}</div>
                        <div className="text-[2.66vw] xs:text-[11.704px]">{item.text2}</div>
                    </td>
                ))}
            </tr>
            <tr className="">
                <td className="border-b-[0.279vw] xs:border-b-[1.05px] border-r-[0.279vw] xs:border-r-[1.05px] border-r-black border-b-black bg-tableBg">
                    <div className="text-[2.66vw] xs:text-[11.704px] font-bold">貴人</div>
                    <div className="text-[2.13vw] xs:text-[9.372px]">(귀인)</div>
                </td>
                {fiveRowData.map((item) => (
                    <td key={item.id} className='border-b-[0.279vw] xs:border-b-[1.05px] border-r-[0.13vw] xs:border-r-[0.57px] border-b-black last:border-r-black'
                        style={{ borderRightColor: `var(--${item.borderColor})` }}>
                        <div className="text-[3.2vw] xs:text-[14.08px] font-bold">{item.text}</div>
                        <div className="text-[2.66vw] xs:text-[11.704px]">{item.text2}</div>
                        <div className="text-[3.2vw] xs:text-[14.08px] font-bold">{item.text3}</div>
                        <div className="text-[2.66vw] xs:text-[11.704px]">{item.text4}</div>
                        <div className="text-[3.2vw] xs:text-[14.08px] font-bold">{item.text5}</div>
                        <div className="text-[2.66vw] xs:text-[11.704px]">{item.text6}</div>
                    </td>
                ))}
            </tr>
        </tbody>
    </table>)
}