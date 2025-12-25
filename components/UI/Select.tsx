type Props = {
  label: string;
  options: string[];
};

export function SelectUI({ label, options }: Props) {
  return (
    <div>
      <label className="text-sm text-gray-300">{label}</label>
      <select className="mt-1 w-full bg-white/10 border border-[#2c1147] rounded-lg px-3 py-2 text-sm outline-none text-white">
        <option className="text-black bg-white">Select</option>
        {options.map((opt: string) => (
          <option key={opt} className="text-white bg-[#160e2a]">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
