import useDropdown from "@/utils/useDropdown";
import { IconDotsVertical } from "@tabler/icons-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Action = ({
  fromBottom,
  onDelete,
  showDetails,
}: {
  fromBottom: boolean;
  onDelete: () => void;
  showDetails: () => void;
}) => {
  const { open, ref, toggleOpen } = useDropdown();
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#20B757",
      cancelButtonColor: "#FF6161",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete();
        toast.success("Item Deleted Successfully", {
          position: "bottom-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    });
  };
  return (
    <div className="relative top-0" ref={ref}>
      <IconDotsVertical onClick={toggleOpen} className="cursor-pointer" />
      <div
        className={`${open ? "block" : "hidden"} absolute ${
          fromBottom ? "bottom-0" : "top-0"
        } ltr:right-5 rtl:left-5 z-30 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] min-w-[130px] p-1.5 rounded-md bg-n0 dark:bg-bg4`}>
        <button
          onClick={showDetails}
          className="py-1.5 hover:bg-primary w-full text-start rounded-md hover:text-n30 duration-300 block px-3">
          See Details
        </button>
        <button
          onClick={handleDelete}
          className="py-1.5 hover:bg-primary w-full text-start rounded-md hover:text-n30 duration-300 block px-3">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Action;
