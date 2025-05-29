export default function CommandCard({
  command,
  description,
  tag,
}: {
  command: string;
  description: string;
  tag: string;
}) {
  return (
    <div className="bg-gray-900/50 rounded-lg m-2.5 min-w-80 inline-block">
      <div className="border-b-2 border-white w-full">
        <h2 className="bg-gray-700/50 p-4 rounded-t-lg font-bold text-gray-150">{command}</h2>
        <div className="p-4">
          <p className="bg-background p-1.5 rounded-lg w-fit h-fit font-bold">{tag}</p>
        </div>
      </div>
      <p className="p-4">{description}</p>
    </div>
  );
}