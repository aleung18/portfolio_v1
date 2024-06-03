import { artPaletteRed } from "../assets";
import { artPaletteBlue } from "../assets";
import { artPaletteGreen } from "../assets";
import { artPaletteYellow } from "../assets";

type PalettePopupProps = {
  isOpen: boolean;
  children: Function;
}

const PalettePopup = (props: PalettePopupProps) => {
  return (props.isOpen) ? (
    <div className='popup'>
      <div className='popup-inner sm:max-w-[550px] max-w-[300px] font-heyTiny text-black'>
        <button className='close-btn text-[24px]' onClick={() => props.children(false)}>close</button>
        <h3 className='text-[20px] text-center mb-5'>ashton's art palette <br /> (coming soon)</h3>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center m-2">
            <div className="flex flex-col justify-center items-center cursor-pointer m-4">
              <img src={artPaletteRed} alt="artPaletteRedChoice" className="h-auto w-[150px]"/>
              <p className="font-heyTiny text-[20px]">music</p>
            </div>
            <div className="flex flex-col justify-center items-center cursor-pointer">
              <img src={artPaletteBlue} alt="artPaletteBlueChoice" className="h-auto w-[150px]"/>
              <p className="font-heyTiny text-[20px]">video</p>
            </div>
          </div>

          <div className="flex flex-row justify-center">
            <div className="flex flex-col justify-center items-center cursor-pointer m-4">
              <img src={artPaletteGreen} alt="artPaletteGreenChoice" className="h-auto w-[150px]"/>
              <p className="font-heyTiny text-[20px]">run log</p>
            </div>
            <div className="flex flex-col justify-center items-center cursor-pointer">
              <img src={artPaletteYellow} alt="artPaletteYellowChoice" className="h-auto w-[150px]"/>
              <p className="font-heyTiny text-[20px]">other projects</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  ) : "";
}

export default PalettePopup