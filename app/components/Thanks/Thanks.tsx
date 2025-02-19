import React from "react";
import "./styles.css";

const Thanks: React.FC<{ setShowResult: (value: boolean) => void }> = ({ setShowResult }) => {
    return (
        <div className="text-white mt-[50px]">
            <div className="mt-[17px]">
                <p className="text-center m-0 p-0 text-[#9EA5C4] text-[25px]">GRAZIE PER AVER</p>
                <p className="text-center m-0 p-0 text-[#9EA5C4] text-[25px]">COMPLETATO IL TEST!</p>
            </div>

            <div className="mt-[17px]">
                <p className="text-center m-0 p-0 text-[18px]">Il tuo resiltato e pronto e ti aspetta:</p>
                <p className="text-center m-0 p-0 text-[18px]">scopri subito la tua palette ideale e i</p>
                <p className="text-center m-0 p-0 text-[18px]">consigli di bellezza personalizzati</p>
            </div>

            <div className="text-center">
                <button
                    onClick={() => setShowResult(true)}
                    className="px-3 mt-4 bg-[#9EA5C4] w-[300px] h-[48px] transition ">
                    VISUALIZZA IL TUO RISULTATO
                </button>
            </div>

            <div className="mt-[17px]">
                <p className="text-center m-0 p-0 text-[18px]">Non vediamo l&apos;ora di</p>
                <p className="text-center m-0 p-0 text-[18px]">sapere cosa ne pensi!</p>
            </div>
        </div>
    )
}

export default Thanks;