const MastHead = ({ children }) => {
  return (
    <div className="h-30 grid grid-cols-3 grid-row-2 grid-flow-col gap-4">
      <div>Lorem</div>
      <div className="logoContainer place-content-center">
        <img src={"/assets/img/logo.png"} />
      </div>
      <div>Search</div>
    </div>
  );
};
export default MastHead;
