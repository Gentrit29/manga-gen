function SearchHeaderSection({ name }: { name: string }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="h-10 w-1.5 rounded-sm bg-green-500"></div>
      <h2 className="text-2xl font-bold text-white">Result for {name}</h2>
    </div>
  );
}

export default SearchHeaderSection;
