import useDropdown from "@/utils/useDropdown";
import { IconDotsVertical } from "@tabler/icons-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const Action = ({
  fromBottom,
  onDelete,
}: {
  fromBottom: boolean;
  onDelete: () => void;
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
      <IconDotsVertical
        onClick={toggleOpen}
        className="cursor-pointer w-5 h-5 lg:w-6 lg:h-6"
      />
      <div
        className={`${open ? "opacity-100 scale-100 visible" : "opacity-0 invisible scale-0"
          } absolute ${fromBottom
            ? "bottom-0 ltr:origin-bottom-right rtl:origin-bottom-left"
            : "top-0 ltr:origin-top-right rtl:origin-top-left"
          } ltr:right-5 rtl:left-5  z-[15] min-w-[122px] duration-300 dark:border dark:border-n600 shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)] p-1.5 rounded-md bg-n0 dark:bg-bg4`}>
        <button className="py-1.5 hover:bg-primary/5 w-full text-start rounded-md duration-300 block px-3">
          Ver
        </button>
        <button className="py-1.5 hover:bg-primary/5 w-full text-start rounded-md duration-300 block px-3">
          Editar
        </button>
        <button
          onClick={handleDelete}
          className="py-1.5 hover:bg-primary/5 w-full text-start rounded-md duration-300 block px-3">
          Cancelar
        </button>

      </div>
    </div>
  );
};

export default Action;
