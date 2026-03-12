import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CustomButton({ label, clsName, dataTgl, dataTarget, icon }) {
    if (!icon && label) {
        return (
            <button className={clsName} data-bs-toggle={dataTgl} data-bs-target={dataTarget}>
                {label}
            </button>
        );
    } else if (icon && label) {
        return (
            <button className={clsName} data-bs-toggle={dataTgl} data-bs-target={dataTarget}>
                {label} <FontAwesomeIcon icon={icon} />
            </button>
        );
    } else {
        return (
            <button className={clsName} data-bs-toggle={dataTgl} data-bs-target={dataTarget}>
                <FontAwesomeIcon icon={icon} />
            </button>
        );
    }

};

export default CustomButton;