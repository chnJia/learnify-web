const SideMenu: React.FC = () => {
  return (
    <div className="relative left-0 h-min-screen bg-dark-moderate-blue text-white p-6 w-64">
      <div className="bg-slate-800 opacity-70 py-3 px-3 rounded-lg">
        <p className="text-white font-bold text-2xl">Role</p>
        <p className="text-light-yellow font-bold text-lg mt-2">Student</p>
      </div>
    </div>
  );
};

export default SideMenu;