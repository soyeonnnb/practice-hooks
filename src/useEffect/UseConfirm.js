// 사용자가 무언가 하기 전에 확인

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  // onCancel 은 의무적인게 아니기 때문에 만약 존재하는데 함수가 아니면 이 되는거
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    // confirm하면 인식x --> 어떤 함수인지 몰라서 그런거니까 window.confirm으로 수정
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};
const UseConfirmApp = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="useconfirm">
      <h2>UseConfirm</h2>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};
export default UseConfirmApp;
