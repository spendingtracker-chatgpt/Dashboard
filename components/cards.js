import { FaPlus } from 'react-icons/fa';
import { FiCreditCard } from 'react-icons/fi';
import { MdExposureNeg1, MdExposureNeg2 } from 'react-icons/md';

const Cards = () => {
  return (
    <div className="flex flex-col">
      <div className="grid-c-title flex items-center justify-between mb-4">
        <h3 className="grid-c-title-text">Cards</h3>
        <button className="grid-c-title-icon">
          <FaPlus size={20} /> 
        </button>
      </div>
      <div className="bg-gradient flex-1 p-4 rounded">
        <p>Balance</p>
        <div className="lg-value mt-2 mb-4 text-scarlet-v1">Dhs 4300,00</div>
        <div className="card-wrapper flex">
          <span className="card-pin-hidden text-lg mr-2">**** **** ****</span>
          <span className="text-gray-500">1234</span>
        </div>
        <div className="card-logo-wrapper flex justify-between items-center mt-4">
          <div>
            <p className="text-silver-v1 text-sm mb-1">Expires</p>
            <p className="text-white text-sm">12/22</p>
          </div>
          <div className="card-logo flex">
            <div className="logo-shape1 w-9 h-9 rounded-full bg-scarlet-v1 mr-2"></div>
            <div className="logo-shape2 w-9 h-9 rounded-full bg-yellow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
