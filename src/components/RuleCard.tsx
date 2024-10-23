type RuleCardProps = {
  order: number;
  name: string;
  description: string;
}

const RuleCard: React.FC<RuleCardProps> = ({ order, name, description }) => {
  return (
    <div className="flex flex-col items-start p-2">
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 mr-6 bg-[#1D976C] flex justify-center items-center rounded-full">
          <span className="text-white font-bold text-4xl">{order}</span>
        </div>
        <h2 className="text-white text-[1.75rem] font-bold">{name}</h2>
      </div>
      <p className="text-left text-white font-bold text-[1.05rem]">
        {description}
      </p>
    </div>
  );
};

export default RuleCard;
