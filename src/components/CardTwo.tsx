import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump } from '@fortawesome/free-solid-svg-icons';

const CardTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
    <div className="flex items-center justify-center">
      <span className="text-center font-bold">Abastecimentos</span>
    </div>
    <div className="flex items-center justify-between mt-2">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faGasPump} className="fill-primary dark:fill-white mt-5" size="2x" />
      </div>
      <div className="flex items-center">
        <h4 className="text-title-md font-bold text-black dark:text-white mt-5">R$<span>2.225,00</span></h4>
      </div>
    </div>
  </div>
  );
};

export default CardTwo;
