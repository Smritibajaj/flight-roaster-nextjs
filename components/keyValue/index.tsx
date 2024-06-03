import { IKey } from "../flightDetailCard/types";

const LabelValue = ({ label, value }: IKey) => {
  return (
    <p>
      <strong>{label}</strong> <span>{value}</span>
    </p>
  );
};

export default LabelValue
