const Chips = ({
  value,
  classes = "",
}: {
  value: string;
  classes?: string;
}) => {
  return <p className={`text-white px-2 rounded text-center ${classes}`}>{value}</p>;
};
export default Chips;
