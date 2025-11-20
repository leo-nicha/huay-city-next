import React from "react";

interface LottoItem {
    date: string;
    prize1: string;
    last2: string;
    front3: string[];
    last3: string[];
}

const lottoData: LottoItem[] = [
    { date: "16 ธันวาคม 2567", prize1: "097863", last2: "21", front3: ["290", "742"], last3: ["339", "881"] },
    { date: "1 ธันวาคม 2567", prize1: "669843", last2: "61", front3: ["559", "626"], last3: ["098", "654"] },
    { date: "30 ธันวาคม 2566", prize1: "625544", last2: "89", front3: ["600", "648"], last3: ["456", "882"] },
    { date: "16 ธันวาคม 2566", prize1: "356757", last2: "85", front3: ["058", "410"], last3: ["584", "964"] },
    { date: "1 ธันวาคม 2566", prize1: "256797", last2: "91", front3: ["055", "265"], last3: ["092", "280"] },
    { date: "30 ธันวาคม 2565", prize1: "157196", last2: "58", front3: ["007", "522"], last3: ["250", "425"] },
    { date: "16 ธันวาคม 2565", prize1: "845093", last2: "14", front3: ["912", "593"], last3: ["593", "885"] },
    { date: "1 ธันวาคม 2565", prize1: "375805", last2: "08", front3: ["170", "786"], last3: ["409", "421"] },
    { date: "30 ธันวาคม 2564", prize1: "819068", last2: "36", front3: ["591", "979"], last3: ["419", "547"] },
    { date: "16 ธันวาคม 2564", prize1: "639235", last2: "83", front3: ["097", "629"], last3: ["476", "522"] },
    { date: "1 ธันวาคม 2564", prize1: "077258", last2: "82", front3: ["739", "740"], last3: ["401", "485"] },
    { date: "30 ธันวาคม 2563", prize1: "803628", last2: "19", front3: ["336", "804"], last3: ["321", "924"] },
    { date: "16 ธันวาคม 2563", prize1: "201303", last2: "70", front3: ["377", "828"], last3: ["072", "517"] },
    { date: "1 ธันวาคม 2563", prize1: "100994", last2: "84", front3: ["093", "776"], last3: ["834", "984"] },
    { date: "30 ธันวาคม 2562", prize1: "510541", last2: "81", front3: ["116", "382"], last3: ["140", "250"] },
    { date: "16 ธันวาคม 2562", prize1: "529924", last2: "97", front3: ["043", "138"], last3: ["555", "665"] },
    { date: "1 ธันวาคม 2562", prize1: "453522", last2: "81", front3: ["261", "617"], last3: ["013", "457"] },
    { date: "30 ธันวาคม 2561", prize1: "735867", last2: "02", front3: ["031", "913"], last3: ["701", "884"] },
    { date: "16 ธันวาคม 2561", prize1: "356564", last2: "62", front3: ["480", "948"], last3: ["297", "369"] },
    { date: "1 ธันวาคม 2561", prize1: "021840", last2: "67", front3: ["045", "307"], last3: ["561", "988"] },
    { date: "30 ธันวาคม 2560", prize1: "911234", last2: "98", front3: ["495", "373"], last3: ["953", "504"] },
    { date: "16 ธันวาคม 2560", prize1: "955596", last2: "89", front3: ["616", "836"], last3: ["290", "938"] },
    { date: "1 ธันวาคม 2560", prize1: "451005", last2: "33", front3: ["303", "626"], last3: ["257", "601"] },
    { date: "30 ธันวาคม 2559", prize1: "377712", last2: "46", front3: ["477", "769"], last3: ["304", "890"] },
];

const LottoDataDec: React.FC = () => {

    return (

        <div className="min-h-screen transition-all duration-700 bg-linear-to-b from-amber-50 to-white flex flex-col items-center p-4 font-sans relative mt-12">

            <div className="w-full lg:max-w-5xl lg:mx-auto text-center mt-12 mb-6 pl-4 pr-4">
                <h1 className="text-3xl font-extrabold text-amber-700 font-serif mb-4">
                    สถิติหวยน่าสนใจประจำงวดที่ 01 ธันวาคม 2568
                </h1>

                {/* Desktop Table */}
                <div className="hidden lg:block">
                    <table className="w-full border-collapse text-sm">
                        <thead>
                            <tr className="bg-purple-600 text-white">
                                <th className="p-2 border">วันที่</th>
                                <th className="p-2 border">รางวัลที่ 1</th>
                                <th className="p-2 border">เลขท้าย 2 ตัว</th>
                                <th className="p-2 border">เลขหน้า 3 ตัว</th>
                                <th className="p-2 border">เลขท้าย 3 ตัว</th>
                            </tr>
                        </thead>

                        <tbody>
                            {lottoData.map((item, index) => (
                                <tr key={index} className="text-center border">
                                    <td className="p-2 border">{item.date}</td>
                                    <td className="p-2 border font-semibold">{item.prize1}</td>
                                    <td className="p-2 border">{item.last2}</td>
                                    <td className="p-2 border">{item.front3.join(" - ")}</td>
                                    <td className="p-2 border">{item.last3.join(" - ")}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile List */}
                <div className="lg:hidden space-y-3">
                    {lottoData.map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-xl p-4 shadow-sm bg-white"
                        >
                            <p className="font-bold text-lg text-purple-700">{item.date}</p>

                            <p className="mt-2">
                                <span className="font-semibold">รางวัลที่ 1:</span> {item.prize1}
                            </p>

                            <p>
                                <span className="font-semibold">เลขท้าย 2 ตัว:</span> {item.last2}
                            </p>

                            <p>
                                <span className="font-semibold">เลขหน้า 3 ตัว:</span> {item.front3.join(" - ")}
                            </p>

                            <p>
                                <span className="font-semibold">เลขท้าย 3 ตัว:</span> {item.last3.join(" - ")}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LottoDataDec;
